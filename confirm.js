let searchParams = new URLSearchParams(window.location.search);
let orderId = searchParams.get('orderId');
console.log(orderId);
let ref = document.getElementById('reference');
ref.innerHTML = `La référence de votre commande est ${orderId}`;
//recupération du panier pour totalPrice

let data = JSON.parse(localStorage.getItem('panier'));
data.map(teddie => totalPrice(teddie));
localStorage.clear();
//totalPrice ok -----------


