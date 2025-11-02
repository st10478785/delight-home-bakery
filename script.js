// This JavaScript code includes theme toggle, mobile menu, cart system, and all interactive elements

// I'm using DOMContentLoaded to ensure that all HTML is loaded before running JavaScript
document.addEventListener("DOMContentLoaded", function () {
  console.log("Delight Home Bakery website loaded successfully");

  // Initializing core functionality first
  initializeThemeToggle();
  initializeMobileMenu();
  initializeCartFunctionality();
  initializeNewsletterForm();

  // Initializing interactive elements for Part 3
  initializeAccordions();
  initializeLightbox();
  initializeSearchFunctionality();
  initializeFormValidation();
  initializeFilterTabs();

  // Initializing the interactive map if on contact page
  if (document.getElementById("interactive-map")) {
    initializeInteractiveMap();
  }

  // Checking which page we're on and initializing page specific features
  if (document.querySelector(".checkout-container")) {
    initializeCheckoutPage();
  }

  if (document.querySelector(".profile-section")) {
    initializeProfilePage();
  }

  if (document.getElementById("contact-form")) {
    initializeContactForm();
  }

  if (document.querySelector(".filter-tabs")) {
    initializeProductFilters();
  }
});

// Theme Toggle - Implementing dark mode functionality
function initializeThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  if (!themeToggle) return;

  // Checking if user has a saved theme preference
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeButtonText(themeToggle, currentTheme);

  // I added a click handler to toggle between light and dark modes
  themeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeButtonText(themeToggle, newTheme);
  });
}

// Add a theme button text based on current theme
function updateThemeButtonText(button, theme) {
  button.textContent = theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode";
}

// Mobile Menu - I'm implementing responsive navigation
function initializeMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mainNav = document.getElementById("main-nav");

  if (!mobileMenuToggle || !mainNav) return;

  // Toggling the mobile menu when hamburger is clicked
  mobileMenuToggle.addEventListener("click", function () {
    const isExpanded = mainNav.classList.toggle("active");
    this.classList.toggle("active");
    this.setAttribute("aria-expanded", isExpanded);
  });

  // Closing mobile menu when a link is clicked
  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Interactive Map - I'm implementing custom map functionality for the contact page
