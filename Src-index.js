const QuoteCon = document.getElementById('QuoteCon');
const Quote = document.getElementById('Quote');
const Auth = document.getElementById('Auth');
const Twitter = document.getElementById('Twitter');
const NewQuo = document.getElementById('NewQuo');

let apiQuotes = [];


async function GetQuo(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        
        const res = await fetch(apiUrl);
        apiQuotes = await res.json();
        showQuo();
        
    }catch(error){

    }
}

function showQuo(){
    const quo = apiQuotes[getRandomInt(apiQuotes.length)]
    Quote.innerText = quo.text;
    if(quo.author){
        Auth.innerText = quo.author;
    }else{
        Auth.innerText = "No one know's!";
    }

}

function tweetQuo(){

    const twitterUrl = `https://twitter.com/intent/tweet?text=${Quote.textContent} - ${Auth.textContent}`;
    window.open(twitterUrl,'_blank')

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


GetQuo()