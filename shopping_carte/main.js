let carts =document.querySelectorAll('.addcart');
let products=[
    {
        name:'Casio Montre Hommes',
        tag: 'montre1',
        price:110,
        incart:0
    },
    {
        name:'Q&Q Montre Homme',
        tag: 'montre2',
        price:180,
        incart:0
    },
    {
        name:'Casio Montre Hommes',
        tag: 'montre3',
        price:170,
        incart:0
    },
    {
        name:'Q&Q Montre Homme',
        tag: 'montre4',
        price:480,
        incart:0
    },
    {
        name:'Q&Q Montre Homme',
        tag: 'montre5',
        price:150,
        incart:0
    },
];
for(let i=0; i<carts.length ; i++){
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i]);

    })
}
function OnLoadCartNumbers(){
    let productNumbers= localStorage.getItem('cartNumbers');

    if ( productNumbers ){
        
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
function cartNumbers(product){
    let productNumbers= localStorage.getItem('cartNumbers');
    productNumbers= parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent =productNumbers+1;

     } else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent =1;
    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems!=null){

        if(cartItems[product.tag] == undefined){
            cartItems={
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].incart += 1;
    }else{
         product.incart= 1;
         cartItems = {
             [product.tag]: product
         }
         }

    
    localStorage.setItem("productInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null){
        cartCost= parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else{
        localStorage.setItem("totalCost", product.price );
    }

}

function displayCart(){
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');

     let productCantainer = document.querySelector(".mesproduits");
    if( cartItems && productCantainer){
        productCantainer.innerHTML='';
        Object.values(cartItems).map(item => {
            productCantainer.innerHTML+=
            `
            <div class="affichageproduit">

                <div class="product">
                    <ion-icon name="close-circle-outline"></ion-icon>
                    <img src="${item.tag}.jpg">
                <span>${item.name}</span>
                </div>
            
                <div class="price"> ${item.price},00</div>

                 <div class="quantity"> 
                     <ion-icon name="arrow-back-circle-outline"></ion-icon>
                     <span>${item.incart}</span>
                     <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                </div>

                <div class= "total">
                     ${item.incart * item.price},00 
               </div>

            </div>
            `;

        });
        productCantainer.innerHTML += `
        <div class="affichagettotal">
        <h3 class="titrettotal"> Basket total  =   <h3>
        <h3 class="ttotal">${cartCost},00<h3>

        </div>
        `;
    }
}


    


OnLoadCartNumbers();
displayCart();
console.log("jkjkjkjkj");