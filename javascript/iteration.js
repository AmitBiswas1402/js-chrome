for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element==7){
        console.log("7 is best number");
        continue
    }
    console.log(element);   
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);  
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop: ${i}`);
        // console.log(i+'*'+j+'='+i*j);
    }    
}

let MCU=["Iron Man", "Captain America", "Thor", "Hulk", "Balck Widow", "Hawkeye"]
// console.log(MCU.length);
for (let index = 0; index < MCU.length; index++) {
    const element = MCU[index];
    // console.log(element);    
}