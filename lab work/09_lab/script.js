var products=[
    {
        id:1,
        prod:"Floral Rainbow",
        price:660,
        img:"./Project/pic1.jpg"

    },
    {
        id:2,
        prod:"Pink Passion",
        price:800,
        img:"./Project/pic2.jpg"
    },
    {
        id:3,
        prod:"Happiness Bloom",
        price:200,
        img:"./Project/pic3.jpg"
    },
    {
        id:4,
        prod:"Effortlessly Chic",
        price:530,
        img:"./Project/pic4.jpg"
    },
    {
        id:5,
        prod:"Love Energized",
        price:470,
        img:"./Project/pic5.jpg"
    },
    {
        id:6,
        prod:"Orchid Dreams",
        price:640,
        img:"./Project/pic6.jpg"
    },
    {
        id:7,
        prod:" Simply Pink",
        price:530,
        img:"./Project/pic7.jpg"
    },
    {
        id:8,
        prod:"Elegance in a Vase",
        price:650,
        img:"./Project/pic8.jpg"
    },
    {
        id:9,
        prod:"Beautiful and Sweet",
        price:578,
        img:"./Project/pic9.jpg"
    },
    {
        id:10,
        prod:"Floral Fantasy",
        price:500,
        img:"./Project/pic10.jpg"
    },
    {
        id:11,
        prod:"Daydreaming",
        price:590,
        img:"./Project/pic11.jpg"
    },
    {
        id:12,
        prod:"Fairytale Vase",
        price:700,
        img:"./Project/pic12.jpg"
    }
];
var shopTemp=document.getElementById("shop");
products.forEach(element => {
    var card=document.createElement("div");
    card.setAttribute("class","card col-lg-3 col-md-4 col-sm-6");
    card.style.textAlign="center";
    card.style.backgroundColor="#FDFFD1";

    var image=document.createElement("img");
    image.setAttribute("class","card-img-top");
    image.src=element.img;
    card.appendChild(image);

    var body=document.createElement("div");
    body.setAttribute("class","card-body");

    var title=document.createElement("h6");
    title.setAttribute("class","card-title");
    title.innerText=element.prod;
    body.appendChild(title);
    title.style.color="#5B8F90";

    var text=document.createElement("p");
    text.innerText=element.price+ " SAR";
    text.style.color="#5B8F90";
    body.appendChild(text);

    var addtocart=document.createElement("input");
    addtocart.setAttribute("id",element.id);
    addtocart.setAttribute("type","button");
    addtocart.setAttribute("value","Add To Cart");
    addtocart.setAttribute("class","btn");
    addtocart.style.backgroundColor="#EBCDC0";
    addtocart.style.width="100%";
    addtocart.style.color="#FDFFD1";
    addtocart.addEventListener("click",addToCart);
    body.appendChild(addtocart);

    card.appendChild(body);
    shopTemp.appendChild(card);
});
var cart=[];
function addToCart(event){
    var prd=products.find(p=>p.id==event.target.id);
    cart.push(prd);
    cartPrd=JSON.stringify(cart);
    localStorage.setItem("cart",cartPrd);
    cart=JSON.parse(localStorage.getItem("cart"));
    location.href="./cart.html";
}

var cartTemp=document.getElementById("cart");
var totalprice=document.getElementById("totalprice");
var total=0;
var cartprds=[];
for (i = 0; i < localStorage.length; i++)   {
    cartprds=(JSON.parse(localStorage.getItem(localStorage.key(i))));
    cartprds.forEach(element => {
        var card=document.createElement("div");
        card.setAttribute("class","card col-lg-3 col-md-4 col-sm-6");
        card.style.textAlign="center";
        card.style.backgroundColor="#FDFFD1";

        var image=document.createElement("img");
        image.setAttribute("class","card-img-top");
        image.src=element.img;
        card.appendChild(image);

        var body=document.createElement("div");
        body.setAttribute("class","card-body");

        var title=document.createElement("h5");
        title.setAttribute("class","card-title");
        title.innerText=element.prod;
        body.appendChild(title);

        var text=document.createElement("p");
        text.innerText=element.price+" SAR";
        body.appendChild(text);

        card.appendChild(body);
        cartTemp.appendChild(card);

        total+=element.price;
    });
        totalprice.innerText="Total Price: "+total+" SAR";
}
