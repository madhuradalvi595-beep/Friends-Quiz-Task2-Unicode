const arr = [
{
questions : "How many times did Ross get divorced?",
image:null,
options : ["1 time","2 times","3 times","4 times"],
answer : "3 times"
},
{
questions : "What was the occupation of Rachel's fiancé, Barry Farber?",
image:null,
options : ["Orthodontist","Surgeon","Engineer","Opthamologist"],
answer : "Orthodontist"   
},
{
questions : "Who lost the ring Ross was going to use for the wedding between Ross and Emily?",
image:null,
options : ["Phoebe","Chandler","Joey","Monica"],
answer : "Joey"    
},
{
questions : "What store does Phoebe hate?",
image:null,
options : ["IKEA","Pottery Barn","Bloomingdale's","Macy's"],
answer : "Pottery Barn"   
},
{
questions : "Rachel got a job with which company in Paris?",
image:null,
options : ["Prada","Louis Vuitton","Gucci","Chanel"],
answer : "Louis Vuitton" 
},
{
questions : "Guess the character",
image:"chandler-bing.jpg",
options : ["Ross","Joey","Mike","Chandler"],
answer : "Chandler" 
},
{
questions : "What is the name of Phoebe's twin sister?",
image:null,
options : ["Janice","Monica","Emily","Ursula"],
answer : "Ursula" 
}
]
let currQuestion = 0;
let points = 0;
let ans = false;
let score = document.querySelector(".score");
let track = document.querySelector(".trackq");
let img = document.querySelector(".characterImage");
let t = document.querySelector(".text");
let o1 = document.querySelector(".o1");
let o2 = document.querySelector(".o2");
let o3 = document.querySelector(".o3");
let o4 = document.querySelector(".o4");
let n = document.querySelector(".nxt");
let progress = document.querySelector(".progress");
let optionButton = [o1,o2,o3,o4];

let welcomeScreen = document.querySelector(".main");
let quizScreen = document.querySelector(".main2");
let resultScreen = document.querySelector(".show");

document.querySelector(".start").addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  quizScreen.style.display = "flex";
});

n.addEventListener("click", (e) => {
    if(!ans){
 document.querySelector(".popup").classList.add("appear");
setTimeout(()=>{
  document.querySelector(".popup").classList.remove("appear");
}, 2000);  
return;
  }
  if (currQuestion === arr.length - 1) {
    quizScreen.style.display = "none";
    resultScreen.style.display = "flex";
    showScore();
    updateComments();
  } else {
    currQuestion++;
    displayQuestions();
  }
});

function displayQuestions(){
    ans = false;
for (let j of optionButton) {
    j.classList.remove("correct");
    j.classList.remove("wrong");
    j.classList.remove("disabled");
}
t.innerText = "Question : " + arr[currQuestion].questions;
if(currQuestion === 6){
    img.classList.add("active");
    t.innerText = arr[currQuestion].questions;
}
if (arr[currQuestion].image) {
    img.src = arr[currQuestion].image;
    img.classList.add("active");
}
else{
    img.classList.remove("active");
}
if(currQuestion === 6){
    n.innerText = "Check Score";
}
o1.innerText = arr[currQuestion].options[0];
o2.innerText = arr[currQuestion].options[1];
o3.innerText = arr[currQuestion].options[2];
o4.innerText = arr[currQuestion].options[3];
track.innerText = "Question" + " " + (currQuestion + 1) + " " + "of  7 ";
progress.style.width = (currQuestion / arr.length) * 100 + "%";
}

function checkAns(){
for(let i of optionButton){  
    i.addEventListener("click",()=>{
        ans = true;
          for (let j of optionButton) {
                j.classList.add("disabled");
            }
    if(i.innerText === arr[currQuestion].answer){
        points++;
        score.innerText = "Score : " + (points);
        i.classList.add("correct");
    }
    else{
        i.classList.add("wrong");
          for (let j of optionButton) {
                    if (j.innerText === arr[currQuestion].answer) {
                       j.classList.add("correct");
                    }
          }
    }
    progress.style.width = ((currQuestion+1)/arr.length) * 100 + "%";
});
}
}

let finalscore = document.querySelector(".num");
function showScore(){
finalscore.innerText = points + "/" + "7";
}

let comment = document.querySelector(".com");
function updateComments(){
    if(points >= 0 && points <= 2){
       comment.innerText = "Were you even watching? Time for a rewatch marathon";
    }
    else if(points===3 || points === 4){
    comment.innerText = "Ross would not approve";
    }
    else if(points === 5){
    comment.innerText = "Solid Friends knowledge, but Chandler would still have a comment about a couple of those.";
    }
    else if(points === 6){
        comment.innerText = "So close to perfect. Joey would still be proud.";
    }
    else if(points === 7){
        comment.innerText = "How you doing with that score?";
    }
}

function restartQuiz() {
  currQuestion = 0;
  points = 0;
  score.textContent = "Score : 0";
  progress.style.width = "0%";
  n.innerText = "Next Question";
   resultScreen.style.display = "none";
  quizScreen.style.display = "none";      
  welcomeScreen.style.display = "block"; 
  displayQuestions();
}

document.querySelector('.restart').addEventListener('click', restartQuiz);
displayQuestions();
checkAns();