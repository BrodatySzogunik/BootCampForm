export class formChecker{
    constructor(form,questions){
        this. questions = questions
        this. form = form
    }
    checkForm(){
        let idx = 0;
        let good = 0;
        let notGood = 0;
        this.questions.forEach((item)=>{
            const container = document.getElementById(idx);
            const p = container.querySelector('p')
            const question = container.querySelectorAll(`[name=question-${idx}`)
            let val 
            console.log(container)

            switch(item.type){
            case "radio":{
            
                val = ""
                question.forEach((el)=>{
                    if(el.checked){
                        val = el.value
                    }
                })
                if(val && val == item.rightAnswer){
                    p.innerText="Dobrze!"
                    p.classList.add("correctAnswer")
                    p.classList.remove("wrongAnswer")
                    container.classList.add("correctAnswerbg")
                    container.classList.remove("wrongAnswerbg")
                    good ++
                }else{
                    p.innerText="Źle!"
                    p.classList.add("wrongAnswer")
                    p.classList.remove("correctAnswer")
                    container.classList.add("wrongAnswerbg")
                    container.classList.remove("correctAnswerbg")
                    notGood ++
                }
                idx++;
            }break;
            case "chceckbox":{
                val=[]
                console.log(question)
                question.forEach((el)=>{
                    if(item.rightAnswers.includes(el.value)){
                        val.push(el.value)
                        el.classList.add("correctAnswer")
                        el.classList.remove("wrongAnswer")
                    }else{
                        el.classList.remove("correctAnswer")
                        el.classList.add("wrongAnswer")
                    }

                    if(val && val==item.rightAnswers){
                        p.innerText="Dobrze!"
                        p.classList.add("correctAnswer")
                        p.classList.remove("wrongAnswer")
                        container.classList.add("correctAnswerbg")
                        container.classList.remove("wrongAnswerbg")
                        good ++
                    }else{
                        p.innerText="Źle!"
                        p.classList.add("wrongAnswer")
                        p.classList.remove("correctAnswer")
                        container.classList.add("wrongAnswerbg")
                        container.classList.remove("correctAnswerbg")
                        notGood ++
                    }
                    idx++;
                })
                

            }default: idx++
        }
        })
        let AnswerCount = document.getElementById("answerCount")
        AnswerCount.innerText=`Dobrze: ${good} Źle: ${notGood}`
                if(points>=6){
            alert("Test Zaliczony")
        }
    }
}