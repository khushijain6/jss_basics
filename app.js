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
// mouseleave