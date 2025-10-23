document.getElementById("seller-link").addEventListener("click", (e) => {
    e.preventDefault(); //prevents the default browser behavior of that click
    //for example, if your seller-link is an <a href="#">, normally it would reload or jump the page.→ this line stops that from happening so you can handle it with your own logic instead.
  if (localStorage.getItem("sellerLoggedIn")) {  
    window.location.href = "/seller";
  } else{
      const password = prompt("Enter seller password:");
      if (password === "letmein123") { 
        localStorage.setItem("sellerLoggedIn", "true");
        window.location.href = "/seller";
        renderShop()
      } else {
        alert("you can't get in sorry 😢");
      }
  }
    //prompt() opens a small pop-up box asking the user to type something. whatever the user types is stored inside the variable password. const means the value won’t change later.

});

const promo = document.querySelector(".home-promo p");
//finds the first <p> element inside something with the class home-promo.
const promos = [
  "Special Promo: Buy Confidence get Arrogance!",
  "Limited Time: Lazy + Procrastination Combo Pack!",
  "Hot Deal: Buy Curiosity, get Anxiety free!"
];
let promoIndex = 0;
/*
this sets up a counter that keeps track of which promo is currently being shown.
let is used here because the value will change later.
starts at 0, meaning the first promo in the list
 */

setInterval(() => { //“Run this code repeatedly every X milliseconds.” here, it’s 5000 → so every 5 seconds.
    promoIndex = (promoIndex + 1) % promos.length;
    /*
    adds 1 to promoIndex each time (so it moves to the next promo). 
    % promos.length is the modulo operator, which loops it back to 0 when it reaches the end of the array.
    when promoIndex = 0 → next = 1  when promoIndex = 1 → next = 2  when promoIndex = 2 → next = 0  (because 3 % 3 = 0)
 */
    promo.textContent = promos[promoIndex]; //updates the actual text inside the <p> tag you found earlier. each 5 seconds, it replaces the paragraph’s text with the next promo string.
}, 5000);

