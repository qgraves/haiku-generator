function generateHaiku(array1, array2, array3) {
// Create a haiku variable
  haiku = 
  // Access random element of each array
  // Start a new line after each element
    array1[Math.floor(Math.random() * array1.length)] + 
    '\n' +
    array2[Math.floor(Math.random() * array2.length)] +
    '\n' +
    array3[Math.floor(Math.random() * array3.length)];
  
  // Return result
  return haiku;
}

var firstLine = 
  ["Since I have awoke,", 
  "I ate my best friend,",
  "A-ha! Imbecile,",
  "War-torn and weary,",
  "Awaken, O Lord,",
  "Thou dares to wake me,",
  "Degenerate fiend,",
  "Foul hound of the south,",
  "Feline miscreants,",
  "This fascist regime,"];

var secondLine = 
  ["keeping my sleeping lizard", 
  "chunky bottles of old milk",
  "battered and bruised bananas",
  "your sales pitch disrespectful",
  "lost betwixt the giggling fae;",
  "my trap card activated,",
  "holistic internet blogs",
  "suplexing the gender norms,",
  "realistic attitudes",
  "avoiding the noon-day sun"];

var thirdLine = 
  ["amongst the hedges.", 
  "fearing the old ways.",
  "distasteful results.",
  "Caesar disregards.",
  "in holy marriage.",
  "judged by the divines.",
  "ignore the haters.",
  "comics say: 'Check, please!'",
  "squatting on the can.",
  "I told my Gnome, 'Hush!'"];

var resultHaiku = generateHaiku(firstLine, secondLine, thirdLine);

console.log('Zer0 has written you a haiku:' + '\n');
console.log(resultHaiku);
