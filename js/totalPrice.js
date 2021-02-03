let priceSum = 0;
const totalPrice = (data) => {
    let singlePrice = parseInt(data.price);
    priceSum += singlePrice;
    let priceTotalContainer = document.getElementById('sum');
    priceTotalContainer.innerHTML = 'Prix total du panier :' + ' ' + priceSum/100 + '€';
}