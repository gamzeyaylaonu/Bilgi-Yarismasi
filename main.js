//console.log("bağlandı")

const quizData = [
    {
        question:'Güneş Sisteminin en büyük gezegeni hangisir?',
        a:'Neptün',
        b:'Satürn',
        c:'Jüpiter',
        d:'Mars',
        e:'Venüs',
        corrent: 'c',
    },
    {
        question:'Saat yönünde dönen tek gezegen hangisidir?',
        a:'Venüs',
        b:'Uranüs',
        c:'Merkür',
        d:'Mars',
        e:'Dünya',
        corrent: 'a',
    },
    {
        question:'Uzay sınırı yeryüzünden kaç km sonra başlar?',
        a:'100',
        b:'150',
        c:'200',
        d:'250',
        e:'290',
        corrent: 'a',
    },
    {
        question:'Uzaya başarıyla fırlatılan ilk uydu hangisidir?',
        a:'Salyut-1',
        b:'Sputnik-1',
        c:'Luna-3',
        d:'Luna-2',
        e:'Apollo-13',
        corrent: 'b',
    },
    {
        question:'Güneşe en yakın gezegen hangisidir?',
        a:'Dünya',
        b:'Venüs',
        c:'Mars',
        d:'Neptün',
        e:'Merkür',
        corrent: 'e',
    },

]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
//console.log(questionEl)
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz]

  deselectedAnswers()

  questionEl.innerText = currentQuizData.question
  a_text.innerText =currentQuizData.a
  b_text.innerText =currentQuizData.b
  c_text.innerText =currentQuizData.c
  d_text.innerText =currentQuizData.d
  e_text.innerText =currentQuizData.e
 
}

function deselectedAnswers(){
    answerEls.forEach(answerEl => answerEl.checked =false)

}

function getSelected(){
    let answer

    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", ()=>{
    const answer = getSelected()

    //console.log(answer)

    if(answer){
        if(answer ===quizData[currentQuiz].corrent) {
            score ++
        }
        currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML=`
            <h2> Yarışma tamamlandı, puanın ${score * 20} 🤩 </h2>
            <button class="submit" onClick="location.reload()"> Tekrar Dene. </button>
            `
        }
    }
})




