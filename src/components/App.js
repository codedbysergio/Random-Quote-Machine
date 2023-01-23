import React, { useState } from 'react';
import '../css/App.css';
import QuoteText from './QuoteText';
import Author from './Author';
import Credit from './Credit';
import Buttons from './Buttons';
//import textColors from '../text files/colors.txt';

export const QuoteContext = React.createContext()

function App() {
  
  const [quotes] = useState(shuffledQuotes)
  const [colors] = useState(shuffledColors)
  const [quoteNumber, setQuoteNumber] = useState(0)
  const [colorNumber, setColorNumber] = useState(0)

  const quoteContextValue = {
    handleNextQuote,
    handleNextColor
  }

  function handleNextQuote() {
    let nextQuote = quoteNumber
    if (nextQuote === quotes.length - 1) {
      nextQuote = 0;
    }
    else {
      nextQuote++
    }
    setQuoteNumber(nextQuote)
  }

  function handleNextColor() {
    let nextColor = colorNumber
    if (nextColor === colors.length - 1) {
      nextColor = 0;
    }
    else {
      nextColor++
    }
    setColorNumber(nextColor)
    document.querySelector(":root").style.setProperty("--maincolor", colors[colorNumber]);
  }

  return (
    <QuoteContext.Provider value={quoteContextValue}>
      <div className="App" id='wrapper'>
        <div className='machine-container' id='quote-box'>
          <QuoteText quotes={quotes} number={quoteNumber} id='text'/>  
          <Author quotes={quotes} number={quoteNumber}/>
          <Buttons quotes={quotes} number={quoteNumber}/>
        </div>
        <Credit className='credit-container' />
      </div>
    </QuoteContext.Provider>
  );
}

const defaultColors = [
  "dodgerblue",
  "blueviolet",
  "brown",
  "cadetblue",
  "chocolate",
  "coral",
  "cornflowerblue",
  "crimson",
  "darkcyan",
  "darkgreen",
  "darkmagenta",
  "darkolivegreen",
  "darkred",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "dimgrey",
  "goldenrod",
  "indigo",
  "midnightblue",
  "royalblue",
  "seagreen",
  "teal"
];

const quotes = [
  [
    "Aesop Rock",
    "Not to mention, once you hassle the hoard it doesn't matter how much furniture you stack at the door."
  ],
  [
    "Aesop Rock",
    "There's smoke in my iris, but I painted a sunny day on the insides of my eyelids."
  ],
  [
    "MF DOOM",
    "Definition 'super-villain', a killer who loves children, one who is well-skilled in destruction as well as building."
  ],
  [
    "Killer Mike",
    "We brag on having bread, but none of us are bakers. We all talk having greens, but none of us own acres. If none of us own acres, and none of us grow wheat, then who will feed our people when our people need to eat?"
  ],
  [
    "El-P",
    "I'm a Caveman. Your modern ways frighten and confuse me. I watch your spirit box with the blinking lights and think: are those little people trapped in that box?"
  ],
  [
    "clipping.",
    "Everyone safe and sound, this how family do. Only homies around, everyone here is crew. Somethin' foul in the air, somethin' feelin' askew. Wind is in the pipes, is that whistle callin' for you?"
  ],
  [
    "Viktor Vaughn",
    "Viktor the director flip a script like Rob Reiner. The way a lotta dudes rhyme their name should be 'knob shiner'."
  ],
  [
    "Kendrick Lamar",
    "I'm so sick and tired of the Photoshop. Show me somethin' natural like afro on Richard Pryor."
  ],
  [
    "Kendrick Lamar",
    "I got power, poison, pain, and joy inside my DNA. I got hustle, though, ambition flow inside my DNA. I was born like this, since one like this, immaculate conception. I transform like this, perform like this, was Yeshua's new weapon."
  ],
  [
    "Mos Def",
    "From the first to the last of it delivery is passionate. The whole and not the half of it, forecast and aftermath of it. Projectile that them blasted with, accurate assassin it. Me and Kweli close like Bethlehem and Nazareth."
  ],
  [
    "Nas",
    "It drops deep as it does in my breath. I never sleep, 'cause sleep is the cousin of death. Beyond the walls of intelligence, life is defined. I think of crime when I'm in a 'New York' state of mind."
  ],
  [
    "Wu-Tang Clan",
    "I bomb atomically. Socrates' philosophies and hypotheses can't define how I be dropping these mockeries."
  ],
  [
    "Notorious B.I.G.",
    "It was all a dream. I used to read Word Up! magazine, Salt-n-Pepa and Heavy D up in the limousine. Hangin' pictures on my wall, every Saturday Rap Attack, Mr. Magic, Marley Marl."
  ],
  [
    "Outkast",
    "King meets queen, then the puppy love thing. Together dream 'bout that crib with the Goodyear swing on the oak tree. I hope we feel like this forever..."
  ],
  [
    "Outkast",
    "True, I got more fans than the average man, but not enough loot to last me to the end of the week. I live by the beat like you live check-to-check. If you don't move your feet then I don't eat, so we like neck-to-neck."
  ], 
  [
    "Eminem",
    "Now, who's the king of these rude, ludicrous, lucrative lyrics? Who could inherit the title; put the youth in hysterics? Using his music to steer it, sharing his views and his merits, but there's a huge interference: they're saying you shouldn't hear it!"
  ]

];



function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  //While there remains elements to shuffle
  while (currentIndex !== 0) {
    //Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const shuffledQuotes = shuffle(quotes);
const shuffledColors = shuffle(defaultColors);

export default App;
