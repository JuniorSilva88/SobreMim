'use strict'

const switcher = document.querySelector('btn');

switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')

    var classeName = document.body.className;
    if(classeName == "ligth-theme"){
        this.textContent ="Dark";
    }
    else {
        this.textContent = "ligth";
    } 
    console.log('currnte class name: ' + classeName);
});