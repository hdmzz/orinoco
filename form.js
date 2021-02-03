

//apparition du formulaire et disparition du panier
let btnCommander = document.getElementById('btnCommander');
let panierSection = document.getElementById('panierFull');
/* console.log(panier);
 */btnCommander.addEventListener('click', () => {
    formSection.setAttribute ('style', 'display:initial;')
    panierSection.setAttribute("style", "display:none;")
});

let commandBtn = document.getElementById('formButton');
//on constuit un tablau d'id
let teddieId = [];
panier.map(teddie => teddieId.push(teddie.id));

//----------------------------------------

//--------------------------------------------
let form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();
    cartToSend();
});
//On recupère les données de l'utilisateur que l'on stock dans un objet avec les ID
//Puis envoie au serveur avec la fonction send
const cartToSend = () => {
    contact = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        email: document.getElementById('email').value,
    }
    products = teddieId;
    let toSend = JSON.stringify({contact, products});
    send(toSend);
}

const send = (toSend) => {const url = 'http://localhost:3000/api/teddies/order'
     fetch (url, 
        {
            method: 'POST',
            headers: 
            {
                'Content-Type':'application/json'
            },
            body: (toSend),
        })
        .then(response => response.json())
        .then(data => {
            showData(data)
        })
}

const showData = (data) =>{
    console.log(data.orderId);
    window.location.href = `confirm.html?orderId=${data.orderId}`;
}
