function displayJoke(response) {
  console.log("joke generated");
  new Typewriter('#joke', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
   });
}


function generateJoke(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0f09c464cb3936o320tabf9addd38da4";
  let prompt = `User instructions: Generate a unique joke about the animal that the user inputs ${instructionsInput.value}`;
  let context = "You are a funny AI Assitant who loves animals and like to write animal jokes. Please generate 10 jokes that the user inputs in basic HTML format. Example: <p>this is a joke</p> with bullet-points, and the questions will be inside a <strong> element, and separated by a <br /> element. Don't include a description in the beginning. Make sure to follow the user instructions below";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  console.log("Generating joke");

  axios.get(apiUrl).then(displayJoke); 
}

let jokeFormElement = document.querySelector("#animal-joke-generator");
jokeFormElement.addEventListener("submit", generateJoke);