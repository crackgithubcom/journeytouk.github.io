// Function to read general text
function readText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

// Get all elements with the "readable" class
const readableElements = document.querySelectorAll('.readable');

// Add click event listener to each readable element
readableElements.forEach(element => {
    element.addEventListener('click', () => {
        readText(element.innerText);
    });
});
