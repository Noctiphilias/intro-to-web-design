//for the date variables

let today = new Date(); //for Date
let DOW = today.getDay(); //for Day of the Week
let logo = document.getElementById("logo"); //for the SVG
let text; 
let todayis = document.getElementById('#today');
console.log(DOW, logo);
let fill = "#a4f542";


//for the mode swapping 
let dark = false;
let modeImg = document.querySelector('#modeImg');
let background = document.querySelector('body');
let paragraph = document.querySelector('p');
let header = document.querySelector('h1');
//to modify the a tags in the list

const ul = document.getElementById('list');
let image;
let footerText = document.querySelector('footer');
// let links = document.querySelectorAll('#haslink');
//dark mode text color
let darkModeText = "#C4C4C4";
let darkModeBgColor = "#404040";

if(DOW == 0){
    text = "Today is Sunday";
}else if(DOW == 1){
        text = "Today is Monday";
}else if(DOW == 2){
    text = "Today is Tuesday. Its a class day.";
    logo.style.fill =  fill;
    header.style.color = fill;
}else if(DOW == 3){
text = "Today is Wednesday.";
}else if(DOW == 4){
    text = "Today is Thursday. Its a class day.";
    logo.style.fill =  fill;
    header.style.color = fill;

}else if(DOW == 5){
    text = "Today is Friday.";
}else if(DOW == 6){
text = "Today is Saturday.";
    logo.style.fill =  "#f542dd";
}

todayis.textContent = text;



function darkMode(){
        if(DOW == 2 || DOW == 4){
        logo.style.fill = fill;
        header.style.color = fill;

    }else{
        logo.style.fill = darkModeText;
        header.style.color = darkModeText;

    }
 
    //modifies text attributes
    footerText.style.color = darkModeText;
    todayis.style.color = darkModeText;
    // header.style.color = darkModeText;
    paragraph.style.color = darkModeText;
    ul.style.color = darkModeText;
    //modifies bg attribute
    background.style.backgroundColor = darkModeBgColor;
    //changes img attribute to sun and moon
    image = 'moon.png';
    // updates modeImg to img
    modeImg.src = image;
    dark = true;
}
function lightMode(){
    //resets the attributes
        footerText.style.color = darkModeText;

    todayis.style.color = '';
    // header.style.color = '';
    paragraph.style.color = '';
        footerText.style.color = '';

    background.style.backgroundColor = '';
    ul.style.color = '';

    if(DOW == 2 || DOW == 4){
        logo.style.fill = fill;
        header.style.color = fill;

    }else{
        logo.style.fill = '';
        header.style.color = '';

    }
    image = 'sun.png';
    modeImg.src = image;
    dark = false;

}
function swap(){
    if(dark == false){
        darkMode();
    }else{
        lightMode();
    }
}
modeImg.addEventListener('click', swap);