function initializeInteractiveMap() {
  // Bakery coordinates (Ruimsig, Johannesburg)
  const bakeryLat = -26.083099483606745;
  const bakeryLng = 27.876323180595374;

  // Creating the map centered on the bakery
  const map = L.map("interactive-map").setView([bakeryLat, bakeryLng], 15);

  // Adding OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/ ">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  // Creating custom bakery icon
  const bakeryIcon = L.divIcon({
    className: "custom-marker",
    html: '<div style="background-color: #e8a735; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; font-size: 18px;">🥖</div>',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

  // Adding marker for the bakery
  const bakeryMarker = L.marker([bakeryLat, bakeryLng], {
    icon: bakeryIcon,
  }).addTo(map);

  // Creating popup content
  const popupContent = `
    <div style="text-align: center; padding: 10px;">
      <h4 style="margin: 0 0 10px 0; color: #1c2d26;">Delight Home Bakery</h4>
      <p style="margin: 5px 0;">123 Baker Street<br>Ruimsig, Roodepoort<br>Johannesburg, 1724</p>
      <p style="margin: 5px 0;"><strong>Phone:</strong> +27 11 123 4567</p>
      <p style="margin: 5px 0;"><strong>Hours:</strong> Mon-Fri 6AM-6PM</p>
    </div>
  `;

  bakeryMarker.bindPopup(popupContent).openPopup();

  // Get Directions button functionality
  const getDirectionsBtn = document.getElementById("get-directions");
  if (getDirectionsBtn) {
    getDirectionsBtn.addEventListener("click", function () {
      // Opening Google Maps with directions
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${bakeryLat},${bakeryLng}`;
      window.open(mapsUrl, "_blank");
    });
  }

  // Locate Me button functionality
  const locateMeBtn = document.getElementById("locate-me");
  if (locateMeBtn) {
    locateMeBtn.addEventListener("click", function () {
      if (navigator.geolocation) {
        locateMeBtn.textContent = "Locating...";
        locateMeBtn.disabled = true;

        navigator.geolocation.getCurrentPosition(
          function (position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Creating user location marker
            const userIcon = L.divIcon({
              className: "user-marker",
              html: '<div style="background-color: #3498db; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
              iconSize: [20, 20],
              iconAnchor: [10, 10],
            });

            const userMarker = L.marker([userLat, userLng], {
              icon: userIcon,
            }).addTo(map);
            userMarker.bindPopup("You are here").openPopup();

            // Fitting the map to show both locations
            const bounds = L.latLngBounds([
              [bakeryLat, bakeryLng],
              [userLat, userLng],
            ]);
            map.fitBounds(bounds, { padding: [50, 50] });

            // Drawing a line between user and bakery
            const routeLine = L.polyline(
              [
                [userLat, userLng],
                [bakeryLat, bakeryLng],
              ],
              {
                color: "#e8a735",
                weight: 3,
                opacity: 0.7,
                dashArray: "10, 5",
              }
            ).addTo(map);

            // Calculating distance
            const distance = map.distance(
              [userLat, userLng],
              [bakeryLat, bakeryLng]
            );
            const distanceKm = (distance / 1000).toFixed(2);

            showNotification(
              `You are ${distanceKm} km from the bakery`,
              "info"
            );

            locateMeBtn.textContent = "My Location";
            locateMeBtn.disabled = false;
          },
          function (error) {
            showNotification("Unable to get your location", "error");
            locateMeBtn.textContent = "My Location";
            locateMeBtn.disabled = false;
          }
        );
      } else {
        showNotification(
          "Geolocation is not supported by your browser",
          "error"
        );
      }
    });
  }
}

// Cart Functionality - I'm implementing the shopping cart system
function initializeCartFunctionality() {
  const cartButtons = document.querySelectorAll(
    ".add-to-cart, .add-to-cart-small"
  );
  const cartCount = document.querySelector(".cart-count");

  // Loading cart items from localStorage or creating empty array
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  updateCartCount();
  updateCheckoutDisplay();

  // Adding click handlers to all "Add to Cart" buttons
  cartButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Finding the product information from the parent element
      const productItem = this.closest(".menu-item, .special-item");
      if (!productItem) return;

      const productName =
        productItem.querySelector("h3")?.textContent || "Unknown Product";
      const priceElement = productItem.querySelector(".price");
      let productPrice = "R0.00";

      // Extracting the price from the element
      if (priceElement) {
        const priceText = priceElement.textContent;
        // Handling cases where there might be multiple prices
        const prices = priceText.match(/R\d+\.\d{2}/g);
        productPrice = prices ? prices[0] : "R0.00";
      }

      // Getting the image for the product
      const productImage = productItem.querySelector("img")?.src || "";

      // Adding the product to cart
      addToCart({
        id: generateProductId(productName),
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1,
      });

      // I'm showing visual feedback that item was added
      showAddToCartFeedback(this);
    });
  });

  // Defining the function to add items to cart
  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Adding increments if item already exists
      existingItem.quantity += 1;
    } else {
      // I'm adding new item to cart
      cartItems.push(product);
    }

    // Saving cart to localStorage and updating display
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartCount();
    updateCheckoutDisplay();
    showNotification(`${product.name} added to cart!`, "success");
  }

  // Updating the cart count badge
  function updateCartCount() {
    if (cartCount) {
      const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      cartCount.textContent = totalItems;
      cartCount.style.display = totalItems > 0 ? "flex" : "none";
    }
  }

  // Updating the checkout page display
  function updateCheckoutDisplay() {
    const checkoutItems = document.getElementById("checkout-items");
    const checkoutEmpty = document.getElementById("checkout-empty");
    const checkoutTotal = document.getElementById("checkout-total");

    if (!checkoutItems) return;

    if (cartItems.length === 0) {
      // Showing empty state when cart is empty
      if (checkoutEmpty) checkoutEmpty.style.display = "block";
      checkoutItems.style.display = "none";
    } else {
      // Hiding empty state and showing cart items
      if (checkoutEmpty) checkoutEmpty.style.display = "none";
      checkoutItems.style.display = "table";

      // Building the cart items table
      let tableHTML =
        "<thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Total</th><th>Action</th></tr></thead><tbody>";
      let grandTotal = 0;

      cartItems.forEach((item, index) => {
        const itemPrice = parseFloat(item.price.replace("R", ""));
        const itemTotal = itemPrice * item.quantity;
        grandTotal += itemTotal;

        tableHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>${item.quantity}</td>
                        <td>R${itemTotal.toFixed(2)}</td>
                        <td><button class="remove-from-cart" data-index="${index}">Remove</button></td>
                    </tr>
                `;
      });

      tableHTML += "</tbody>";
      checkoutItems.innerHTML = tableHTML;

      // Used for updating the total
      if (checkoutTotal) {
        checkoutTotal.textContent = `R${grandTotal.toFixed(2)}`;
      }

      // Adding remove button functionality
      const removeButtons = checkoutItems.querySelectorAll(".remove-from-cart");
      removeButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const index = parseInt(this.getAttribute("data-index"));
          removeFromCart(index);
        });
      });
    }
  }

  // Defining function to remove items from cart
  function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartCount();
    updateCheckoutDisplay();
    showNotification("Item removed from cart", "info");
  }

  // Generating unique IDs for products
  function generateProductId(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, "-");
  }
}

