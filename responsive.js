
// let obj = [{  
//       id : 1 ,
//       img :'./pizza-png-15.png',
//      Name  :'Italic Pizza',
//      Price : 250,
// },
// {  
//        id : 2,
//       img :'./desktop-wallpaper-pizza-barbecue-pesto-piri-piri-chicken-meat-transparent-background-chicken-pizza-png-png.jpg',
//      Name  :'Veg Veggie Pizza',
//      Price : 350,
// },
// {  
//       id : 3 , 
//       img :'./pizza-isolate-white-background-generative-ai_74760-2619.avif',
//      Name  :'Mushroom Pizza',
//      Price : 450,
// },
// {  
//       id : 4 ,
//       img :'./pizza-isolate-white-background-generative-ai_74760-2619.avif',
//      Name  :'Sweets Corn Cheese Pizza',
//      Price : 200,
// },
// {  
//        id : 5 ,
//       img :'./pizza-with-white-background-high-quality-ultra-hd-free-photo-removebg-preview.png',
//      Name  :'Onion Capsicum Pizza',
//      Price : 150,
// },
// {  
//        id : 6 , 
//       img :'./download.jpeg',
//      Name  :'Chicken Prep Pizza',
//      Price : 450,
// }
// ]

// let Cart = document.getElementById('Cart');
// let result = 1;
// let totalPrice = 0;
// let pricetage = document.getElementById('priceTage')


// let addToCart = (item) => {
//       const arr = [];
//       result = 1
//       let data = obj.filter((ob, i) => {
//         if (i === item) {
//           return   arr.push(ob);
//         }
//       });
    
//       arr.forEach((a,i) => {
//         console.log(i);
//             let cartDiv = document.createElement('div');
//             cartDiv.classList = 'cartDiv';
        
        
//             let productImg = document.createElement('img');
//             productImg.src = a.img;
//             cartDiv.appendChild(productImg);
        
//             let productName = document.createElement('p');
//             productName.textContent = a.Name;
//             cartDiv.appendChild(productName);
        
//             let productQuantity = document.createElement('p');
//             productQuantity.textContent = `Price :${a.Price}`;
//              totalPrice += a.Price
//              pricetage.textContent = totalPrice
//             cartDiv.appendChild(productQuantity);
        
//             let addButton = document.createElement('button');
//             addButton.textContent = '+';
//             cartDiv.appendChild(addButton);
        
//             let quantity = document.createElement('span');
//             quantity.textContent = result;
//             cartDiv.appendChild(quantity);
        
//             addButton.addEventListener('click', function add() {
//                ++result;
//               quantity.textContent = result;
//               productQuantity.textContent = `Price :${a.Price * result}`;
//               totalPrice += a.Price
//               pricetage.textContent = totalPrice  ;
            
              
//             });
        
//             let minusButton = document.createElement('button');
//             minusButton.textContent = '-';
//             cartDiv.appendChild(minusButton);
//             minusButton.addEventListener('click', function minus() {
//               if (result > 1) {
//                 --result;
//                 quantity.textContent = result;
//                 productQuantity.textContent = `Price :${a.Price * result}`;
//                 totalPrice += productQuantity
//                 pricetage.textContent = totalPrice
//               }
//             });
           
//             Cart.appendChild(cartDiv);
            
//           });
//     };
    



// const container = document.getElementById('container');

// obj.map((i,Index)=>{
      
//       let itemDiv = document.createElement('div')
//       itemDiv.setAttribute("id","products")
      
//       let imgElement = document.createElement('img')
//       imgElement.src = i.img
//       itemDiv.appendChild(imgElement)

//       let nameElement = document.createElement('p')
//       nameElement.textContent = i.Name
//       itemDiv.appendChild(nameElement)

//       let priceElement = document.createElement('p')
//       priceElement.textContent = `Price : ${i.Price}`
//       itemDiv.appendChild(priceElement)

//       let buttonElement = document.createElement('button')
//       buttonElement.textContent = "Add to Cart"
//       buttonElement.setAttribute('Onclick',`addToCart(${Index})`)
//       itemDiv.appendChild(buttonElement)


//       container.appendChild(itemDiv)
// })

