// let date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);

let dates = new Date(2021-12-23)
// console.log(dates.toDateString());

let time = Date.now()
// console.log(time);
// console.log(dates.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",

})