let products = JSON.parse(localStorage.getItem("products")) ||  {
  /*localStorage.getItem("products") → looks inside the browser’s local storage for a key named "products".
  If it exists, it returns that data as a string.
  JSON.parse(...) turns that JSON string back into a normal JavaScript object.
  || { ... } → means “if there’s nothing saved (null or invalid), then use this default object instead.”
  Each product (e.g. "Confidence", "Curiosity", etc.) is a property of the products object. */
  "Confidence": { 
    title: "Confidence",
    img: "./assets/confident.jpeg",
    desc: "With confidence, you can achieve just about anything, from giving a speech to taking people's hearts! Fact check everything before blurting out something. Product lasts if bought repeatedly. ",
    price: "Price: 100 mental energy",
    sold: "Sold: 10000 times bought",
    available: true,
    reviews: [
      "⭐️⭐️⭐️⭐️☆ Love this! Even though my opinion is wrong, others believed I was right!",
      "⭐️⭐️⭐️⭐️⭐️ Highly recommended for shy people to get through the day"
    ]
  },
  "Curiosity": {
    title: "Curiosity",
    img: "./assets/curious.jpeg",
    desc: "Ever wondered what happens if you open Pandora's box? Well, now you can! Warning: may cause uncontrollable Googling at 3am, burnout, dizziness, and feeling like you are never enough. Please watch out for the time.",
    price: "Price: 80 mental energy",
    sold: "Sold: 89 times bought",
    available: true,
    reviews: ["⭐️☆☆☆☆ makes me tired",
    "⭐️⭐️⭐️⭐️⭐️ HAHAHAHA I FEEL LIKE GOING INSANE OF QUESTIONS"
    ]
  },

  "Wisdom": {
    title: "Wisdom",
    img: "./assets/wise.jpeg",
    desc: "Instantly become the know-it-all everyone secretly resents but publicly admires. Make people respect you. Side effects include such as big expectations from people might occur. Don't lose yourself.",
    price: "Price: 500 mental energy",
    sold: "Sold: 2500 times bought",
    available: true,
    reviews: ["⭐️⭐️⭐️☆☆ People keep asking me for help but hey at least I got attention",
      "⭐️⭐️⭐️⭐️⭐️ My parents are now proud of me!"
    ]
  },

  "Generosity": {
    title: "Generosity",
    img: "./assets/generous.jpeg",
    desc: "Help others by giving them some of your assets. Make people like and respect you, but risk getting taken advantage of. Please watch out for your financial well-being before it crashes down.",
    price: "Price: 40 mental energy",
    sold: "Sold: 8000 times bought",
    available: true,
    reviews: ["⭐️⭐️⭐️⭐️⭐️ I can make tons of friends with these",
      "⭐️⭐️⭐️⭐️⭐️ Now I can guilt trip people into wanting something in return!"
    ]
  },

  "Honesty": {
    title: "Honesty",
    img: "./assets/honesty.jpeg",
    desc: "Be brutally real with yourself and others! May cause awkward silences and people avoiding you, but at least they know you're not lying. Warning: product cannot be returned once the truth is out.",
    price: "Price: 60 mental energy",
    sold: "Sold: 3100 times bought",
    available: true,
    reviews: [
      "⭐️⭐️⭐️☆☆☆ Lost three friends but at least I kept my dignity.",
      "⭐️⭐️⭐️⭐️⭐️ People actually trust me now, feels weird but good."
    ]
  },

  "Laughter": {
    title: "Laughter",
    img: "./assets/laughter.jpeg",
    desc: "Turn the most boring room into chaos with contagious giggles. Great for lifting moods, terrible for serious situations like funerals or exams. Use wisely—or recklessly, your choice. Just read the room, okay?",
    price: "Price: 90 mental energy",
    sold: "Sold: 7000 times bought",
    available: true,
    reviews: [
      "⭐️⭐️⭐️⭐️⭐️ Accidentally laughed during my professor's rant—class loved me!",
      "⭐️⭐️⭐️⭐️☆ Pretty fun, but my boss doesn't agree."
    ]
  },

  "Kindness": {
    title: "Kindness",
    img: "./assets/kindness.jpeg",
    desc: "Be so sweet that people either adore you or walk all over you. Comes with free warm hugs but limited self-protection. May cause chronic 'I can't say no' syndrome. Warning: may cause you to become a doormat.",
    price: "Price: 75 mental energy",
    sold: "Sold: 9500 times bought",
    available: true,
    reviews: [
      "⭐️⭐️⭐️⭐️⭐️ My friends love me now. Also, I haven't had a day off in weeks.",
      "⭐️⭐️⭐️☆☆☆ I gave my lunch away three times in one day. Help."
    ]
  },

  "Loyalty": {
    title: "Loyalty",
    img: "./assets/loyalty.jpeg",
    desc: "Stick to your friends like glue—even when they don't deserve it. Makes you reliable, dependable, and maybe just a little bit blind. Risk: becoming the group's emotional support dog. May make you disappointed sometimes.",
    price: "Price: 120 mental energy",
    sold: "Sold: 5600 times bought",
    available: true,
    reviews: [
      "⭐️⭐️⭐️⭐️⭐️ My best friend betrayed me, but I'm still here. 10/10.",
      "⭐️⭐️⭐️☆☆☆ Great, but I feel like I'm just a free therapist now."
    ]
  },

  "Magic": {
    title: "Magic",
    img: "./assets/magic.jpeg",
    desc: "Can't exist in the real world. Don't think magic can sudddenly solve all of your problems. Face reality and grow up like a reasonable adult would. You have to put in effort when you actually want something.",
    price: "Price: ∞ mental energy",
    sold: "Sold: 0 times bought",
    available: false,
    reviews: ["No reviews are available for this product.",]
  },

  "Optimism": {
    title: "Optimism",
    img: "./assets/optimism.jpeg",
    desc: "See sunshine in every storm! May cause people to think you're delusional, but hey, you're smiling while they stress. That's what life is all about, right?!",
    price: "Price: 85 mental energy",
    sold: "Sold: 4300 times bought",
    available: true,
    reviews: [
      "⭐️⭐️⭐️⭐️⭐️ Got dumped and still said 'at least I'm free now!'",
      "⭐️⭐️⭐️☆☆☆ My friends say I'm annoying, but I think they'll come around!"
    ]
  },

  "Playfulness": {
    title: "Playfulness",
    img: "./assets/playfulness.jpeg",
    desc: "Inject chaos into every moment. From harmless pranks to spontaneous dance battles, you'll never be bored again. Side effect: people may call you 'immature,' but secretly they wish they were you.",
    price: "Price: 50 mental energy",
    sold: "Sold: 8800 times bought",
    available: true,
    reviews: [
      "⭐️⭐️⭐️⭐️⭐️ Put googly eyes on everything in the office. Best day ever.",
      "⭐️⭐️⭐️☆☆☆ Fun, but now no one takes me seriously."
    ]
  },

  "Determination": {
    title: "Determination",
    img: "./assets/determination.jpeg",
    desc: "Push through every obstacle like a stubborn bull. Amazing for reaching goals, but may cause tunnel vision and stress. Once activated, product cannot be stopped until finished (or crashed). Please use moderately.",
    price: "Price: 200 mental energy",
    sold: "Sold: 6200 times bought",
    available: true,
    reviews: [
      "⭐️⭐️⭐️⭐️⭐️ Pulled three all-nighters straight, finished my thesis!",
      "⭐️⭐️⭐️☆☆☆ I forgot to eat for two days but hey, I didn't give up."
    ]
  }
  // add more personalities here
};
if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
}

