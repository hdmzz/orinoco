const url = 'http://localhost:3000/api/teddies';
const requeteFetch = () =>{
fetch(url)
    .catch(error => {
        alertErreur ()
    })
    .then(response => response.json())
    .then((data) =>{
        data.map(teddies =>{
             showTeddies(teddies)
        })
    });


}
const alertErreur = () =>{
    console.log('une erreur a été detectée');
}


    const showTeddies = teddies => {
    // création du conteneur de chaque article 
        let mainContainer = document.getElementById('main');
        let article = document.createElement('a');
        article.href = `product.html?id=${teddies._id}`;
        //article.href = 'product.html?id=' + teddies._id;
        article.className ='col-4';
        mainContainer.appendChild(article);

        //Ajout de l'image
        let img = document.createElement('img');
        img.className ='w-75';
        img.src = `${teddies.imageUrl}`;
        article.appendChild(img);
        //Ajout des nom
        let nameDiv = document.createElement('p');
        nameDiv.innerHTML = `${teddies.name}`;
        article.appendChild(nameDiv);
        //ajout des prix
        const priceAjustement = (x) =>{

        };
        let priceDiv = document.createElement('p');
        priceDiv.className = 'price';
        priceDiv.innerHTML = `${teddies.price}`;
        article.appendChild(priceDiv);
    }


requeteFetch()