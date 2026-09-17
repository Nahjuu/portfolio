import React, { useState } from 'react';
import { HiRefresh } from 'react-icons/hi';

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
];

const RandomQuote = () => {
  const [quote, setQuote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  );

  const generateRandomQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote.text === quote.text && quotes.length > 1);
    setQuote(newQuote);
  };

  return (
    <div className="cursor-default relative z-0 w-full md:w-[420px] flex flex-col items-center text-center">
      {/* Fixed height area so the layout doesn't jump with different quote lengths */}
      <div className="min-h-[200px] md:min-h-[220px] flex flex-col items-center justify-center">
        <p className="text-white text-lg md:text-2xl font-light leading-relaxed">
          "{quote.text}"
        </p>
        <p className="mt-4 text-sm md:text-base italic tracking-wide text-cyan-400/80">
          — {quote.author}
        </p>
      </div>

      {/* Centered button below */}
      <button
        onClick={generateRandomQuote}
        className="group mt-6 flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <HiRefresh
          size={18}
          className="group-hover:rotate-180 transition-transform duration-500"
        />
        <span className="text-sm font-medium">Generate Random Quote</span>
      </button>
    </div>
  );
};

export default RandomQuote;