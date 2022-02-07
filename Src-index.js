const QuoteCon = document.getElementById('QuoteCon');
const Quote = document.getElementById('Quote');
const Auth = document.getElementById('Auth');
const Twitter = document.getElementById('Twitter');
const NewQuo = document.getElementById('NewQuo');
const Loader = document.getElementById('Loader');

let apiQuotes = [];


async function GetQuo(){
    Loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        
        const res = await fetch(apiUrl);
        apiQuotes = await res.json();
        showQuo();
        
    }catch(error){

    }
}

function showQuo(){

    Loading();
    setTimeout(function() {
        const quo = apiQuotes[getRandomInt(apiQuotes.length)]
    Quote.innerText = quo.text;
    if(quo.author){
        Auth.innerText = quo.author;
        
    }else{
        Auth.innerText = "No one know's!";
    }
    FinLoading();
      }, 200);
    
}

function tweetQuo(){

    const twitterUrl = `https://twitter.com/intent/tweet?text=${Quote.textContent} - ${Auth.textContent}`;
    window.open(twitterUrl,'_blank')

}

function Loading(){
    Loader.hidden = false;
    QuoteCon.hidden = true;

}
function FinLoading(){
    Loader.hidden = true;
    QuoteCon.hidden = false;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


GetQuo()
