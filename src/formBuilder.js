
export class formBuilder{
    constructor(form,questions){
        this.form = form
        this.questions = questions
    }

    // For text inputs
    addQuestionInput(question){
        let container = document.createElement('div');
        let title = document.createElement('h3');
        let answerinfo = document.createElement('p');
        let index = this.questions.indexOf(question);
        let input = document.createElement('input');

        input.setAttribute("type","text");
        input.setAttribute("name", `question-${index}`);


        title.innerText = question.text;

        container.setAttribute("id",index)

        container.appendChild(title);
        container.appendChild(input)
        container.appendChild(answerinfo)
        this.form.appendChild(container)
    }

    //For checkBox buttons
    addQuestionCheckbox(question){
        let container = document.createElement('div');
        let title = document.createElement('h3');
        let answerinfo = document.createElement('p');
        let index = this.questions.indexOf(question)

        title.innerText = question.text;

        container.setAttribute("id",index)

        container.appendChild(title);

        question.answers.forEach((answer)=>{
            let radioLabel  = document.createElement('label')
            let radioInput = document.createElement('input')
            let radioText = document.createElement('div')
            let radioDesign = document.createElement('div')
            
            radioLabel.classList.add("rad-label")

            radioText.innerText = answer
            radioText.classList.add("rad-text")

            radioDesign.classList.add("rad-design")

            radioInput.classList.add("rad-input")
            radioInput.setAttribute("type", "checkbox");
            radioInput.setAttribute("name", `question-${index}`);
            radioInput.setAttribute("value", answer);
            
            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(radioDesign)
            radioLabel.appendChild(radioText)
            container.appendChild(radioLabel);
        });
        container.appendChild(answerinfo);
        this.form.appendChild(container)

    }

    // For radio buttons
    addQuestionRadio(question){
        let container = document.createElement('div');
        let title = document.createElement('h3');
        let answerinfo = document.createElement('p');
        let index = this.questions.indexOf(question)

        title.innerText = question.text;

        container.setAttribute("id",index)

        container.appendChild(title);

        question.answers.forEach((answer)=>{
            let radioLabel  = document.createElement('label')
            let radioInput = document.createElement('input')
            let radioText = document.createElement('div')
            let radioDesign = document.createElement('div')
            
            radioLabel.classList.add("rad-label")

            radioText.innerText = answer
            radioText.classList.add("rad-text")

            radioDesign.classList.add("rad-design")

            radioInput.classList.add("rad-input")
            radioInput.setAttribute("type", "radio");
            radioInput.setAttribute("name", `question-${index}`);
            radioInput.setAttribute("value", answer);
            
            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(radioDesign)
            radioLabel.appendChild(radioText)
            container.appendChild(radioLabel);
        });
        container.appendChild(answerinfo);
        this.form.appendChild(container)
    }
    renderForm(){
        this.questions.forEach((question)=>{
            
            switch(question.type){
                case "input": this.addQuestionInput(question);
                break;
                case "radio": this.addQuestionRadio(question);
                break;

                case "chceckbox": this.addQuestionCheckbox(question);
                break;
            }
        })
        return this.form
    }

}

