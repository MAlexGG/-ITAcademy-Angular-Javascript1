// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    /* for (let i = 0; i < products.length; i++){
        if (id === products[i].id) {
            cartList.push(products[i]);
        }
    }
    return cartList; */
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    for (let i = 0; i < cartList.length; i++){
        switch (cartList[i].type) {
            case 'grocery': subtotal['grocery'].value += cartList[i].price;
                break;
            case 'beauty': subtotal['beauty'].value += cartList[i].price;
                break;
            case 'clothes': subtotal['clothes'].value += cartList[i].price;
        }
    }
    return subtotal;
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
   for (let i = 0; i < cartList.length; i++){
        total += cartList[i].price
    }
    return total;
}

// Exercise 5
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart,
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    //cartList = cartList.map(item => ({ ...item, quantity: 1, subtotalWithDiscount: null }));
    /* cart = cartList.reduce((acc, value) => {
        const itemDuplicated = acc.find(item => item.id === value.id);
        if (itemDuplicated) {
            return acc.map((item) => {
                if (item.id === value.id) {
                    return {
                        ...item,
                        quantity: item.quantity + value.quantity
                    }
                }
                return item;
            });
        }
        return [...acc, value];
    }, []); 
    return cart = cart.map(item => ({ ...item, subtotal: item.quantity * item.price }));*/
}

// Exercise 6
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    
   for (let i = 0; i < cart.length; i++){
       if (cart[i].name === 'cooking oil' && cart[i].quantity > 2) {
           cart[i].subtotalWithDiscount = (cart[i].price - 0.5) * cart[i].quantity; 
       }

       if (cart[i].name === 'Instant cupcake mixture' && cart[i].quantity > 9) {
           cart[i].subtotalWithDiscount = (((cart[i].price * 2) / 3) * cart[i].quantity);
       }
    }
    
    return cart = cart.map(item => ({ ...item, subtotal: item.quantity * item.price }));;
}

function myCart() {
    applyPromotionsCart();
    return cart;
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    //cart = products.map((item) => item.id === id ? { ...item, quantity: 1, subtotalWithDiscount: null } : item )
    //return cart;
   
    for (let i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            cart.push({...products[i], quantity: 1, subtotalWithDiscount: null});
        }
    }    

    cart = cart.reduce((acc, value) => {
        const itemDuplicated = acc.find(item => item.id === value.id);
        if (itemDuplicated) {
            return acc.map((item) => {
                if (item.id === value.id) {
                    return {
                        ...item,
                        quantity: item.quantity + value.quantity
                    }
                }
                return item;
            });
        }
        return [...acc, value];
    }, []);
    
    return cart;
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 0; i < cart.length; i++) {
        if (id === cart[i].id && cart[i].quantity > 1 ) {
            cart[i].quantity--;
        } else if (id === cart[i].id && cart[i].quantity === 1){
            let itemRemoved = cart.indexOf(cart[i]);
            cart.splice(itemRemoved, 1);
        }
    }
    return cart;
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
