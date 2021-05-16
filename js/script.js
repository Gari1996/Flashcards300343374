/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [{quote:"All life is an experiment. The more experiments you make, the better.",citation:"Twitter", year:"2011",source:"Ralph Waldo Emerson"},{quote:"I cannot trust a man to control others who cannot control himself.",year:"2011", source:"Justin"},{quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.", citation:"blog.hubspot", source:"Nelson Mandela"},{quote:"The way to get started is to quit talking and begin doing.",source:"Walt Disney"},{quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",year:"1996",source:"Steve Jobs"},{quote:"If life were predictable it would cease to be life, and be without flavor.", source:"Eleanor Roosevelt"}];
// above built the array of quote objects to store the quotes
// quote, citation, year and source are the properties of each quote object
console.log(quotes.length);
console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
    let random = Math.floor(Math.random() * quotes.length); 
    let value = quotes[random]; // This will give the quote that is placed at that index or number
  //  console.log(value);
    return value;
}
getRandomQuote();
//


/***
 * `printQuote` function
***/
function printQuote(){
    let RandomQuote = getRandomQuote();
    console.log(RandomQuote);
    let PtoHTML1 = "<p class='quote'>" + RandomQuote.quote + "</p>" + "<p class='source'>"+ RandomQuote.source
  if(RandomQuote.citation != undefined)  // if condition is used to check if citation is given in the selected object of the array then get the value of citation 
    PtoHTML1 += "<span class='citation'>" + RandomQuote.citation + "</span>"
    if(RandomQuote.year != undefined)  // if condition is used to check if year is given in the selected object of the array then get that value
    PtoHTML1 += "<span class ='year'>" + RandomQuote.year + "</span>" + "</p>";
      console.log(PtoHTML1);    // it will give the value of the selected quote with quote, citation, year and source with tags
      document.getElementById('quote-box').innerHTML = PtoHTML1;  
}
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);