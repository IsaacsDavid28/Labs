
function translate(word) {
    let pig = word.toLowerCase();
    let vowels = ['a','e','i','o','u'];
  let slicedArr = [];
  let newStr = '';

  if (vowels.indexOf(pig[0]) >= 0) { // First letter is a vowel, translate immediately
    return pig + 'way';
  }

  for (let i=0; i<pig.length; i++){
    if (vowels.indexOf(pig[i]) >= 0) { // Vowel
      return newStr + slicedArr.join("") + 'ay';
    } else { // Consonant
      // Keep slicing from string until you hit a vowel
      slicedArr.push(pig[i]);
      newStr = pig.slice(i+1);
    }
  }
}


module.exports = {translate}