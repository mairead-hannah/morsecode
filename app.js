const englishLetters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
const morseLetters = ["\xa0\xa0\xa0\xa0", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ];

const translate = () => {
  event.preventDefault(); //stops the page immediately refreshing
  const input = document.getElementById("text-input").value;
  let translatedText = ""; //needs to be a let not a const, so we can change it later
  for (let i = 0; i < input.length; i++) { //i represents the input?
    for (let j = 0; j < englishLetters.length; j++) {  //j represents the position in the array
      if (input[i].toLowerCase() == englishLetters[j]) { //This matches the input letter in position 'i' to it's equivalent in the english letters array - at position j
        translatedText += morseLetters[j]; //morse letters must be added to the translation
        translatedText += "\xa0\xa0\xa0"; //to have a break between letters (morse code requirement)
        break; //to stop the array iterating after finding it's initial resut.
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