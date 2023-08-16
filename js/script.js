const textArea = document.getElementById('input-text');
const bold = document.getElementById('bold');
const italic = document.getElementById('italic');
const underline = document.getElementById('underline');
const left = document.getElementById('left');
const center = document.getElementById('center');
const right = document.getElementById('right');
const justify = document.getElementById('justify');
const fontSize = document.getElementById('font-size');
const fontName = document.getElementById('font-name');
const fontColor = document.getElementById('color-change');


//Bold click
bold.addEventListener('click', function(){
    if(textArea.style.fontWeight !== 'bold'){
        textArea.style.fontWeight = 'bold';
    } else {
        textArea.style.fontWeight = 'normal';
    }
})

//Italic click
italic.addEventListener('click', function(){
    if(textArea.style.fontStyle !== 'italic'){
        textArea.style.fontStyle = 'italic';
    } else {
        textArea.style.fontStyle = 'normal';
    }
})

//Underline click
underline.addEventListener('click', function(){
    if(textArea.style.textDecoration !== 'underline'){
        textArea.style.textDecoration = 'underline';
    } else {
        textArea.style.textDecoration = 'none';
    }
})

//Left click
left.addEventListener('click', function(){
    textArea.style.textAlign = 'left';
})

//Center click
center.addEventListener('click', function(){
    textArea.style.textAlign = 'center';
})

//Right click
right.addEventListener('click', function(){
    textArea.style.textAlign = 'right';
})

//Justify click 
justify.addEventListener('click', function(){
    textArea.style.textAlign = 'justify';
})

//Font Size click
fontSize.addEventListener('click', function(){
    textArea.style.fontSize = fontSize.value;

})

//Font Name click
fontName.addEventListener('click', function(){
    textArea.style.fontFamily = fontName.value;
})

//Font Color change
fontColor.addEventListener('change', function(){
    textArea.style.color = fontColor.value;
})
