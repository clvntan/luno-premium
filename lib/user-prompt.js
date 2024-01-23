// Import the prompt-sync library to enable synchronous user input.
import promptSync from "prompt-sync";

const prompt = promptSync(); // Create a synchronous prompt function using prompt-sync.

///Function to asynchronously get user input for a cryptocurrency name.
export async function getCryptoData() {
  const userInput = prompt("Enter cryptocurrency name:").toUpperCase(); // Prompt the user to enter a cryptocurrency name and convert it to uppercase.
  return userInput; //Return the user input.
}
//console.log(userInput)