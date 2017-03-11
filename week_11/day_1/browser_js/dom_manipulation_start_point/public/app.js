var data = [
{quote: "Life is like a box of chocolates. ", 
author: "Forest Gump's Mum"}, 
{quote: "Can you smell what the Rock is cooking? ", 
author: "The Rock"}];

var createQuoteArticle = function(){
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');
  return quoteArticle;
};

var createBlockQuote = function(quote){
  var blockquote = document.createElement('blockquote');
  blockquote.innerText = quote;
  return blockquote;
};

var createCite = function(author){
  var cite = document.createElement('cite');
  cite.innerText = author;
  return cite;
};

var appendElements = function(quotes, quoteArticle, blockquote, cite){
  blockquote.appendChild(cite);
  quoteArticle.appendChild(blockquote);
  quotes.appendChild(quoteArticle);
};

var addQuote = function(quote, author){
  var quoteArticle = createQuoteArticle();
  var blockquote = createBlockQuote(quote);
  var cite = createCite(author);
  var quotes = document.getElementById('quotes');
  appendElements(quotes, quoteArticle, blockquote, cite);
};

  var app = function () {
    // addQuote("Make America great again. ", "Donald Trump");
    for(quote of data){
    addQuote(quote.quote, quote.author)};
  };

window.onload = app;

//   // 1. Create the parent container and it's class
//   var quoteArticle = document.createElement('article');
//   quoteArticle.classList.add('quote');

//   // 2. Create the first child (blockquote)
//   var blockquote = document.createElement('blockquote');
//   blockquote.innerText = 'New Quote. ';

//   // 3. Create the child inside the blockquote
//   var cite = document.createElement('cite');
//   cite.innerText = 'Some Person';

//   // 4. Append the cite to the blockquote
//   blockquote.appendChild(cite);

//   // 5. Append the blockquote to the article
//   quoteArticle.appendChild(blockquote);

//   // 6. Add everything to the quotes list
//   var quotes = document.querySelector('#quotes');
//   quotes.appendChild(quoteArticle);