// Showing visual feedback when item is added to cart
function showAddToCartFeedback(button) {
  const originalText = button.textContent;
  button.textContent = "Added!";
  button.disabled = true;
  button.style.backgroundColor = "#27AE60";

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    button.style.backgroundColor = "";
  }, 1500);
}

// Creating a notification system for user feedback
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.setAttribute("role", "alert");

  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${
          type === "success"
            ? "#27AE60"
            : type === "error"
            ? "#E74C3C"
            : "#3498db"
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;

  document.body.appendChild(notification);

  // I set a time for removing notification after 3 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(400px)";
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Newsletter Form - Handling newsletter subscriptions
function initializeNewsletterForm() {
  const newsletterForm = document.getElementById("newsletter-form");
  if (!newsletterForm) return;

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector(".newsletter-input");
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      submitNewsletterForm(this, email);
    } else {
      showNotification("Please enter a valid email address", "error");
    }
  });
}

// Submitting the newsletter form
function submitNewsletterForm(form, email) {
  const submitButton = form.querySelector(".newsletter-button");
  const originalText = submitButton.textContent;

  submitButton.textContent = "Subscribing...";
  submitButton.disabled = true;

  // Simulating form submission
  setTimeout(() => {
    submitButton.textContent = "Subscribed!";
    showNotification("Thank you for subscribing!", "success");

    // Saving email to localStorage
    const subscribers =
      JSON.parse(localStorage.getItem("newsletterSubscribers")) || [];
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      localStorage.setItem(
        "newsletterSubscribers",
        JSON.stringify(subscribers)
      );
    }

    setTimeout(() => {
      form.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 2000);
  }, 1500);
}

// Accordion Functionality - Implementing FAQ sections
function initializeAccordions() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const accordionItem = this.parentElement;
      const accordionContent = this.nextElementSibling;

      // Closing all other accordions
      document.querySelectorAll(".accordion-item").forEach((item) => {
        if (item !== accordionItem) {
          item.classList.remove("active");
          const content = item.querySelector(".accordion-content");
          if (content) content.classList.remove("active");
        }
      });

      // Toggling current accordion
      accordionItem.classList.toggle("active");
      accordionContent.classList.toggle("active");

      // Updating aria expanded for accessibility
      const isExpanded = accordionItem.classList.contains("active");
      this.setAttribute("aria-expanded", isExpanded);
    });
  });
}

