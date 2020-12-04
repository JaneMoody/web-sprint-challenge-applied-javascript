// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

let cards = document.querySelector(".cards-container");

const maker = (data) => {
  let card = document.createElement("div");
  let headline = document.createElement("div");
  let author = document.createElement("div");
  let imageCont = document.createElement("div");
  let imageSrc = document.createElement("img");
  let authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imageCont.classList.add("img-container");
  imageSrc.src = data.photo;

  headline.textContent = data.headline;
  authorName.textContent = `By ${data.authorName}`;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageCont);
  imageCont.appendChild(imageSrc);
  author.appendChild(authorName);

  return card;
};

axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((response) => {
    response.data.articles.javascript.forEach((article) => {
      cards.appendChild(maker(article));
      cards.addEventListener("click", () => {
        console.log(article.headline);
      });
    });
    response.data.articles.technology.forEach((article) => {
      cards.appendChild(maker(article));
      cards.addEventListener("click", () => {
        console.log(article.headline);
      });
    });
  });
