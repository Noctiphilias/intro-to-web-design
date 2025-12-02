let sirius = document.getElementById('sirius');
let orion = document.getElementById('orion');
let andromeda = document.getElementById('andromeda');
let para = document.querySelector('p');
let hover = false;
let textcontent;


function textColor(){
    para.style.color = "rgb(19, 66, 89)";
    console.log('oh god no');

}
function textPink(){
        para.style.color = "rgba(240, 1, 180, 1)";

}
function textYellow(){
            para.style.color = "rgba(188, 240, 1, 1)";


}
function color(){
                para.style.color = '';
                para.textContent = "Stars fascinate the masses in both philosophical, mythological and astronomical ways. As they cycle through life, they create and distribute the elements that ultimately make planets and life possible. Philosophy sometimes defines them as related to human destiny and guidance, mythology with gods and worship, and astronomy in physics and academia. Primarily made of hydrogen and other elements, they shape life in existence. Their colors and brightness vary depending on their mass, age, and temperature, ranging from cool red dwarfs to blazing blue giants.";
}

function siriusClick(){
            textContent = "The Sirius star is a binary star connected to form Canis Major, and often is mythologically associated as a deity or celestial being in the form of a dog. Its main star,Sirius A, is paired with a white dwarf called Sirius B. It is currently the brightest star in the sky. In Greek mythology, this star was associated with bringing heatwaves in the summer, intensifying the Sun’s own heat. It was a symbol of bad luck. In Egyptian mythology, it's associated with Sopdet the goddess of rebirth and fertility, and the Nile flooding. In Roman Mythology, rituals were performed in an attempt to appeal to the star and protect theharvest. Universally, this star has been known as a guardian due to its connection to the dog constellation.";
    para.textContent = textContent;
}

function andromedaClick(){
            textContent = "In Greek mythology, Andromeda is a princess and daughter of King Cepheus and Queen Cassiopeia of Aethiopia. Cassiopeia boasted that her beauty surpassed that of the sea nymphs and enraged Poseidon, punishing the kingdom with a monstrous sea creature. To appease the gods, Andromeda was chained to a coastal rock as a sacrifice. When the monster arrived, Perseus, who returned from slaying Medusa, fell in love with her and defeated the beast using the power of Medusa’s head. Freed from doom, Andromeda married Perseus.";
            para.textContent = textContent;
}

function orionClick(){
                textContent = "Orion is one of the most recognizable and storied constellations in the night sky, almost visible from every inhabited part of the world. Another title it has is the Hunter. Orion stands out thanks to its bright, easily identifiable pattern: Orion’s Belt, made of brilliant supergiants Betelgeuse (a red star) and Rigel (a blue-white star). In mythology, Orion is paired with Sirius as a hunting dog and fell in love with the daughter of a king called Merope. However, after hurting Merope, the king blinded him. His death is often speculated to be by the scorpion constellation, artemis or killed in hunt.";
                        para.textContent = textContent;
}
sirius.addEventListener('mouseenter',textColor);
sirius.addEventListener('mouseleave',color);
sirius.addEventListener('click',siriusClick);

andromeda.addEventListener('mouseenter', textPink);
andromeda.addEventListener('mouseleave',color);
andromeda.addEventListener('click',andromedaClick);

orion.addEventListener('mouseenter', textYellow);
orion.addEventListener('mouseleave',color);
orion.addEventListener('click',orionClick);

