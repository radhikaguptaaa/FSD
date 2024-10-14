// let a =() => {
//     console.log("Arrow Function");

// }
// let  b =()=>console.log("Arrow Function 2 ");
// b();
// a();
// let c =(x,y)=>{
//     return x+y ;
// }
// let ans =c(10 , 5);
// let res = c("Rahul" , "Rai");
// console.log(res);
// console.log(ans);

function display(){
    let p1 = document.querySelectorAll("p");
    p1[0].innerHTML = "I am in parra";
    p1[0].style.backgroundColor = "red";
    p1[1].innerHTML = "I am in parra2";
    p1[1].style.backgroundColor = "green";
};
let changeHeader = () => {
    let head1 = document.querySelector("h1");
    
    head1.textContent = "Hellooooooo";
    let a1 = document.querySelector('a');
    a1.setAttribute("href", "https://aktu.ac.in");
    a1.innerHTML ="AKTU Website";
};
let addcontent =() =>{
    const newDiv = document.createElement("div");
    newDiv.textContent ="This is a new Div";
    const body = document.querySelector('body');
   body.appendChild(newDiv);

};