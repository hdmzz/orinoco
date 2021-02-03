let  panier = JSON.parse(localStorage.getItem('panier'));
console.log(panier);
let formSection = document.getElementById('formContainer');
formSection.setAttribute('style', 'display:none;');
let mainConteneur = document.getElementById('main');

if(panier == null){
    let emptyCartContaineur = document.createElement('div');
    emptyCartContaineur.setAttribute('style', 'text-align:center;')
    emptyCartContaineur.innerHTML = '<h1 class="mb-4">Votre panier est vide</h1>';
    mainConteneur.appendChild(emptyCartContaineur);
    btnCommander.setAttribute('style', 'display:none');
}

const showCartShopping = teddie => {
    let containeur = document.createElement('div');
    containeur.className = 'row mb-5'
    let imgContaineur = document.createElement('div');
    imgContaineur.className = 'col-3';
    let img = document.createElement('img');
    img.src = teddie.image;
    img.className = 'card-img';
    mainConteneur.appendChild(containeur);
    containeur.appendChild(imgContaineur);
    imgContaineur.appendChild(img);
    //nom
    let nameDiv = document.createElement('div');
    nameDiv.className = 'col-7';
    let name = document.createElement('p')
    name.innerHTML = teddie.name;
    containeur.appendChild(nameDiv);
    nameDiv.appendChild(name);
    //Prix 
    let priceDiv = document.createElement('div');
    priceDiv.className = 'col-2'
    let price = document.createElement('p');
    price.innerHTML = `${teddie.price/100}€`;
    containeur.appendChild(priceDiv);
    priceDiv.appendChild(price);
    //Partie Quantité Création d'une div qui contiendra les deux boutons
    let addBox = document.createElement('div');
    addBox.className = 'qtyAddMin';
    containeur.appendChild(addBox);
    // Ajout d'un bouton supprimer l'article
    /* let btnSuppr = document.createElement('button');
    btnSuppr.innerHTML = 'supprimer';
    addBox.appendChild(btnSuppr);
    btnSuppr.addEventListener('click', () =>{
        supprBtn(teddie);
        btnSuppr.parentElement.parentElement.remove(); 
    } );*/
    //prix total
    totalPrice(teddie);
};

/* const supprBtn = (teddie) => {
   let index = panier.indexOf(teddie);
   console.log(panier);
   //console.log(panier.length);
   panier.splice(index,1);
   //console.log(panier.length);
   console.log(panier);
} */


/* const totalPrice = (teddie) => {
    let singlePrice = parseInt(teddie.price);
    priceSum += singlePrice;
    let priceTotalContainer = document.getElementById('sum');
    priceTotalContainer.innerHTML = priceSum;
} */

panier.map(teddie => showCartShopping(teddie));