let obj = [
  {
    id: 1,
    img: './pizza-png-15.png',
    Name: 'Italic Pizza',
    Price: 250,
  },
  {
    id: 2,
    img: './desktop-wallpaper-pizza-barbecue-pesto-piri-piri-chicken-meat-transparent-background-chicken-pizza-png-png.jpg',
    Name: 'Veg Veggie Pizza',
    Price: 350,
  },
  {
    id: 3,
    img: './pizza-isolate-white-background-generative-ai_74760-2619.avif',
    Name: 'Mushroom Pizza',
    Price: 450,
  },
  {
    id: 4,
    img: './pizza-isolate-white-background-generative-ai_74760-2619.avif',
    Name: 'Sweets Corn Cheese Pizza',
    Price: 200,
  },
  {
    id: 5,
    img: './pizza-with-white-background-high-quality-ultra-hd-free-photo-removebg-preview.png',
    Name: 'Onion Capsicum Pizza',
    Price: 150,
  },
  {
    id: 6,
    img: './download.jpeg',
    Name: 'Chicken Prep Pizza',
    Price: 450,
  },
];

let Cart = document.getElementById('Cart');
let result = 1;
let totalPrice = 0;
let pricetage = document.getElementById('priceTage');
let cartItems = [];

let addToCart = (item) => {
  
  const selectedItem = obj[item];
  

  const existingCartItem = cartItems.find((cartItem) => cartItem.id === selectedItem.id);
  console.log(cartItems);

  if (existingCartItem) {
    existingCartItem.quantity += 1;
    existingCartItem.totalPrice = existingCartItem.quantity * existingCartItem.price;
  } else {
    const newItem = {
      id: selectedItem.id,
      img: selectedItem.img,
      name: selectedItem.Name,
      price: selectedItem.Price,
      quantity: 1,
      totalPrice: selectedItem.Price,
    };

    cartItems.push(newItem);
  }

 
  updateCartUI();
};


function updateCartUI() {
  
  Cart.innerHTML = '';

  
  totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0) ;
  

  pricetage.textContent = totalPrice;

  
  cartItems.forEach((cartItem) => {
    
    let cartDiv = document.createElement('div');
    cartDiv.classList = 'cartDiv';
  

    let productImg = document.createElement('img');
    productImg.src = cartItem.img;
    cartDiv.appendChild(productImg);

    let productName = document.createElement('p');
    productName.textContent = cartItem.name;
    cartDiv.appendChild(productName);

    let productQuantity = document.createElement('p');
    productQuantity.textContent = `Price :${cartItem.totalPrice}`;
    cartDiv.appendChild(productQuantity);
    let minusButton = document.createElement('button');
    minusButton.textContent = '-';
    minusButton.setAttribute("id","minusButton")
    cartDiv.appendChild(minusButton);

    minusButton.addEventListener('click', function minus() {
      
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        cartItem.totalPrice = cartItem.quantity * cartItem.price;
        quantity.textContent = cartItem.quantity;
        productQuantity.textContent = `Price :${cartItem.totalPrice}`;
        updateTotalPrice();
      }else{
            cartDiv.style.display = "none";
            pricetage.textContent -= cartItem.totalPrice
            cartItems.pop()
            
      }
    });


    let quantity = document.createElement('span');
    quantity.textContent = cartItem.quantity;
    cartDiv.appendChild(quantity);
    let addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.setAttribute("id","cartButton")
    cartDiv.appendChild(addButton);

    addButton.addEventListener('click', function add() {
      cartItem.quantity += 1;
      cartItem.totalPrice = cartItem.quantity * cartItem.price;
      quantity.textContent = cartItem.quantity;
      productQuantity.textContent = `Price :${cartItem.totalPrice}`;
      updateTotalPrice();
    });

    Cart.appendChild(cartDiv);
  });
}


function updateTotalPrice() {
  totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);
  pricetage.textContent = totalPrice;
}

const container = document.getElementById('container');

obj.map((i, Index) => {
  let itemDiv = document.createElement('div');
  itemDiv.setAttribute('id', 'products');

  let imgElement = document.createElement('img');
  imgElement.src = i.img;
  itemDiv.appendChild(imgElement);

  let nameElement = document.createElement('p');
  nameElement.textContent = i.Name;
  itemDiv.appendChild(nameElement);

  let priceElement = document.createElement('p');
  priceElement.textContent = `Price : ${i.Price}`;
  itemDiv.appendChild(priceElement);

  let buttonElement = document.createElement('button');
  buttonElement.textContent = 'Add to Cart';
  buttonElement.addEventListener('click', () => addToCart(Index));
  itemDiv.appendChild(buttonElement);

  container.appendChild(itemDiv);
});





