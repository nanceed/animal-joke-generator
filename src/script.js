function generateJoke(event) {
  event.preventDefault();

  new Typewriter('#joke', {
    strings: "What do you call a lazy baby kangaroo?",
    autoStart: true,
    delay: 1,
    cursor: "",
   });
  
}

let jokeFormElement = document.querySelector("#animal-joke-generator");
jokeFormElement.addEventListener("submit", generateJoke);