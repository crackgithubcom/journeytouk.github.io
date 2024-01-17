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


