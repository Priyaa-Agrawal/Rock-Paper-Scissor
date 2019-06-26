
var cScore=0;
var pScore=0;

     function update(){
            
        const player = document.querySelector("body > section > div.score > div.player > p");
        const computer = document.querySelector("body > section > div.score > div.computer > p");
        
        player.textContent = pScore;
        computer.textContent = cScore; 
    }; 
    

     function compare(choice1,choice2){
        const win = document.querySelector('.choice');

            if (choice1 === choice2) {
                win.textContent = "It's a tie!";
                 return;
            }
            if (choice1 === "rock") {
                if (choice2 === "scissor") {
                    win.textContent = "You win!";
                    pScore++;
                    update();
                    return;
                } else {
                    win.textContent = "You lose! Try again.";
                    cScore++;
                    update();
                    return;
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    win.textContent = "You win!";
                    pScore++;
                    update();
                    return;
                } else {
                    win.textContent = "You lose! Try again.";
                    cScore++;
                    update();
                    return;
                }
            }
            if (choice1 === "scissor") {
                if (choice2 === "rock") {
                    win.textContent = "You lose! Try again.";
                    cScore++;
                    update();
                    return;
                } else {
                    win.textContent = "You win!";
                    pScore++;
                    update();
                    return;
                }
            }
    };

function playMatch(option){
    const chand  = document.querySelector(".c-hand");
    const cchoice = ["rock","paper","scissor"];

    const computerNumber = Math.floor(Math.random() *3);
    const  coption = cchoice[computerNumber];

     if (coption == "rock") 
             chand.src = './image/rock.jpg';
       else if(coption == "paper") 
             chand.src = './image/paper.jpg';
        else
            chand.src = './image/scissor.jpg';
        console.log(option);
        console.log(coption);
        
        compare(option,coption);    
    }

function paper(){
    const phand  = document.querySelector(".p-hand");
    phand.src = './image/paper.jpg';
    var option='paper';
    playMatch(option);

}
function rock(){
    const phand  = document.querySelector(".p-hand");
    phand.src = './image/rock.jpg';
    var option='rock';
    playMatch(option);

}
function scissor(){
     const phand  = document.querySelector(".p-hand");
    phand.src = './image/scissor.jpg';
    var option='scissor';
    playMatch(option);

}
function fade(){
        const descScreen = document.querySelector(".desc");
        const match = document.querySelector(".match"); 
              descScreen.classList.add("fadeOut");
              match.classList.add("fadeIn");   
}