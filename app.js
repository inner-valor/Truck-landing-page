const x = [3,1,2,10,1];
let y = [];
let runningSum = [];
for(let i = 0; i < x.length; i++){
    y.push(x[i]);
    let value = y.reduce((acc, current) => acc + current);
    runningSum.push(value);
    console.log(runningSum, i);

}