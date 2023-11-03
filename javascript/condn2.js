//falsey values
//false, 0, -0, BigInt, "", null, undefined, NaN
//else are truthy values
//"0", 'false', "", [], {}, functional(){}

const userEmail=[]
if(userEmail.length===0){  //Array checking
    console.log("Empty");
}

const Obj={} 
if(Object.keys(Obj).length===0){   //Object checking
    console.log("Object is empty");
}