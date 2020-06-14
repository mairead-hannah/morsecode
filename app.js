const englishLetters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
const morseLetters = ["\xa0\xa0\xa0\xa0", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ];

const translate = () => {
  event.preventDefault(); //stops the page immediately refreshing
  const input = document.getElementById("text-input").value;
  let translatedText = ""; //needs to be a let not a const, so we can change it later
  for (let i = 0; i < input.length; i++) { //i represents the input?
    for (let j = 0; j < 37; j++) {  //j represents the englishLetters array?
      if (input[i].toLowerCase() == englishLetters[j]) { //I think this is matching the input letters to the array of English letters
        translatedText += morseLetters[j]; //morse letters must be added to the translation
        // translatedText += "\xa0\xa0\xa0"; //not sure this line is necessary
        // break; //also not sure if this line is needed
      }
    }
  }
//Inserts text into the paragraph below 'submit'
document.getElementById("translation-result").innerHTML = translatedText;
}

//Event listener for submit button
document.getElementsByTagName('button')[0].addEventListener("click", translate);












//----------------the following bits do work:---------------------------------------
//Inserts text into the paragraph below 'submit'
//currently inserts exactly the same as the user typed in
//need to replace input with the conversion, ie: .innerHTML = translation function;
// const onClick = () => {
//   event.preventDefault();
//   const input = document.getElementById("text-input").value;
//   document.getElementById("translation-result").innerHTML = input;
// }

// //Event listener for submit button
// document.getElementsByTagName('button')[0].addEventListener("click", onClick);

// //Event listener for submit button (the long form)
// const submitButton = document.getElementsByTagName('button')[0];
// submitButton.addEventListener("click", onClick);