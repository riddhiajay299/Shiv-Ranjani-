// DARSHANA - Core Client-Side Application Logic

// Global Application State
const state = {
  activeCategory: "all",
  activeGeneration: "all",
  searchQuery: "",
  selectedFabrics: [],
  maxPrice: 30000,
  sortBy: "featured",
  activeCurrency: "INR",
  cart: JSON.parse(localStorage.getItem("DARSHANA_cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("DARSHANA_wishlist")) || [],
  activeDrapeId: "drape-nivi",
  appliedCoupon: null,
  activeQuickViewProduct: null,
  isTailoringSelectedInModal: false
};

// Initial Setup on DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  initCurrency();
  initDrapeStudio();
  initFilters();
  initSearch();
  initDrawersAndModals();
  renderProducts();
  updateCartBadge();
  updateWishlistBadge();
  renderCart();
  renderWishlist();
  initHeaderScroll();
});

// Format Price with Active Currency
function formatPrice(priceINR) {
  const curr = CURRENCIES[state.activeCurrency] || CURRENCIES.INR;
  const converted = Math.round(priceINR * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

// Currency Selector Handler
function initCurrency() {
  const currencySelect = document.getElementById("currencySelect");
  if (currencySelect) {
    currencySelect.value = state.activeCurrency;
    currencySelect.addEventListener("change", (e) => {
      state.activeCurrency = e.target.value;
      renderProducts();
      renderCart();
      renderWishlist();
      if (state.activeQuickViewProduct) {
        renderQuickViewModal(state.activeQuickViewProduct);
      }
      showToast(`Currency changed to ${state.activeCurrency}`, "💱");
    });
  }
}

// Header Shadow on Scroll
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const countEl = document.getElementById("productCountText");
  if (!grid) return;

  // Filter logic
  let filtered = PRODUCTS_DATA.filter((item) => {
    // Category filter
    if (state.activeCategory !== "all" && item.category !== state.activeCategory) {
      return false;
    }
    // Generation filter
    if (state.activeGeneration !== "all" && item.generation !== state.activeGeneration) {
      return false;
    }
    // Fabric filter
    if (state.selectedFabrics.length > 0) {
      const matchesFabric = state.selectedFabrics.some((f) =>
        item.fabric.toLowerCase().includes(f.toLowerCase())
      );
      if (!matchesFabric) return false;
    }
    // Price filter
    if (item.priceINR > state.maxPrice) {
      return false;
    }
    // Search query
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchCraft = item.craft.toLowerCase().includes(q);
      const matchFabric = item.fabric.toLowerCase().includes(q);
      const matchOccasion = item.occasion.toLowerCase().includes(q);
      if (!matchName && !matchCraft && !matchFabric && !matchOccasion) return false;
    }
    return true;
  });

  // Sort logic
  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.priceINR - b.priceINR);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.priceINR - a.priceINR);
  } else if (state.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update counter
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} designs`;
  }

  // Empty state
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: #fff; border-radius: 12px; border: 1px dashed var(--color-border);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: var(--color-primary); margin-bottom: 0.5rem;">No Traditional Pieces Match Your Filter</h3>
        <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">Try adjusting your price range, fabric choices, or generational style.</p>
        <button class="btn btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  // Render cards
  grid.innerHTML = filtered
    .map((product) => {
      const isWishlisted = state.wishlist.includes(product.id);
      const discountPercent = Math.round(
        ((product.originalPriceINR - product.priceINR) / product.originalPriceINR) * 100
      );

      const genBadge =
        product.generation === "classic"
          ? `<span class="badge badge-classic">Timeless Heritage</span>`
          : `<span class="badge badge-modern">Gen-Z Modern Cut</span>`;

      const silkMarkBadge = product.hasSilkMark
        ? `<span class="badge badge-silkmark">✨ Pure Silk Mark</span>`
        : "";

      return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-img-container">
          <img src="${product.images[0]}" alt="${product.name}" class="product-img" loading="lazy" />
          
          <div class="product-badges">
            ${genBadge}
            ${silkMarkBadge}
          </div>

          <div class="product-actions-floating">
            <button class="floating-action-btn ${isWishlisted ? "active-wishlist" : ""}" 
                    title="Add to Wishlist" 
                    onclick="toggleWishlist('${product.id}')">
              ♥
            </button>
            <button class="floating-action-btn" 
                    title="Quick Preview" 
                    onclick="openQuickView('${product.id}')">
              👁
            </button>
          </div>
        </div>

        <div class="product-card-body">
          <div class="product-sub-craft">${product.craft}</div>
          <h3 class="product-card-title">${product.name}</h3>

          <div class="product-rating-row">
            <span class="stars">★ ★ ★ ★ ★</span>
            <span>(${product.rating} · ${product.reviewCount} reviews)</span>
          </div>

          <div class="product-price-row">
            <span class="product-price-current">${formatPrice(product.priceINR)}</span>
            <span class="product-price-original">${formatPrice(product.originalPriceINR)}</span>
            <span class="product-discount-pill">${discountPercent}% OFF</span>
          </div>

          <div class="product-card-footer">
            <button class="btn-card-add" onclick="quickAddToCart('${product.id}')">
              <span>🛍 Add to Bag</span>
            </button>
            <button class="btn-card-quickview" title="View Specifications" onclick="openQuickView('${product.id}')">
              <span>Details</span>
            </button>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

// Category & Generation Filter Handlers
function initFilters() {
  // Category tabs
  const catTabs = document.querySelectorAll(".category-tab-btn");
  catTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      catTabs.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Generational style sidebar buttons
  const genBtns = document.querySelectorAll(".gen-btn");
  genBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      genBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeGeneration = btn.dataset.generation;
      renderProducts();
    });
  });

  // Price Range Slider
  const priceSlider = document.getElementById("priceSlider");
  const priceLabel = document.getElementById("maxPriceLabel");
  if (priceSlider && priceLabel) {
    priceSlider.addEventListener("input", (e) => {
      state.maxPrice = parseInt(e.target.value);
      priceLabel.textContent = formatPrice(state.maxPrice);
      renderProducts();
    });
  }

  // Fabric Checkboxes
  const fabricCheckboxes = document.querySelectorAll(".fabric-checkbox");
  fabricCheckboxes.forEach((cb) => {
    cb.addEventListener("change", () => {
      state.selectedFabrics = Array.from(fabricCheckboxes)
        .filter((c) => c.checked)
        .map((c) => c.value);
      renderProducts();
    });
  });

  // Sort Select
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }
}

// Search Box
function initSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }
}

// Reset Filters
function resetFilters() {
  state.activeCategory = "all";
  state.activeGeneration = "all";
  state.searchQuery = "";
  state.selectedFabrics = [];
  state.maxPrice = 30000;
  state.sortBy = "featured";

  // Reset UI elements
  document.querySelectorAll(".category-tab-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.category === "all");
  });
  document.querySelectorAll(".gen-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.generation === "all");
  });
  document.querySelectorAll(".fabric-checkbox").forEach((cb) => (cb.checked = false));

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  const priceSlider = document.getElementById("priceSlider");
  const priceLabel = document.getElementById("maxPriceLabel");
  if (priceSlider && priceLabel) {
    priceSlider.value = 30000;
    priceLabel.textContent = formatPrice(30000);
  }

  renderProducts();
  showToast("All filters reset", "✨");
}

// Interactive Saree Drape Guide Engine
function initDrapeStudio() {
  const container = document.getElementById("drapeStudioContainer");
  if (!container) return;

  renderDrapeStudio();
}

function renderDrapeStudio() {
  const tabsList = document.getElementById("drapeTabsList");
  const showcase = document.getElementById("drapeShowcaseArea");
  if (!tabsList || !showcase) return;

  // Render Tabs
  tabsList.innerHTML = DRAPE_GUIDES.map((drape) => {
    const isActive = drape.id === state.activeDrapeId;
    return `
      <button class="drape-tab-item ${isActive ? "active" : ""}" onclick="selectDrape('${drape.id}')">
        <div class="drape-tab-title">${drape.title}</div>
        <div class="drape-tab-appeal">${drape.appeal}</div>
      </button>
    `;
  }).join("");

  // Get active drape
  const activeDrape = DRAPE_GUIDES.find((d) => d.id === state.activeDrapeId) || DRAPE_GUIDES[0];

  showcase.innerHTML = `
    <div class="drape-details-card">
      <div class="drape-meta-pills">
        <span class="meta-pill">⏱ Time: ${activeDrape.timeRequired}</span>
        <span class="meta-pill">🎯 Level: ${activeDrape.difficulty}</span>
        <span class="meta-pill">✨ Ideal For: ${activeDrape.idealFor}</span>
      </div>

      <div>
        <h3 class="drape-name-heading">${activeDrape.title}</h3>
        <p class="drape-desc-text">${activeDrape.description}</p>
      </div>

      <div class="drape-steps-container">
        ${activeDrape.steps
      .map(
        (s) => `
          <div class="drape-step-item">
            <div class="step-number">${s.step}</div>
            <div class="step-text">${s.text}</div>
          </div>
        `
      )
      .join("")}
      </div>

      <div class="drape-stylist-tip-box">
        <span class="stylist-tip-icon">💡</span>
        <div class="stylist-tip-content">
          <strong>Master Stylist Tip:</strong> ${activeDrape.stylistTip}
        </div>
      </div>
    </div>
  `;
}

function selectDrape(drapeId) {
  state.activeDrapeId = drapeId;
  renderDrapeStudio();
}

// Quick View Modal Logic
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  state.activeQuickViewProduct = product;
  state.isTailoringSelectedInModal = false;
  renderQuickViewModal(product);

  const modal = document.getElementById("quickViewModal");
  if (modal) modal.classList.add("active");
}

function renderQuickViewModal(product) {
  const modalContent = document.getElementById("quickViewContent");
  if (!modalContent) return;

  const tailoringCost = 999;
  const currentTotal = state.isTailoringSelectedInModal
    ? product.priceINR + tailoringCost
    : product.priceINR;

  modalContent.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-gallery">
        <img src="${product.images[0]}" alt="${product.name}" class="quickview-gallery-img" id="quickViewMainImg" />
        <div style="display: flex; gap: 0.5rem;">
          ${product.images
      .map(
        (img, idx) => `
            <img src="${img}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px; cursor: pointer; border: 2px solid ${idx === 0 ? "var(--color-gold)" : "transparent"};" onclick="switchQuickViewImg(this, '${img}')" />
          `
      )
      .join("")}
        </div>
      </div>

      <div class="quickview-details">
        <div class="quickview-tag-row">
          <span class="badge ${product.generation === "classic" ? "badge-classic" : "badge-modern"}">
            ${product.generation === "classic" ? "Timeless Classic" : "Gen-Z Modern Cut"}
          </span>
          ${product.hasSilkMark ? '<span class="badge badge-silkmark">Silk Mark Certified</span>' : ""}
        </div>

        <h2 class="quickview-title">${product.name}</h2>
        <div class="quickview-craft-note">Authentic Craft: ${product.craft}</div>

        <div class="product-rating-row">
          <span class="stars">★ ★ ★ ★ ★</span>
          <span>(${product.rating} / 5.0 · ${product.reviewCount} customer reviews)</span>
        </div>

        <div class="product-price-row">
          <span class="product-price-current">${formatPrice(currentTotal)}</span>
          <span class="product-price-original">${formatPrice(product.originalPriceINR)}</span>
        </div>

        <p class="quickview-desc">${product.description}</p>

        <div style="background: #faf7f2; border: 1px solid var(--color-border); border-radius: 8px; padding: 0.85rem 1rem; font-size: 0.85rem;">
          <strong>Fabric & Weave Details:</strong>
          <ul style="margin-left: 1.25rem; margin-top: 0.35rem; color: var(--color-text-muted);">
            ${product.features.map((f) => `<li>${f}</li>`).join("")}
          </ul>
        </div>

        <!-- Custom Stitching / Blouse Tailoring Add-on -->
        <div class="tailoring-box">
          <div class="tailoring-header">
            <span class="tailoring-title">✂️ Add Custom Made-to-Measure Stitching</span>
            <span class="tailoring-price-tag">+${formatPrice(tailoringCost)}</span>
          </div>
          <label class="tailoring-toggle-label">
            <input type="checkbox" id="tailoringCheckbox" ${state.isTailoringSelectedInModal ? "checked" : ""} onchange="toggleTailoringOption(this)" />
            <span>Include custom tailored blouse/lining with personalized measurement call</span>
          </label>
        </div>

        <div style="display: flex; gap: 0.75rem; margin-top: 0.5rem;">
          <button class="btn btn-primary" style="flex-grow: 1;" onclick="addModalProductToCart('${product.id}')">
            🛍 Add to Shopping Bag
          </button>
          <button class="btn btn-outline" style="padding: 0.85rem 1.2rem;" onclick="openWhatsAppStylist('${product.id}')" title="Chat with Stylist">
            💬 Consult Stylist
          </button>
        </div>
      </div>
    </div>
  `;
}

