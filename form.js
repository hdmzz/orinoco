//apparition du formulaire et disparition du panier
let btnCommander = document.getElementById('btnCommander');
let panierSection = document.getElementById('panierFull');
console.log(panier);
btnCommander.addEventListener('click', () => {
    formSection.setAttribute ('style', 'display:initial;')
    panierSection.setAttribute("style", "display:none;")
});

let commandBtn = document.getElementById('formButton');
commandBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const formAchat = {
        contact:{
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('name').value,
            adress: document.getElementById('adresse').value,
            city: document.getElementById('city').value,
            email: document.getElementById('email').value,
        },
        products: teddieId,
    }
    console.log(formAchat);
});
//on constuit un tablau d'id
let teddieId = [];
panier.map(teddie => teddieId.push(teddie.id));
console.log(teddieId);
console.log(JSON.stringify(teddieId));
//n recupère les données de l'utilisateur que l'on stock dans un objet




