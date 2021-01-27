let searchParams = new URLSearchParams(window.location.search);
let id = searchParams.get('id');
console.log(id);
let urlId = `http://localhost:3000/api/teddies/${id}`
const fetchTeddieById = () =>{
    fetch (urlId)
    .catch(console.error())
    .then(response =>{
        if (response.ok){
            response.json()
            .then(data => {
                showTeddiesDetails(data);
            })
        }else{
            console.log('Il y a un probleme dans la requete');
        }
    })
};

const showTeddiesDetails = (data) => {
    console.log(data);
// creation d'un article conteneur des info du produit
let mainContainer = document.getElementById('main');
let article = document.createElement('article');
article.className ='carte';
mainContainer.appendChild(article);

// insertion de l'image
let img = document.createElement('img');
img.className = 'w-50';
img.src = data.imageUrl;
article.appendChild(img);
//creation d'une div pour les specificitées
let specs = document.createElement('div');
specs.id ='desPrNo';
article.appendChild(specs);
// Ajout du noms
let nameDiv = document.createElement('p');
nameDiv.innerHTML = data.name;
specs.appendChild(nameDiv);
//ajout des prix
let priceDiv = document.createElement('p');
priceDiv.className = 'price';
priceDiv.innerHTML = data.price;
specs.appendChild(priceDiv);
//Description
let description = document.createElement('p');
description.innerHTML = data.description;
console.log(data.description);
specs.appendChild(description);
//Ajout des options
//let selectBtn =  document.getElementById('selectColors');
let divInputs = document.createElement('div');
divInputs.className ='inputs';
specs.appendChild(divInputs);
//Input quantité
let inputs = document.createElement('input');
inputs.type = 'number';
inputs.min = '1';
inputs.id = 'quantite';
inputs.name = 'Quantité'
inputs.value = '1';
divInputs.appendChild(inputs);
//Colors
let colors = document.createElement('select');
colors.name = 'colors';
divInputs.appendChild(colors);
//
let teddieColors = data.colors;//recupe des choix de couleurs
teddieColors.map(color => {
    let optionColor = document.createElement('option')
    optionColor.value = color;
    optionColor.innerHTML = color;
    colors.appendChild(optionColor);
    });
//Bouton ajout panier
let ajoutPanier = document.createElement('button');
ajoutPanier.id = 'btnAjouter';
ajoutPanier.innerHTML = 'Ajouter au panier'
specs.appendChild(ajoutPanier);
ajoutPanier.addEventListener('click', () => addToCart(data));
};

// declaration d'un objet qu l'on va stringifier après
const addToCart = (data) => {
    const myTeddie = {
        id: id,
        image: `${data.imageUrl}`,
        name: `${data.name}`,
        description: `${data.description}`,
        price: `${data.price}`,
        quantity: 1,
    }
    //on stringify l'objet
    //const myTeddieSerialized = JSON.stringify(myTeddie);
    //on appelle ensuite une fonction qui stock dans le local storage
    addItemToCart(myTeddie)
}

const addItemToCart = (myTeddie) => {
    let panier = localStorage.getItem('panier')
    console.log(panier);
    if (panier == null){
        panier = [];
    } else {
        panier = JSON.parse(panier)
    }
    console.log('addItemToCart');
    console.log(panier)
    panier.push(myTeddie);
    localStorage.setItem('panier', JSON.stringify(panier));
    console.log(localStorage);
}

/* et ;
 ajoutPanier.addEventListener('click', function(data){
     localStorage.setItem('data', data.name);
     console.log(localStorage);
 })
 
 
 */


 /* (data) => {
    localStorage.setItem('name', `${data.name}`);
    console.log(localStorage);} */


/*const addItems = () =>{
    const btnAdd = document.getElementById('btnAjouter');
    btnAdd.addEventListener('click')
}*/
fetchTeddieById();


/* let buttonEnvoyer = document.getElementById('hugo');
buttonEnvoyer.addEventListener('click', function (event){
    const name = document.getElementById('name');
    localStorage.setItem('name', name.value);
    console.log(localStorage);
} ) */