function switchQuickViewImg(thumbEl, imgSrc) {
  const mainImg = document.getElementById("quickViewMainImg");
  if (mainImg) {
    mainImg.src = imgSrc;
  }
  const siblings = thumbEl.parentElement.children;
  for (let s of siblings) s.style.borderColor = "transparent";
  thumbEl.style.borderColor = "var(--color-gold)";
}

function toggleTailoringOption(checkbox) {
  state.isTailoringSelectedInModal = checkbox.checked;
  if (state.activeQuickViewProduct) {
    renderQuickViewModal(state.activeQuickViewProduct);
  }
}

function addModalProductToCart(productId) {
  addToCart(productId, state.isTailoringSelectedInModal);
  closeModal("quickViewModal");
}

// Cart Management & Slide-over Drawer
function quickAddToCart(productId) {
  addToCart(productId, false);
}

function addToCart(productId, customStitching = false) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(
    (item) => item.product.id === productId && item.customStitching === customStitching
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].qty += 1;
  } else {
    state.cart.push({
      product,
      qty: 1,
      customStitching
    });
  }

  saveCart();
  renderCart();
  updateCartBadge();
  openCartDrawer();
  showToast(`Added ${product.name} to shopping bag!`, "🛍");
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  saveCart();
  renderCart();
  updateCartBadge();
  showToast("Item removed from bag", "🗑");
}