// Lightbox - I implemented image gallery viewing
function initializeLightbox() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");

  if (!lightbox) return;

  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.querySelector(".lightbox-caption");
  const lightboxClose = document.querySelector(".lightbox-close");

  // Opens lightbox when gallery image is clicked
  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const img = this.querySelector("img");
      if (lightboxImg && img) {
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.textContent = img.alt;
        }
        lightbox.style.display = "block";
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Closes lightbox when close button is clicked
  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  // Closing lightbox when clicking outside image
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Defining close lightbox function
  function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Search Functionality - Implementing product search
function initializeSearchFunctionality() {
  const searchInput = document.getElementById("product-search");
  const searchResults = document.getElementById("search-results");

  if (!searchInput || !searchResults) return;

  let searchTimeout;

  // Searching as user types
  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const searchTerm = this.value.trim().toLowerCase();

      if (searchTerm.length === 0) {
        searchResults.style.display = "none";
        return;
      }

      performSearch(searchTerm);
    }, 300);
  });

  // Closing search results when clicking outside
  document.addEventListener("click", function (e) {
    if (!searchResults.contains(e.target) && e.target !== searchInput) {
      searchResults.style.display = "none";
    }
  });

  // Performing the search
  function performSearch(searchTerm) {
    const productItems = document.querySelectorAll(".menu-item, .special-item");
    let resultsFound = false;

    searchResults.innerHTML = "";
    searchResults.style.display = "none";

    productItems.forEach((item) => {
      const productName =
        item.querySelector("h3")?.textContent.toLowerCase() || "";
      const productDescription =
        item.querySelector("p")?.textContent.toLowerCase() || "";

      if (
        productName.includes(searchTerm) ||
        productDescription.includes(searchTerm)
      ) {
        if (!resultsFound) {
          searchResults.style.display = "block";
          resultsFound = true;
        }

        const resultItem = createSearchResultItem(item, searchTerm);
        searchResults.appendChild(resultItem);
      }
    });

    if (!resultsFound) {
      searchResults.style.display = "block";
      searchResults.innerHTML =
        '<div class="no-results">No products found matching your search.</div>';
    }
  }

  // Creating individual search result items
  function createSearchResultItem(item, searchTerm) {
    const resultItem = document.createElement("div");
    resultItem.className = "search-result-item";

    const productName = item.querySelector("h3").textContent;
    const productDescription = item.querySelector("p").textContent;
    const productPrice = item.querySelector(".price").textContent;

    resultItem.innerHTML = `
            <h4>${highlightSearchTerm(productName, searchTerm)}</h4>
            <p>${highlightSearchTerm(productDescription, searchTerm)}</p>
            <span class="price">${productPrice}</span>
        `;

    // Scrolling to product when result is clicked
    resultItem.addEventListener("click", () => {
      item.scrollIntoView({ behavior: "smooth", block: "center" });
      searchResults.style.display = "none";
      document.getElementById("product-search").value = "";

      // Highlighting the product briefly
      item.style.boxShadow = "0 0 0 3px #E8A735";
      setTimeout(() => {
        item.style.boxShadow = "";
      }, 2000);
    });

    return resultItem;
  }

  // Highlighting search terms in results
  function highlightSearchTerm(text, term) {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }
}

// Form Validation - user validation
function initializeFormValidation() {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    const inputs = form.querySelectorAll(
      "input[required], textarea[required], select[required]"
    );

    // Validating fields on blur
    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this);
      });

      input.addEventListener("input", function () {
        clearFieldError(this);
      });
    });

    // Validating entire form on submit
    form.addEventListener("submit", function (e) {
      let isValid = true;

      inputs.forEach((input) => {
        if (!validateField(input)) {
          isValid = false;
        }
      });

      if (!isValid) {
        e.preventDefault();
        showNotification("Please fix the errors in the form", "error");
      }
    });
  });
}

