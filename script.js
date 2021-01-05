let quotes = ['You are the shuckiest shuck faced shuck in the world', 
    `I'm unpredictable, I never know where I'm going until I get there, I'm so random.`,
    `That proves you are unusual," returned the Scarecrow; "and I am convinced that the only people worthy of consideration are unusual `,
    `A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be`,
    `Never ask an elf for help; they might decide your better off dead`]

let authors = ['James Dashner', 'JoyBell C', 'L. Frank Baum', 'Abraham Maslow', 'Christopher Paolini']

let text = document.querySelector('#text')
let author = document.querySelector('#author')
let newQuote = document.querySelector('#new-quote')
let tweetQuote = document.querySelector('#btn-tweet-quote')
let twitterLink = document.querySelector('#tweet-quote')


newQuote.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * (quotes.length-1))
    text.innerHTML = quotes[randomNumber]
    author.innerHTML = '- ' + authors[randomNumber]
    
    
})

randomNumber = Math.floor(Math.random() * (quotes.length-1))
twitterLink.addEventListener('click', () => {
    twitterLink.href = 'https://twitter.com/intent/tweet?text=' + quotes[randomNumber]
    console.log(twitterLink)
})

    