function updateCartQty(index, change) {
  if (state.cart[index]) {
    state.cart[index].qty += change;
    if (state.cart[index].qty <= 0) {
      removeFromCart(index);
      return;
    }
    saveCart();
    renderCart();
    updateCartBadge();
  }
}

function saveCart() {
  localStorage.setItem("DARSHANA_cart", JSON.stringify(state.cart));
}

function updateCartBadge() {
  const totalCount = state.cart.reduce((acc, item) => acc + item.qty, 0);
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach((b) => (b.textContent = totalCount));
}

function renderCart() {
  const cartContainer = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotal");
  const discountEl = document.getElementById("cartDiscount");
  const shippingEl = document.getElementById("cartShipping");
  const totalEl = document.getElementById("cartTotal");
  const shippingProgress = document.getElementById("shippingProgressBar");
  const shippingText = document.getElementById("shippingProgressText");

  if (!cartContainer) return;

  if (state.cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="drawer-empty-state">
        <div class="drawer-empty-icon">🛍</div>
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--color-primary);">Your Bag is Empty</h4>
        <p style="font-size: 0.9rem;">Explore our royal collection of sarees, dupattas, and unstitched luxury suits.</p>
        <button class="btn btn-primary" onclick="closeCartDrawer(); window.location.href='#catalog';">Start Shopping</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    if (discountEl) discountEl.textContent = formatPrice(0);
    if (shippingEl) shippingEl.textContent = "Free";
    if (totalEl) totalEl.textContent = formatPrice(0);
    if (shippingProgress) shippingProgress.style.width = "0%";
    if (shippingText) shippingText.textContent = "Add items to unlock Free Express Courier delivery";
    return;
  }

  // Calculate subtotal
  let subtotal = 0;
  cartContainer.innerHTML = state.cart
    .map((item, idx) => {
      const stitchingAddon = item.customStitching ? 999 : 0;
      const unitPrice = item.product.priceINR + stitchingAddon;
      const itemTotal = unitPrice * item.qty;
      subtotal += itemTotal;

      return `
      <div class="drawer-item-row">
        <img src="${item.product.images[0]}" alt="${item.product.name}" class="drawer-item-img" />
        <div class="drawer-item-info">
          <h4 class="drawer-item-name">${item.product.name}</h4>
          <div class="drawer-item-opt">
            ${item.customStitching ? '<span style="color: var(--color-emerald); font-weight:700;">+ Custom Tailoring Included</span>' : "Unstitched / Standard Drape"}
          </div>
          <div class="drawer-item-bottom">
            <div class="qty-counter-wrap">
              <button class="qty-btn" onclick="updateCartQty(${idx}, -1)">-</button>
              <span class="qty-number">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
            </div>
            <div>
              <span class="drawer-item-price">${formatPrice(itemTotal)}</span>
              <button class="drawer-item-remove-btn" onclick="removeFromCart(${idx})">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  // Free shipping threshold (₹5000)
  const freeShippingThreshold = 5000;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  if (shippingProgress) shippingProgress.style.width = `${progressPercent}%`;

  if (shippingText) {
    if (subtotal >= freeShippingThreshold) {
      shippingText.innerHTML = "🎉 <strong>Congratulations!</strong> You qualify for <strong>FREE Express Insured Delivery</strong>";
    } else {
      const remaining = freeShippingThreshold - subtotal;
      shippingText.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> more to unlock <strong>FREE Express Delivery</strong>`;
    }
  }

  // Discount calculation
  let discountAmount = 0;
  if (state.appliedCoupon) {
    if (state.appliedCoupon.discountPercent) {
      discountAmount = Math.round(subtotal * (state.appliedCoupon.discountPercent / 100));
    } else if (state.appliedCoupon.fixedDiscount) {
      discountAmount = state.appliedCoupon.fixedDiscount;
    }
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (discountEl) discountEl.textContent = `-${formatPrice(discountAmount)}`;
  if (shippingEl) shippingEl.textContent = subtotal >= freeShippingThreshold ? "FREE" : formatPrice(250);
  if (totalEl) totalEl.textContent = formatPrice(finalTotal);
}



