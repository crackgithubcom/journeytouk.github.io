
function readText(text) {
    const utterance = new SpeechSynthesisUtterance(text);

    // 尝试选择英语（英国）的男性语音
    const britishMaleVoice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-GB' && voice.gender === 'male');
    
    // 如果找到符合条件的语音，则设置为该语音；否则使用默认语音
    if (britishMaleVoice) {
        utterance.voice = britishMaleVoice;
    }

    speechSynthesis.speak(utterance);
}

// 在获取语音列表后再执行读取文本的操作
speechSynthesis.onvoiceschanged = () => {
    // Get all elements with the "readable" class
    const readableElements = document.querySelectorAll('.readable');

    // Add click event listener to each readable element
    readableElements.forEach(element => {
        element.addEventListener('click', () => {
            readText(element.innerText);
        });
    });
};



/*
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

*/