let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
const cartCountElem = document.getElementById('cart-count');
if(cartCountElem) cartCountElem.textContent = cartCount;
//changes what’s shown inside the element. so if count = 5, your HTML will now display 5
//.textContent = .getElement

function addToCart(productName) {
    const product = products[productName];
    if (!product) return;

    if (!product.available) {
        alert(`${productName} is not available in the real world! <3`);
        return;
    }
    /*takes a productName (like "Confidence").
    checks if it exists in your product list.
    if not available → alert and stop.*/

    // Get cart (as object with quantities)
    let cart = JSON.parse(localStorage.getItem("cart")) || {};

    if (cart[productName]) {
        cart[productName] += 1; // increase qty
    } else {
        cart[productName] = 1; // first time
      }
      //otherwise, get the saved cart (or make a new one {}). increase the quantity if already there, or add it if it’s new.

    localStorage.setItem("cart", JSON.stringify(cart));
    //save the updated cart back to localStorage.
    updateCartCount();
    //update the cart count on the page.
    alert(`${productName} added to your cart!`);
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    //gets cart from localStorage → either a saved cart object or {} (empty).
    let count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    /*takes all the quantities (e.g., [2, 1, 3] if you bought 2 “Confidence”, 1 “Wisdom”, 3 “Kindness”).
    .reduce((sum, qty) => sum + qty, 0) adds them together to get the total number of items.*/
    const cartCountElem = document.getElementById("cart-count");
    if (cartCountElem) cartCountElem.textContent = count;
}

function clearCart() {
    localStorage.removeItem("cart");
    //deletes the "cart" data completely from localStorage.
    renderCheckout();
    //then re-renders your checkout page (so it shows “empty cart”).
    updateCartCount();
    //then updates the count in the icon to 0.
}

function updateQuantity(productName, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (cart[productName]) {
      //if it exists → add or subtract the change amount.
        cart[productName] += change;
        if (cart[productName] <= 0) {
            delete cart[productName]; // remove if hits 0
        }
    } else if (change > 0) { 
        cart[productName] = change; // add if not there yet
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCheckout(); //then re-render checkout and update the counter.
    updateCartCount();
}

const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
////gets the part of the URL after the “?”

if (productName && products[productName]) {
  //the URL has a name, the products object actually has that key.
  const product = products[productName];
  //stores that specific product’s data in product.

    // Update product details
  const titleElem = document.getElementById('product-title');
  const imgElem = document.getElementById('product-img');
  const descElem = document.getElementById('product-desc');
  const priceElem = document.getElementById('product-price');
  const soldElem = document.getElementById('product-sold');
  const reviewsContainer = document.getElementById('product-reviews-list');
  const addButton = document.getElementById('add-to-heart');

  if(titleElem) titleElem.textContent = product.title;
  if(imgElem) imgElem.src = product.img;
  if(imgElem) imgElem.alt = productName;
  if(descElem) descElem.textContent = product.desc;
  if(soldElem) soldElem.textContent = product.sold;
  if(priceElem) priceElem.textContent = product.price;
  //.src sets the image file path, .alt sets the alt text (for accessibility).


  if(reviewsContainer) {
    reviewsContainer.innerHTML = "";
    //clears previous reviews (so it doesn’t duplicate).
    product.reviews.forEach(r => { //loops through product.reviews (an array)
      const p = document.createElement('p'); //creates a <p> element for each review →
      p.textContent = r; // sets its text → 
      reviewsContainer.appendChild(p);//adds it to the container.
    });
  }

  if(addButton && product.available) {
    addButton.onclick = () => addToCart(productName);
  } else{
      addButton.onclick = () => alert(`${productName} is not available in the real world! <3`);
    }
} 

function addToWishlist(productName) {
  const product = products[productName];
  //grabs the product info from the big products object.
  if (!product) return;

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  //fetches the wishlist (array of names) from localStorage. if it doesn’t exist yet → make a new empty array [].

  if (!wishlist.includes(productName)) { //.includes() checks if that name is already in the array.→ 
    wishlist.push(productName); //if not, push it and save it back.
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(`${productName} added to your wishlist!`);
  } else {
      alert(`${productName} is already in your wishlist!`);
    }

  updateWishlistCount();
}

function updateWishlistCount() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const wishlistCountElem = document.getElementById("wishlist-count");
  if (wishlistCountElem) wishlistCountElem.textContent = wishlist.length;
  //counts .length, and updates the HTML text (like x items in wishlist).
}

