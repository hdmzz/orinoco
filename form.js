

//apparition du formulaire et disparition du panier
let btnCommander = document.getElementById('btnCommander');
let panierSection = document.getElementById('panierFull');
/* console.log(panier);
 */btnCommander.addEventListener('click', () => {
    formSection.setAttribute ('style', 'display:initial;')
    panierSection.setAttribute("style", "display:none;")
});

let commandBtn = document.getElementById('formButton');
//On recupère les données de l'utilisateur que l'on stock dans un objet
//on constuit un tablau d'id
let teddieId = [];
panier.map(teddie => teddieId.push(teddie.id));
/* console.log(teddieId);
console.log(JSON.stringify(teddieId)); */

const inputs = document.querySelectorAll("input");
console.log(inputs);
const formulaireValid = (input) => {
    input.addEventListener('input', (event) => {
        if (!event.target.validity.valid){
            console.log('erreur')
        }
    })
    
}

Array.from(inputs).map(formulaireValid);

commandBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
   
    cartToSend();
});

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
            //clearLocalStorage();
            showData(data)
        })
}
const clearLocalStorage = () => {
    localStorage.clear();
}
const showData = (data) =>{
    console.log(data.orderId);
    window.location.href = `/confirm.html?orderId=${data.orderId}`;
}
