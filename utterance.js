// 判断当前设备是否可能存在发音问题  
function isPotentiallyBrokenDevice() {  
    // 这里只是一个简单的示例，实际情况可能需要更复杂的检测逻辑  
    // 例如，检查浏览器类型、版本、操作系统等  
    return window.speechSynthesis.getVoices().length === 0;  
}  
  
// 定义一个备用语音库（这里仅为示例，实际应用中可能需要更多语音）  
var fallbackVoices = [  
    new SpeechSynthesisVoice("Male US English"),  
    new SpeechSynthesisVoice("Female British English")  
];  
  
// 函数来读取文本  
function readText(text) {  
    // 创建 utterance 对象  
    const utterance = new SpeechSynthesisUtterance(text);  
      
    // 检查是否有可用的语音合成引擎  
    if (window.speechSynthesis && window.speechSynthesis.getVoices().length > 0) {  
        speechSynthesis.speak(utterance);  
    } else if (fallbackVoices.length > 0) { // 如果默认语音不可用，则使用备选语音  
        utterance.voice = fallbackVoices[0]; // 选择第一个备选语音  
        speechSynthesis.speak(utterance);  
    } else { // 如果所有语音都不可用，显示错误消息或采取其他行动  
        alert("无法进行语音合成。请检查您的设备和浏览器设置。");  
    }  
}  
  
// 获取所有带有 "readable" 类的元素  
const readableElements = document.querySelectorAll('.readable');  
  
// 为每个可读元素添加点击事件监听器  
readableElements.forEach(element => {  
    element.addEventListener('click', () => {  
        readText(element.innerText);  
    });  
});

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
