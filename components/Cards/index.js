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
        const values = Object.values(response.data.articles);
        console.log(values);
        
        // response.data.articles.forEach(item => {
        //     const newCards = cards(item);
        //     cardsCont.appendChild(newCards);
        // })
        const newCards = cards(response.data.articles);
        cardsCont.appendChild(newCards);

        // const bsIndex = response.data.articles.bootstrap;
        // console.log(bsIndex[0].headline)
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

    for(let i=0; i < object.bootstrap.length; i++){
    headline.textContent = object.bootstrap[i].headline;
    image.src = object.bootstrap[i].authorPhoto;
    by.textContent = "By " + object.bootstrap[i].authorName;
    }

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgCont);
    imgCont.appendChild(image);
    author.appendChild(by);

    return card;
}
const cardsCont = document.querySelector(".cards-container");