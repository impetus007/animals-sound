let numberofButton = document.querySelectorAll("button").length;
for(let i=0;i<numberofButton;i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
       
        var buttoninnerHTML = this.innerHTML;
        

        switch(buttoninnerHTML){
            case "Giraffe" :
                var giraffe = new Audio("sound/Giraffe.mp3");
                 giraffe.play();

             break;
             case "elephant" :
                var elephant = new Audio("sound/elephant.mp3");
                elephant.play();

             break;
             case "fox" :
                var fox = new Audio("sound/fox.mp3");
                fox.play();

             break;
             case "tiger" :
                var tiger = new Audio("sound/tiger.mp3");
                tiger.play();

             break;
             case "gorilla" :
                var gorilla = new Audio("sound/gorilla.mp3");
                gorilla.play();

             break;
             
             
             default: console.log(buttoninnerHTML)
        }







    })
};