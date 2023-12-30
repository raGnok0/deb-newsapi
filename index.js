const API_KEY = "7388640798e6441fb6ba44abf7ca7938";
const url = "https://newsapi.org/v2/everything?q=";

let query_value = "India";




window.addEventListener("load" , ()=> fetchData(query_value));

async function fetchData(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles)
    console.log(data)
}

function bindData(articles){
    const cardsSection = document.getElementById('card-section');
    const card = document.getElementById('card-body');
    
    cardsSection.innerHTML = "";
    
    articles.forEach((article) => {
        if(!article.urlToImage) return;
        const cardClone = card.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardsSection.appendChild(cardClone);
    });

    
    
}

function fillDataInCard(cardClone,article){
    const cardImg = cardClone.querySelector("#card-img");
    const cardDesc = cardClone.querySelector("#card-desc");
    const cardTitle = cardClone.querySelector("#card-title");
    cardImg.src = article.urlToImage;
    cardDesc.innerHTML = article.description;
    cardTitle.innerHTML = article.title;
    
    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url , "_blank");
    })
    
}

function searchItem(){
    fetchData(document.getElementById("search-section").value);
}

function navItem(id){
    fetchData(id);
}