function removeFromWishlist(productName) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter(name => name !== productName);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    renderWishlist();
}

//“Run everything inside these curly braces after the whole HTML page is ready.”
document.addEventListener("DOMContentLoaded", () => {
  renderShop();
    //search
  const searchInput = document.querySelector(".search input");
  const searchButton = document.querySelector(".search button");
    //finds the search bar and search button in your HTML.

  if (searchInput) {
      //If there’s no search input on the current page, everything inside the { ... } is skipped (so no errors).
    const doSearch = () => {
        /*Declares an arrow function named doSearch which holds the search behavior so we can call it from multiple places (Enter key or button click). */
      const query = searchInput.value.trim();
        /*searchInput.value reads the current text typed by the user in the input field.
        .trim() removes leading and trailing whitespace (so " hello " becomes "hello").
        The cleaned string is stored in the constant query. */
      if (query) { //In JS, an empty string "" is falsy, so the block runs only if user typed something other than spaces
        window.location.href = `shop?search=${encodeURIComponent(query)}`;
          /*This redirects the browser to a new URL by changing window.location.href.
          The new URL is built with a template literal: `shop?search=${...}`.
          encodeURIComponent(query) converts the query into a URL-safe string (spaces → %20, &/?/special chars` → encoded). */
      }
    };

    searchInput.addEventListener("keypress", (e) => {
        //Adds an event listener to the input field that listens for the "keypress" event (when the user presses a character key).
      if (e.key === "Enter") doSearch();
    });

    if (searchButton) searchButton.addEventListener("click", doSearch);
  }

    updateCartCount();
    renderCheckout();

    const clearBtn = document.getElementById("clearCart");
    if (clearBtn) clearBtn.addEventListener("click", clearCart);

    const checkoutBtn = document.getElementById("checkout");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => {
        alert("Your energy is drained!");
        clearCart();
        });
    }

    updateWishlistCount();
    renderWishlist();
});

function renderShop() {
    const container = document.querySelector(".product-grid");
    if (!container) return;

    container.innerHTML = ""; // clear current cards

    const isSeller = localStorage.getItem("sellerLoggedIn") === "true";

    for (let name in products) {
        const item = products[name];
        const card = document.createElement("div");
        card.classList.add("product-card");

        let buttonsHTML = "";

        if (isSeller) {
            // Seller buttons
            buttonsHTML = `
                <button onclick="editProduct('${name}')">✏️ Edit</button>
                <button onclick="removeProduct('${name}')">🗑️ Remove</button>
            `;
        } else {
            // Buyer buttons
            buttonsHTML = `
                <button class="add-heart" onclick="addToCart('${name}')">Add to Heart</button>
                <button class="add-wishlist" onclick="addToWishlist('${name}')">💖 Add to Wishlist</button>
            `;
        }

        card.innerHTML = `
            <a href="/product?name=${encodeURIComponent(name)}">
                <img src="${item.img}" alt="${name}">
                <h2>${item.title}</h2>
                <p>${item.desc.substring(0, 60)}...</p>
            </a>
            ${buttonsHTML}
        `;

        container.appendChild(card);
    }
}

