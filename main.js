// A string called story -  We want to gather some information about the individual words and sentences in this string. 

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';



//We want to gather some information about the individual words and sentences in the string "story". We will start by turning the string into an array.
let storyWords = story.split(' ');



//Logging .length to display a starting word count
console.log(`- Starting Word Count: ${storyWords.length} words`)
//Output: - Starting Word Count: 188 words



//A helper function to filter unnecessary and overused words. The text parameter is the array created from the original converted text. elementToFilter is an array that holds the pre-determined words deemed undesireable (ex: "uncessary" or "overused"). The boolean parameter is a true or false value that determines if each word from the text array should or should not be matched to words held in the elementToFilter array.
const wordCategories = (text, elementToFilter, boolean) => {
    return text.filter((word) => {
  if(elementToFilter.includes(word) === boolean) {
    return word
  }
 })
}



//Removing words deemed "unnecessary",using the .wordCategories() function. Pre-determined unnecessary words are stored in the unnecessaryWords array
let unnecessaryWords = ['extremely', 'literally', 'actually' ];



const betterWords = wordCategories(storyWords, unnecessaryWords, false);



//The .wordCategories() function is used to inform the user the number of times they used a word deemed "overused". The pre-determined overused words are held in the overusedWords array. The overused words are not being removed from the text, as per project instructions.
let overusedWords = ['really', 'very', 'basically'];



//Creating an array of overused words that were found in the story text
const overUsedWords = wordCategories(betterWords, overusedWords, true );



//The array.length of the previously returned array. The length is used as a word count (# of overused words)
const overUsedWordsCount = overUsedWords.length

console.log(`- Overused Word Count: ${ overUsedWordsCount}`);
//Output: - Overused Words Count: 8



//This object will hold a frequency table for each overused word.
const overUsedWordsObj = {};

overUsedWords.forEach((ele) => {
   if(overUsedWordsObj[ele]) { overUsedWordsObj[ele] += 1}
   else{overUsedWordsObj[ele] = 1}});

console.log(`- Your Overused Word Breakdown:`, overUsedWordsObj)
//Output: - Your Overused Word Breakdown: { really: 2, basically: 1, very: 5 }



//The filter method is being used to determine the number of sentences are in the text. All of the sentences in this text end with a period (.) or an exclamation mark (!) and are positioned as the last ndex in a word.
let sentenceCount = betterWords.filter((word) => { 
  let lastChar = word[word.length-1];
  if((word.includes('.') === true && lastChar === '.')|| (word.includes('!') === true && lastChar)) {
    return word
    };
}).length

console.log(`- Sentence Count: ${sentenceCount}`)
//Output: - Sentence Count: 12


//Logging the edited story
console.log(betterWords.join(' '))

