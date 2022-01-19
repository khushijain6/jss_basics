const btn=document.getElementById('btn');

// console.dir(btn);

// function fun(){
//     console.log('Inside fun');
// }
// btn.onclick = fun();
// console.dir(btn);

// you can also write anonymous function
/*btn.onclick = function() {
    console.log('Anonymous function');
}*/
//one issue with this onclick prop --> cannot execute more than one function
// but thera can be an event where we want to run more than one event 
// For that we have 'event listerner'

function scream() {
    console.log('SCREAM....');
}

function shout() {
    console.log('SHOUT....');
}

btn.addEventListener('click' , scream);
btn.addEventListener('click' , shout);


//loop over all the buttons
for(let button of buttons){
    button.addEventListener('mouseenter',(e) => {
        console.log(e);
        console.log(e.targe);
    })
    button.addEventListener('mouseleave',(e) => {
        console.log(e);
        console.log(e.targe);
    })
}
// mouseleave part of mouse events
//  ---------------Keyboard events-----------------

constinp=document.getElementById('inp');
InputEvent.addEventListener('keypress', ()=. {
    console.log('Key Pressed');
})


//----------------------form events--------------
const form=document.querySelector('form');

form.addEventListener('submit',(e) => {
    //prevent the form to refresh the page by default
    e.preventDefault();
    console.log('form submitted');

})


//----------------other events----------
const p=document.querySelector('p');
p.addEventListener('copy', () => {
    alert('Stop copying');
})