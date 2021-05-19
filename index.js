/* same thing done with while loops
var  i = 0;
  while (i < document.querySelectorAll("button").length){
   document.querySelectorAll("button")[i].addEventListener("click", function() {
    alert ("kaif is the best")
});
i++

} */



//for selecting the html of button

for (i=0; i<document.querySelectorAll(".drum").length; i++){
 document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   var buttonIH = this.innerHTML;
   makeSound(buttonIH);
   buttonAnimation(buttonIH);
});
}

//for selecting keypad button

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

// sounds

function makeSound(key) {

  switch (key) {

    case "w":
    var crash = new Audio('sounds/crash.mp3');
   crash.play();
      break;

    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
     kick.play();
        break;
//wasdjkl
    case "s":
        var snare = new Audio('sounds/snare.mp3');
       snare.play();
          break;

    case "d":
       var tom1 = new Audio('sounds/tom-1.mp3');
     tom1.play();
        break;

     case "j":
        var tom2 = new Audio('sounds/tom-2.mp3');
       tom2.play();
          break;

     case "k":
        var tom3 = new Audio('sounds/tom-3.mp3');
       tom3.play();
          break;

     case "l":
         var tom4 = new Audio('sounds/tom-4.mp3');
       tom4.play();
       break;

    default:
         console.log(buttonIHT);
  }

}


// to understand keydown event listener
// document.addEventListener("keydown",function(){
//    if  (event.key == 'a'){
//        alert("you are awsome");
//    } else {
//        alert ("you are still awesome");
//    }
// });



function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    } , 100);
}
