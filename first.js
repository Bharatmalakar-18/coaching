let questions=[
    {
        question : "what is the full form of html",
        Option:[
            "hypertext markup language",
            "head tag markup language",
            "hello ternal make language",
            "nothing"
        ],
        answer:"hypertext markup language"
    },
    {
         question : "what is lion",
        Option:[
            "a animal",
            "a vegetable",
            "a something",
            "a nothting"
        ],
        answer:"a animal"
    }
];
let question=document.querySelector(".question");
let Option=document.querySelectorAll(".btn");
let next=document.querySelector("#next-btn");

let current=0;
let score=0;
function showquestion(){
    let current_question=questions[current];
    
    question.innerText=current_question.question;
    Option[0].innerText = current_question.Option[0];
    Option[1].innerText = current_question.Option[1];
    Option[2].innerText = current_question.Option[2];
    Option[3].innerText = current_question.Option[3];
    Option.forEach((btn) => {
    btn.style.backgroundColor = "";
    btn.style.color = "";
    btn.disabled = false;
});
}

Option.forEach((button) => {
    // console.log(button);
    button.addEventListener("click",()=>{
    
        let user=button.innerText;
        
        let correct=questions[current].answer;
        if(user==correct){
            button.style.backgroundColor = "green";
           
            score++;
           
        }else{
            button.style.backgroundColor="red";
            button.style.color="white"
        }
         Option.forEach((btn) => {
            if (btn.innerText === correct) {
                btn.style.backgroundColor = "green";
            }
            Option.forEach((btn) => {
            btn.disabled = true;
        });
        });
       
    })
     
});
next.addEventListener("click",()=>{
    current++;
    if(current<questions.length){

showquestion();

    }
    else{
        let container=document.querySelector(".quiz-container");
         container.innerHTML = `
        <h2>Quiz Finished 🎉</h2>
        <p>Your Score: ${score} / ${questions.length}</p>
    `;
        console.log("quiz was finished");
    }
    
    
    
})

showquestion();

