function readText(text) {
    const utterance = new SpeechSynthesisUtterance(text);

    // 为了在 iPhone 上工作，可能需要设置语言为 'en-US' 或其他支持的语言
    utterance.lang = 'en-AU';

    // 在 iPhone 上，尝试选择支持的语音（例如 Siri 的语音）
    const iosVoice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-AU');
    
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

/*
// 获取所有的语音合成器声音  
const voices = speechSynthesis.getVoices();  
  
// 遍历所有的语音，找到第一个男性声音  
for (let i = 0; i < voices.length; i++) {  
    if (voices[i].gender === 'male') {  
        break;  
    }  
}  
  
// 函数来读取文本，并使用男性声音朗读  
function readText(text) {  
    const utterance = new SpeechSynthesisUtterance(text);  
    utterance.voice = voices[i]; // 使用找到的男性声音  
    speechSynthesis.speak(utterance);  
}  
  
// 获取所有带有 "readable" 类的元素  
const readableElements = document.querySelectorAll('.readable');  
  
// 为每个可读元素添加点击事件监听器  
readableElements.forEach(element => {  
    element.addEventListener('click', () => {  
        readText(element.innerText);  
    });  
});
*/