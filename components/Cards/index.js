// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);
        // const keys = Object.keys(response.data.articles.bootstrap);
        // console.log(keys);
        // const entries = Object.entries(response.data.articles.bootstrap);
        // console.log(entries);
        // const values = Object.values(response.data.articles);
        // console.log(values);
        // const values = response.data.articles;
        // console.log(values);
        
        response.data.articles.javascript.forEach(item => {
            const newCards = cards(item);
            cardsCont.appendChild(newCards);
        })
        response.data.articles.bootstrap.forEach(item => {
            const newCards = cards(item);
            cardsCont.appendChild(newCards);
        })
        response.data.articles.technology.forEach(item => {
            const newCards = cards(item);
            cardsCont.appendChild(newCards);
        })
        response.data.articles.jquery.forEach(item => {
            const newCards = cards(item);
            cardsCont.appendChild(newCards);
        })
        response.data.articles.node.forEach(item => {
            const newCards = cards(item);
            cardsCont.appendChild(newCards);
        })

        // for(let i = 0; i <= 3; i++){
        // const cardsJS = cards(response.data.articles.javascript[i]);
        // cardsCont.appendChild(cardsJS);
        // const cardsBS = cards(response.data.articles.bootstrap[i]);
        // cardsCont.appendChild(cardsBS);
        // const cardsTech = cards(response.data.articles.technology[i]);
        // cardsCont.appendChild(cardsTech);
        // const cardsJquery = cards(response.data.articles.jquery[i]);
        // cardsCont.appendChild(cardsJquery);
        // const cardsNode = cards(response.data.articles.node[i]);
        // cardsCont.appendChild(cardsNode);
        // }
    })
    .catch(error => {
        console.log("The data was not returned", error);
    })

function cards(object) {
    const card = document.createElement("div"),
          headline = document.createElement("div"),
          author = document.createElement("div"),
          imgCont = document.createElement("div"),
          image = document.createElement("img"),
          by = document.createElement("span");

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgCont.classList.add("img-container");

    headline.textContent = object.headline;
    image.src = object.authorPhoto;
    by.textContent = "By " + object.authorName;
    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(image);
    author.appendChild(by);

    return card;
}
const cardsCont = document.querySelector(".cards-container");