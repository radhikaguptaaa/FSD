function fetchdata(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            const students = [
                {name : "Alice" , score: 50},
                {name : "Bobe" , score: 52},
                {name : "Charie" , score: 80},


            ];
            resolve(students);
        } , 4000);
  
    });
}
fetchdata().then((data) => {
    let sum = 0;
    data.forEach((element) => {
        sum += element.score;
    });
    console.log(sum);
})
.catch((error) => {
    console.log(error);
});