//we have a promise class. Classes ke liye new keyword use hota h
const x=new Promise(function(resolve,reject) {
    //resolve and reject in itself are af function
    //successfull task -> resolve mei jata h
    //agr task is not done -> reject function work 
    let randomNumber = Math.random();
    console.log(randomNumber);
    if(randomNumber < 0.5){
        console.log('Promise resolved');
        resolve();
    }
    else{
        console.log('Promise Rejected');
        reject();
    }
});

//syntax of promise above
// .then accepts one function which is resolve function
x.then(function (){
    console.log('Inside resolve');
    })
    .catch(function (){
        console.log('Inside Reject');
    })
// below code will show output after 2sec
/* const x=new Promise(function(resolve,reject) {
    setTimeout(() => {
        let randomNumber = Math.random();
        console.log(randomNumber);
        if(randomNumber < 0.5){
            console.log('Promise resolved');
            resolve();
        }
        else{
            console.log('Promise Rejected');
            reject();
        }
    },2000);
    
}); */

//promise can have different state : fullfilled,pendingreject
