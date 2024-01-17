/*
function readText(text) {
    const utterance = new SpeechSynthesisUtterance(text);

    // 为了在 iPhone 上工作，可能需要设置语言为 'en-US' 或其他支持的语言
    utterance.lang = 'en-US';

    // 在 iPhone 上，尝试选择支持的语音（例如 Siri 的语音）
    const iosVoice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US');
    
    if (iosVoice) {
        utterance.voice = iosVoice;
    }

    // 在 IE 上，SpeechSynthesisUtterance 不支持 'voice' 属性
    if (window.speechSynthesis.speak !== undefined) {
        speechSynthesis.speak(utterance);
    } else {
        // 在 IE 上使用其他兼容的方法来朗读文本
        // 例如可以使用 <speak> 标签
        // 注意：这是一种不同的方法，可能需要根据具体情况进一步调整
        var speakElement = document.createElement('speak');
        speakElement.innerText = text;
        document.body.appendChild(speakElement);
        speakElement.click();  // 触发朗读
        document.body.removeChild(speakElement);
    }
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

*/



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
