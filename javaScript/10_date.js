// The JavaScript date object can be used to get year, month and day. You can display a timer on the webpage by the help of JavaScript date object.

var date=new Date();  
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();  
console.log("Date is: "+day+"/"+month+"/"+year);  