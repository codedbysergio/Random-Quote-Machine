import React from 'react'

export default function Twitter({ quotes, number}) {

  function handleClickTwitter() {
    const twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22"
    const quoteToTweet = quotes[number][1] + "%22" + " -" + quotes[number][0];
    const tweetQuote = twitterLink + quoteToTweet
    window.open(tweetQuote, '_blank')
  }
  return (
    <a 
      className="button" 
      id="tweet-quote" 
      title="Tweet this Quote!"
      href="twitter.com/intent/tweet"
      onClick={() => handleClickTwitter()}
    >
          <i className="fa-brands fa-twitter"></i>
    </a>
  )
}