function renderCheckout() {
    const cartDiv = document.getElementById("cart-items");
    const totalDiv = document.getElementById("cart-total");

    if (!cartDiv || !totalDiv) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (Object.keys(cart).length === 0) {
        cartDiv.textContent = "Oops! Your cart is empty. Please add items to your cart. Don't wanna be an empty shell now do we?";
        cartDiv.classList.add("empty-message");
        totalDiv.textContent = "Total: 0 mental energy";
        return;
    }

    let total = 0;
    cartDiv.innerHTML = "";

    for (let name in cart) {
        if (products[name]) {
            let item = products[name];
            let numericPrice = parseInt(item.price.replace(/\D/g, ""));
            let qty = cart[name];
            let itemTotal = numericPrice * qty;
            total += itemTotal;

            let div = document.createElement("div");
            div.classList.add("cart-item");
            div.innerHTML = `
                <img src="${item.img}" width="80">
                <strong>${name}</strong>
                <div class="quantity-box">
                    <button class="qty-btn" onclick="updateQuantity('${name}', -1)">-</button>
                    <span class="qty-number">${qty}x</span>
                    <button class="qty-btn" onclick="updateQuantity('${name}', 1)">+</button>
                </div>
                <span class="item-total">@ ${numericPrice} = ${itemTotal} mental energy</span>
                <hr>
            `;

            cartDiv.appendChild(div);

        }
    }

    totalDiv.innerHTML = `<strong>Total:</strong> ${total} mental energy`;
}

function renderWishlist() {
    const container = document.getElementById("wishlist-items");
    if (!container) return;

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    container.innerHTML = "";

    if (wishlist.length === 0) {
        container.innerHTML = '<p class="empty-message">Your wishlist is empty!</p>';
        return;
    }

    wishlist.forEach(name => {
        const item = products[name];
        if (!item) return;

        const div = document.createElement("div");
        div.classList.add("wishlist-item");
        div.innerHTML = `
            <img src="${item.img}" alt="${name}">
            <div>
                <strong>${name}</strong>
                <p>${item.desc.substring(0, 40)}...</p>
            </div>
            <button class="add-cart" onclick="addToCart('${name}')">Add to Cart</button>
            <button class="remove-btn" onclick="removeFromWishlist('${name}')">Remove</button>
        `;
        container.appendChild(div);
    });

    // Optional: update total if you want
    const totalEl = document.getElementById("wishlist-total");
    const total = wishlist.reduce((sum, name) => {
        const numericPrice = parseInt((products[name]?.price || "0").replace(/\D/g, ""));
        return sum + numericPrice;
    }, 0);
    if(totalEl) totalEl.textContent = `Total: ${total} mental energy`;
}

const form = document.getElementById("add-product-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("product-name").value.trim();
    const imgInput = document.getElementById("product-img");
    const desc = document.getElementById("product-desc").value.trim();
    const price = document.getElementById("product-price").value.trim();

    if (!name || !imgInput.files[0] || !desc || !price) {
        alert("Please fill all fields!");
        return;
    }

    const reader = new FileReader(); 
    reader.onload = function() {
        const imgData = reader.result; // base64 image

        let currentProducts = JSON.parse(localStorage.getItem("products")) || {};
        currentProducts[name] = {
            title: name,
            img: imgData,
            desc,
            price,
            available: true,
            sold: "0 times bought",
            reviews: []
        };

        localStorage.setItem("products", JSON.stringify(currentProducts));

        products = currentProducts; // update in-memory object
        renderShop(); // re-render the shop so buttons + new product appear

        form.reset();
    };

    reader.readAsDataURL(imgInput.files[0]); // ← start reading the uploaded image
});


function logoutSeller() {
  localStorage.removeItem("sellerLoggedIn");
  alert("Logged out from seller mode!");
  window.location.href = "/shop";
}

function editProduct(name) {
  const newPrice = prompt(`Enter new price for ${name}:`, products[name].price);
  if (newPrice !== null) {
    products[name].price = newPrice;
    localStorage.setItem("products", JSON.stringify(products));
    alert(`${name} updated!`);
    location.reload();
  }
}

function removeProduct(name) {
  if (confirm(`Remove ${name} from the store?`)) {
    delete products[name];
    localStorage.setItem("products", JSON.stringify(products));
    alert(`${name} removed.`);
    location.reload();
  }
}