// Validating individual fields
function validateField(field) {
  const value = field.value.trim();
  let isValid = true;

  clearFieldError(field);

  // Checking required fields
  if (field.hasAttribute("required") && !value) {
    showFieldError(field, "This field is required");
    isValid = false;
  }

  // Validating email format
  if (field.type === "email" && value && !validateEmail(value)) {
    showFieldError(field, "Please enter a valid email address");
    isValid = false;
  }

  // Validating phone numbers
  if (field.type === "tel" && value && !validatePhone(value)) {
    showFieldError(field, "Please enter a valid phone number");
    isValid = false;
  }

  // Checking minimum length
  if (
    field.hasAttribute("minlength") &&
    value.length < parseInt(field.getAttribute("minlength"))
  ) {
    showFieldError(
      field,
      `Must be at least ${field.getAttribute("minlength")} characters`
    );
    isValid = false;
  }

  return isValid;
}

// Showing field errors
function showFieldError(field, message) {
  field.classList.add("error-state");
  field.style.borderColor = "#E74C3C";

  let errorElement = document.getElementById(field.id + "-error");
  if (!errorElement) {
    errorElement = document.createElement("span");
    errorElement.className = "error-message";
    errorElement.id = field.id + "-error";
    errorElement.style.color = "#E74C3C";
    errorElement.style.fontSize = "0.9rem";
    errorElement.style.display = "block";
    errorElement.style.marginTop = "0.3rem";
    field.parentNode.appendChild(errorElement);
  }

  errorElement.textContent = message;
  errorElement.style.display = "block";
}

// Clearing field errors
function clearFieldError(field) {
  field.classList.remove("error-state");
  field.style.borderColor = "";

  const errorElement = document.getElementById(field.id + "-error");
  if (errorElement) {
    errorElement.style.display = "none";
  }
}

// Validating email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validating phone format
function validatePhone(phone) {
  const phoneRegex = /^[+]?[\d\s\-()]{10,15}$/;
  return phoneRegex.test(phone);
}

// Filter Tabs - I implemented product filtering
function initializeFilterTabs() {
  const filterTabs = document.querySelectorAll(".filter-tab");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      // Updating active tab
      filterTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // Filtering products
      filterProductsByCategory(category);
    });
  });
}

// Filtering products by category
function filterProductsByCategory(category) {
  const categorySections = document.querySelectorAll(".category-section");

  categorySections.forEach((section) => {
    if (
      category === "all" ||
      section.getAttribute("data-category") === category
    ) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

// Product Filters - Alternative implementation
function initializeProductFilters() {
  initializeFilterTabs();
}

// Checkout Page - Handling checkout functionality
function initializeCheckoutPage() {
  const checkoutForm = document.getElementById("checkout-form");

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (e) {
      e.preventDefault();
      processCheckout();
    });
  }
}

// Processing the checkout
function processCheckout() {
  const submitButton = document.querySelector(".checkout-button");
  const originalText = submitButton.textContent;

  submitButton.textContent = "Processing...";
  submitButton.disabled = true;

  // Simulating order processing
  setTimeout(() => {
    showNotification("Order placed successfully!", "success");
    localStorage.removeItem("cartItems");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }, 2000);
}

// Profile Page - Handling profile functionality
function initializeProfilePage() {
  const profileForms = document.querySelectorAll(
    ".profile-form, .preferences-form"
  );

  profileForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      showNotification("Profile updated successfully!", "success");
    });
  });
}

// Contact Form - Handling of contact form submission
function initializeContactForm() {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;

      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Collecting form data
      const formData = {
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        phone: document.getElementById("contact-phone").value,
        subject: document.getElementById("contact-subject").value,
        message: document.getElementById("contact-message").value,
      };

      // Simulating email sending
      setTimeout(() => {
        // Creating email body
        const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
        `;

        // Opening default email client with pre-filled information
        const mailtoLink = `mailto:info@delighthomebakery.co.za?subject=${encodeURIComponent(
          "Contact Form: " + formData.subject
        )}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        showNotification("Opening your email client...", "success");
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 1000);
    });
  }
}

// Logging that JavaScript loaded successfully
console.log("Delight Home Bakery JavaScript loaded and initialized");
