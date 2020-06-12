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


