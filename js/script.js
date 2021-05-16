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
let quotes = [{quote:"All life is an experiment. The more experiments you make, the better.",citation:"Twitter", year:"2011",source:"Ralph Waldo Emerson"},{quote:"I cannot trust a man to control others who cannot control himself.", source:"Justin"},{quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.", source:"Nelson Mandela"},{quote:"The way to get started is to quit talking and begin doing.",source:"Walt Disney"},{quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",source:"Steve Jobs"},{quote:"If life were predictable it would cease to be life, and be without flavor.", source:"Eleanor Roosevelt"}];
console.log(quotes.length);
console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
    let random = Math.floor(Math.random() * quotes.length); 
    console.log(random);
    let value = quotes[random];
    return value;
}
getRandomQuote();



/***
 * `printQuote` function
***/
function printQuote(){
    let RandomQuote = getRandomQuote();
    let PtoHTML1 = "<p class='quote'>" + RandomQuote.quote + "</p>" + "<p class='source'>"+ RandomQuote.source
  if(RandomQuote.citation != undefined)
    PtoHTML1 += "<span class='citation'>" + RandomQuote.citation + "</span>"
    if(RandomQuote.year != undefined)
    PtoHTML1 += "<span class ='year'>" + RandomQuote.year + "</span>" + "</p>";
      console.log(PtoHTML1);
      document.getElementById('quote-box').innerHTML = PtoHTML1;  
      
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);