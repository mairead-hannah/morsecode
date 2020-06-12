//Inserts text into the paragraph below 'submit'
//currently inserts exactly the same as the user typed in
//need to replace input with the conversion, ie: .innerHTML = translation function;
const onClick = (event) => {
  event.preventDefault();
  const input = document.getElementById("text-input").value;
  document.getElementById("translation-result").innerHTML = input;
}

//Event listener for submit button
document.getElementsByTagName('button')[0].addEventListener("click", onClick);

// //Event listener for submit button (the long form)
// const submitButton = document.getElementsByTagName('button')[0];
// submitButton.addEventListener("click", onClick);


const englishLetters = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
const morseLetters = [ "\xa0\xa0\xa0\xa0", ". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .",  "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___" ];

const translate = () => {
  const input = document.getElementById("text-input").value;
  const translatedText = "";
  for (const i = 0; i < input.length; i++) {
    for (const j = 0; j < 37; j++) {
      if (input[i].toLowerCase() == letters[j]) {
        translatedText += morseLetters[j];
        translatedText += "\xa0\xa0\xa0";

        break;
      }
    }
  }
}