// Wishlist Management
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = PRODUCTS_DATA.find((p) => p.id === productId);

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed from Wishlist`, "🤍");
  } else {
    state.wishlist.push(productId);
    showToast(`Added to Wishlist!`, "💖");
  }

  saveWishlist();
  updateWishlistBadge();
  renderWishlist();
  renderProducts();
}

function saveWishlist() {
  localStorage.setItem("DARSHANA_wishlist", JSON.stringify(state.wishlist));
}

function updateWishlistBadge() {
  const badges = document.querySelectorAll(".wishlist-count-badge");
  badges.forEach((b) => (b.textContent = state.wishlist.length));
}

function renderWishlist() {
  const wishlistContainer = document.getElementById("wishlistItemsList");
  if (!wishlistContainer) return;

  if (state.wishlist.length === 0) {
    wishlistContainer.innerHTML = `
      <div class="drawer-empty-state">
        <div class="drawer-empty-icon">♥</div>
        <h4 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--color-primary);">Your Wishlist is Empty</h4>
        <p style="font-size: 0.9rem;">Save your favorite heirloom sarees and festive dupattas to view anytime.</p>
      </div>
    `;
    return;
  }

  const wishlistedProducts = PRODUCTS_DATA.filter((p) => state.wishlist.includes(p.id));

  wishlistContainer.innerHTML = wishlistedProducts
    .map(
      (product) => `
    <div class="drawer-item-row">
      <img src="${product.images[0]}" alt="${product.name}" class="drawer-item-img" />
      <div class="drawer-item-info">
        <h4 class="drawer-item-name">${product.name}</h4>
        <div class="drawer-item-price">${formatPrice(product.priceINR)}</div>
        <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
          <button class="btn btn-primary" style="padding: 0.4rem 0.85rem; font-size: 0.78rem;" onclick="quickAddToCart('${product.id}'); toggleWishlist('${product.id}');">
            Move to Bag
          </button>
          <button class="drawer-item-remove-btn" onclick="toggleWishlist('${product.id}')">
            Remove
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// WhatsApp Stylist Link Builder
function openWhatsAppStylist(productId) {
  let message = "Hello DARSHANA Stylist! I would like bridal/festive consultation.";
  if (productId) {
    const product = PRODUCTS_DATA.find((p) => p.id === productId);
    if (product) {
      message = `Hello DARSHANA Stylist! I am interested in ordering "${product.name}" (${formatPrice(product.priceINR)}). Could you help me with customization and drape advice?`;
    }
  }
  const encoded = encodeURIComponent(message);
  window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${encoded}`, "_blank");
}

// Drawer and Modal Open/Close Controls
function initDrawersAndModals() {
  // Cart Drawer
  const cartBtn = document.getElementById("cartToggleBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const cartCloseBtn = document.getElementById("cartCloseBtn");

  // Wishlist Drawer
  const wishlistBtn = document.getElementById("wishlistToggleBtn");
  const wishlistDrawer = document.getElementById("wishlistDrawer");
  const wishlistCloseBtn = document.getElementById("wishlistCloseBtn");

  // Overlay
  const overlay = document.getElementById("drawerOverlay");

  if (cartBtn && cartDrawer) {
    cartBtn.addEventListener("click", openCartDrawer);
  }
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener("click", closeCartDrawer);
  }

  if (wishlistBtn && wishlistDrawer) {
    wishlistBtn.addEventListener("click", openWishlistDrawer);
  }
  if (wishlistCloseBtn) {
    wishlistCloseBtn.addEventListener("click", closeWishlistDrawer);
  }

  if (overlay) {
    overlay.addEventListener("click", () => {
      closeCartDrawer();
      closeWishlistDrawer();
      closeModal("quickViewModal");
    });
  }

  // Quick View Close
  const qvClose = document.getElementById("quickViewCloseBtn");
  if (qvClose) {
    qvClose.addEventListener("click", () => closeModal("quickViewModal"));
  }
}

function openCartDrawer() {
  closeWishlistDrawer();
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("drawerOverlay");
  if (drawer) drawer.classList.add("active");
  if (overlay) overlay.classList.add("active");
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("drawerOverlay");
  if (drawer) drawer.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
}

function openWishlistDrawer() {
  closeCartDrawer();
  const drawer = document.getElementById("wishlistDrawer");
  const overlay = document.getElementById("drawerOverlay");
  if (drawer) drawer.classList.add("active");
  if (overlay) overlay.classList.add("active");
}

function closeWishlistDrawer() {
  const drawer = document.getElementById("wishlistDrawer");
  const overlay = document.getElementById("drawerOverlay");
  if (drawer) drawer.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

// Checkout Flow Simulation
function initiateCheckout() {
  if (state.cart.length === 0) {
    showToast("Your shopping bag is empty!", "🛍");
    return;
  }
  alert(
    `Order confirmed! Thank you for ordering from DARSHANA COUTURE.\n\nTotal: ${document.getElementById("cartTotal").textContent}\nOur master concierge will reach out to you for delivery confirmation and custom sizing.`
  );
  state.cart = [];
  state.appliedCoupon = null;
  saveCart();
  renderCart();
  updateCartBadge();
  closeCartDrawer();
}

// Toast Feedback Notification
function showToast(message, icon = "✨") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
