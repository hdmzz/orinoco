let  panier = JSON.parse(localStorage.getItem('panier'));
let formSection = document.getElementById('formContainer');
formSection.setAttribute ('style', 'display:none;');
let mainConteneur = document.getElementById('main');
const showCartShopping = teddie => {
    let containeur = document.createElement('div');
    containeur.className = 'ligne'
    let img = document.createElement('img');
    img.src = teddie.image;
    img.className = 'w-25';
    mainConteneur.appendChild(containeur);
    containeur.appendChild(img);
    //nom
    let name = document.createElement('div');
    name.innerHTML = teddie.name;
    containeur.appendChild(name);
    //Prix 
    let price = document.createElement('div');
    price.innerHTML = teddie.price;
    containeur.appendChild(price);
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



