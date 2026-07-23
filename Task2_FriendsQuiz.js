const arr = {
  Rachel: [
    { questions: "What is Rachel's last name?", image: null,
      options: ["Green", "Geller", "Bing", "Buffay"], answer: "Green" },
    { questions: "Who did Rachel leave at the altar in the pilot episode?", image: null,
      options: ["Ross Geller", "Barry Farber", "Joshua", "Tag Jones"], answer: "Barry Farber" },
    { questions: "Rachel got a job with which company in Paris?", image: null,
      options: ["Prada", "Louis Vuitton", "Gucci", "Chanel"], answer: "Louis Vuitton" },
    { questions: "What is the name of Rachel's daughter?", image: null,
      options: ["Emma", "Erica", "Emily", "Ellie"], answer: "Emma" },
    { questions: "Which fashion brand does Rachel work for in New York before Paris?", image: null,
      options: ["Ralph Lauren", "Calvin Klein", "Bloomingdale's", "Versace"], answer: "Ralph Lauren" },
    { questions: "Guess who this is:", image: "gunther.jpg",
      options: ["Gunther", "Mr. Heckles", "Eddie", "Doug"], answer: "Gunther" }
  ],
  Monica: [
    { questions: "What is Monica's profession?", image: null,
      options: ["Chef", "Waitress", "Fashion buyer", "Teacher"], answer: "Chef" },
    { questions: "Guess who is this?", image: "richard.jpg",
      options: ["Richard Burke", "Pete Becker", "Dr. Green", "Bob"], answer: "Richard Burke" },
    { questions: "Monica is famously known for being extremely...", image: null,
      options: ["Competitive and neat", "Lazy", "Careless", "Forgetful"], answer: "Competitive and neat" },
    { questions: "What was Monica's childhood nickname?", image: null,
      options: ["Fat Monica", "Big Mon", "Chubby Chandler", "Little Mon"], answer: "Fat Monica" },
    { questions: "What trophy does Monica fiercely guard every Thanksgiving?", image: null,
      options: ["The Geller Cup", "The Turkey Trophy", "The Friends Cup", "The Golden Fork"], answer: "The Geller Cup" },
    { questions: "What is the name of the restaurant where Monica works as head chef?", image: null,
      options: ["Javu", "Alessandro's", "Central Perk", "Moondance Diner"], answer: "Javu" }
  ],
  Phoebe: [
    { questions: "What is Phoebe's profession?", image: null,
      options: ["Masseuse", "Chef", "Waitress", "Paleontologist"], answer: "Masseuse" },
    { questions: "What is the name of Phoebe's twin sister?", image: null,
      options: ["Ursula", "Janice", "Emily", "Carol"], answer: "Ursula" },
    { questions: "What instrument does Phoebe play at Central Perk?", image: null,
      options: ["Guitar", "Piano", "Violin", "Drums"], answer: "Guitar" },
    { questions: "Guess Who is this?", image: "mike.jpg",
      options: ["Mike Hannigan", "David", "Gary the Cop", "Duncan"], answer: "Mike Hannigan" },
    { questions: "Before living with Monica, Phoebe used to...", image: null,
      options: ["Live on the streets", "Live in London", "Live with Ross", "Live in Paris"], answer: "Live on the streets" },
    { questions: "Who does Phoebe eventually marry?", image: null,
      options: ["Mike Hannigan", "David", "Gary", "Duncan"], answer: "Mike Hannigan" }
  ],
  Joey: [
    { questions: "What is Joey's profession?", image: null,
      options: ["Actor", "Chef", "Musician", "Doctor"], answer: "Actor" },
    { questions: "What soap opera character does Joey famously play?", image: null,
      options: ["Dr. Drake Ramoray", "Dr. Ross Geller", "Dr. Joey Tribbiani", "Dr. Chandler Bing"], answer: "Dr. Drake Ramoray" },
    { questions: "What is Joey's famous catchphrase?", image: null,
      options: ["How you doin'?", "Could I BE any cooler?", "We were on a break!", "Pivot!"], answer: "How you doin'?" },
    { questions: "What does Joey love more than almost anything else?", image: null,
      options: ["Food", "Money", "Fame", "Sleep"], answer: "Food" },
    { questions: "What is the name of Joey's stuffed penguin?", image: "images.jpg",
      options: ["Hugsy", "Waddles", "Pingu", "Mr. Flippers"], answer: "Hugsy" },
    { questions: "What does Joey famously refuse to do with his food?", image: null,
      options: ["Share it", "Cook it", "Order it", "Pay for it"], answer: "Share it" }
  ],
  Chandler: [
    { questions: "Chandler's job is famously hard to describe because it involves...", image: null,
      options: ["Statistical analysis and data reconfiguration", "Teaching", "Cooking", "Acting"], answer: "Statistical analysis and data reconfiguration" },
    { questions: "Chandler is best known among the group for his...", image: null,
      options: ["Sarcasm and humor", "Cooking skills", "Athleticism", "Fashion sense"], answer: "Sarcasm and humor" },
    { questions: "Who does Chandler marry?", image: null,
      options: ["Monica", "Rachel", "Phoebe", "Janice"], answer: "Monica" },
    { questions: "What is unique about Chandler's father?", image: null,
      options: ["He's a drag performer in Vegas", "He's a paleontologist", "He's a chef", "He's a firefighter"], answer: "He's a drag performer in Vegas" },
    { questions: "Who is Chandler's roommate before he marries Monica?", image: null,
      options: ["Joey", "Ross", "Mike", "Gunther"], answer: "Joey" },
    { questions: "This scene is famous for which line?", image: "couch.jpg",
      options: ["Pivot!", "We were on a break!", "How you doin'?", "Could this BE any harder?"], answer: "Pivot!" }
  ],
  Ross: [
    { questions: "What is Ross's profession?", image: null,
      options: ["Paleontologist", "Chef", "Actor", "Masseuse"], answer: "Paleontologist" },
    { questions: "How many times has Ross been divorced?", image: null,
      options: ["1 time", "2 times", "3 times", "4 times"], answer: "3 times" },
    { questions: "What is Ross's famous catchphrase when he's upset about his relationship?", image: null,
      options: ["We were on a break!", "How you doin'?", "Could I BE any sadder?", "Pivot!"], answer: "We were on a break!" },
    { questions: "What was the name of Ross's pet monkey?", image: null,
      options: ["Marcel", "Chi-Chi", "Fozzie", "Bandit"], answer: "Marcel" },
    { questions: "What is the name of Ross's son with Carol?", image: null,
      options: ["Ben", "Emma", "Jack", "Frank Jr."], answer: "Ben" },
    { questions: "Guess who this is:", image: "emily.jpg",
      options: ["Emily", "Julie", "Janice", "Kathy"], answer: "Emily" }
  ]
};
const arr2 = {
Rachel: {
    low: "Oh. My. God. Did you even watch the show?",
    mid: "It's like all your answers were... inside out. Not bad though!",
    high: "Now it's officially official - you totally know your Rachel trivia!"
  },
  Monica: {
    low: "I need this quiz redone. RIGHT NOW.",
    mid: "Not perfect, but I'll allow it... just this once.",
    high: "Rules! I like rules! And you followed them perfectly!"
  },
  Phoebe: {
    low: "That was very... not Smelly Cat of you.",
    mid: "Regina Phalange says you did okay, sweetie!",
    high: "You're like, a total quiz wizard, that's so cool!"
  },
  Joey: {
    low: "Joey doesn't share food, and apparently doesn't share great quiz scores either.",
    mid: "Not bad! How YOU doin' with that score?",
    high: "Whoa! Could YOU BE any smarter? Great job!"
  },
  Chandler: {
    low: "Could this score BE any lower?",
    mid: "Not bad. I'm not usually great with feelings, or compliments, but... nice work.",
    high: "Wow, that's actually impressive. Could I BE any prouder?"
  },
  Ross: {
    low: "We were on a break from good answers, apparently.",
    mid: "Not bad, but Rachel would've laughed at a couple of those.",
    high: "PIVOT! Straight into a perfect score!"
  }
};
let selectedCharacter = null;
let arr3 = [];
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
let optionButton = [o1, o2, o3, o4];
let welcomeScreen = document.querySelector(".main");
let quizScreen = document.querySelector(".main2");
let resultScreen = document.querySelector(".show");
let start = document.querySelector(".start")
//character screen
let fc = document.querySelectorAll(".friend-card");
let names = ["Rachel", "Monica", "Phoebe", "Joey", "Chandler", "Ross"];
for(let i = 0; i < fc.length; i++){
    fc[i].addEventListener("click", () => {
        for(let c of fc){
            c.classList.remove("selected");
        }
        fc[i].classList.add("selected");
        selectedCharacter = names[i];
        start.disabled = false;
    });
}
start.addEventListener("click", () => {
  if (!selectedCharacter) return;
  arr3 = arr[selectedCharacter];
  currQuestion = 0;
  points = 0;
  score.innerText = "Score : 0";
  progress.style.width = "0%";
  n.innerText = "Next Question";
  welcomeScreen.style.display = "none";
  quizScreen.style.display = "flex";
  displayQuestions();
});
n.addEventListener("click", (e) => {
    if (!ans) {
        document.querySelector(".popup").classList.add("appear");
        setTimeout(() => {
            document.querySelector(".popup").classList.remove("appear");
        }, 2000);
        return;
    }
    if (currQuestion === arr3.length - 1) {
        quizScreen.style.display = "none";
        resultScreen.style.display = "flex";
        showScore();
        updateComments();
    } else {
        currQuestion++;
        displayQuestions();
    }
});
function displayQuestions() {
    ans = false;
    for (let j of optionButton) {
        j.classList.remove("correct");
        j.classList.remove("wrong");
        j.classList.remove("disabled");
    }
    t.innerText = "Question : " + arr3[currQuestion].questions;
    if (arr3[currQuestion].image) {
        img.src = arr3[currQuestion].image;
        img.classList.add("active");
    }
    else {
        img.classList.remove("active");
    }
    if (currQuestion === arr3.length - 1) {
        n.innerText = "Check Score";
    }
    o1.innerText = arr3[currQuestion].options[0];
    o2.innerText = arr3[currQuestion].options[1];
    o3.innerText = arr3[currQuestion].options[2];
    o4.innerText = arr3[currQuestion].options[3];
    track.innerText = "Question" + " " + (currQuestion + 1) + " " + "of " + arr3.length + " ";
    progress.style.width = (currQuestion / arr3.length) * 100 + "%";
}
function checkAns() {
    for (let i of optionButton) {
        i.addEventListener("click", () => {
            ans = true;
            for (let j of optionButton) {
                j.classList.add("disabled");
            }
            if (i.innerText === arr3[currQuestion].answer) {
                points++;
                score.innerText = "Score : " + (points);
                i.classList.add("correct");
            }
            else {
                i.classList.add("wrong");
                for (let j of optionButton) {
                    if (j.innerText === arr3[currQuestion].answer) {
                        j.classList.add("correct");
                    }
                }
            }
            progress.style.width = ((currQuestion + 1) / arr3.length) * 100 + "%";
        });
    }
}
let finalscore = document.querySelector(".num");
function showScore() {
    finalscore.innerText = points + "/" + arr3.length;
}
let comment = document.querySelector(".com");
function updateComments(){
let set = arr2[selectedCharacter];
if(points >= 0 && points <= 2){
comment.innerText = set.low;
}
else if(points === 3 || points === 4){
comment.innerText = set.mid;
}
else{
comment.innerText = set.high;
}
}
function restartQuiz() {
    currQuestion = 0;
    points = 0;
    selectedCharacter = null;
    arr3 = [];
    score.textContent = "Score : 0";
    progress.style.width = "0%";
    n.innerText = "Next Question";
    resultScreen.style.display = "none";
    quizScreen.style.display = "none";
    welcomeScreen.style.display = "flex";
    start.disabled = true;
    for (let c of fc) {
        c.classList.remove("selected");
    }
}
document.querySelector('.restart').addEventListener('click', restartQuiz);
checkAns();