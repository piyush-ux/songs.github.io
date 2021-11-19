var left_cover = document.getElementById("left-cover");
var left_form = document.getElementById("left-form");

var right_cover = document.getElementById("right-cover");
var right_form = document.getElementById("right-form");

function switchSignup() {
    right_form.classList.add("fade-in-element");
    left_cover.classList.add("fade-in-element");
    console.log("hellow");
    left_form.classList.add("form-hide");
    left_cover.classList.remove("cover-hide");
    right_cover.classList.add("cover-hide");
    right_form.classList.remove("form-hide");
}

function validateform(){  
    console.log("hellow");
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }  