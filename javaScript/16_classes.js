//Declaring class  
class client  
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
//Declaring method  
    detail()  
    {  
  document.writeln(this.id+" "+this.name+"<br>")  
    }  
  }  
//passing object to a variable   
var c1=new Employee(101,"sardar uzair");  
var c2=new Employee(102,"sardar ubaid");  
c1.detail(); //calling method  
c2.detail();  