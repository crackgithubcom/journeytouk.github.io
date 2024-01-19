/*
function readTextWithAssistiveReading(text) {  
    // 创建辅助功能元素  
    const assistiveText = document.createElement('div');  
    assistiveText.setAttribute('role', 'text');  
    assistiveText.innerText = text;  
  
    // 获取辅助功能元素并触发朗读  
    const assistiveReader = UIAccessibility.getAssistiveReadingSystem();  
    assistiveReader.readElement(assistiveText);  
}  
  
// 获取所有带有 "readable" 类的元素  
const readableElements = document.querySelectorAll('.readable');  
  
// 为每个可读元素添加点击事件监听器  
readableElements.forEach(element => {  
    element.addEventListener('click', () => {  
        readTextWithAssistiveReading(element.innerText);  
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

