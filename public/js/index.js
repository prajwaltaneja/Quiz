
const ques= document.querySelector('#NoQues');

var question=ques.value;

var allContent=document.querySelector("#allContent");
var textArea=document.createElement('textarea');
var divcolS=document.createElement('div');
var divCol=document.createElement('div');
var textAreaDanger=document.createElement('textarea');
var button = document.createElement('button');
button.classList.add('button','is-primary','is-medium','is-fullwidth');
button.innerText='Create';
// 'ml-6'

// question
/* <input class="input is-medium is-warning my-5" type="text" id="head11" name="title" required placeholder="Quiz Title"></input> */
// for(var i=1;i<=question;i++){
//     var allContent=document.querySelector("#allContent");
//     var textArea=document.createElement('textarea');
//     textArea.setAttribute('placeholder',`Question ${i}`);
//     textArea.name=`question${i}`;
//     textArea.required='true';
//     textArea.classList.add('textarea','is-link');
//     allContent.append(textArea);
//     var alpha=1;
//     for(var j=0;j<2;j++){
//         var divcolS=document.createElement('div');
//         divcolS.classList.add('columns','m-2');
//         allContent.append(divcolS);
//         for(var k=1;k<=2;k++){
//             var divCol=document.createElement('div');
//             var textAreaDanger=document.createElement('textarea');
//             divCol.classList.add('column','m-2');
//             divcolS.append(divCol);
//             textAreaDanger.setAttribute('placeholder',`Option ${alpha}`);
//             textAreaDanger.name=`opt${alpha}${i}`;
//             textAreaDanger.required='true';
//             textAreaDanger.classList.add('textarea','is-danger');
//             divCol.append(textAreaDanger);
//             alpha++;
//         }
//     }
//     var divcolS=document.createElement('div');
//     divcolS.classList.add('control','mx-6','mb-6','px-6','pb-6');
//     allContent.append(divcolS);

//     var label=document.createElement('label');
//     label.classList.add('mx-5');
//     label.innerText='Select the correct option of this question: ';
//     divcolS.append(label);

//     var input=document.createElement('input');
//     input.type='radio';
//     input.name=`ans${i}`;
//     input.setAttribute('id',`one${i}`);
//     input.value='1';
//     divcolS.append(input);
//     var label=document.createElement('label');
//     label.classList.add('radio','mr-6','ml-1');
//     label.htmlFor=`one${i}`;
//     label.innerText='1';
//     divcolS.append(label);
//     // var br=document.createElement('br');
//     // divcolS.append(br);

//     var input=document.createElement('input');
//     input.type='radio';
//     input.name=`ans${i}`;
//     input.setAttribute('id',`two${i}`);
//     input.value='2';
//     divcolS.append(input);
//     var label=document.createElement('label');
//     label.classList.add('radio','mr-6','ml-1');
//     label.htmlFor=`two${i}`;
//     label.innerText='2';
//     divcolS.append(label);
//     // var br=document.createElement('br');
//     // divcolS.append(br);

//     var input=document.createElement('input');
//     input.type='radio';
//     input.name=`ans${i}`;
//     input.setAttribute('id',`three${i}`);
//     input.value='3';
//     divcolS.append(input);
//     var label=document.createElement('label');
//     label.classList.add('radio','mr-6','ml-1');
//     label.htmlFor=`three${i}`;
//     label.innerText='3';
//     divcolS.append(label);
//     // var br=document.createElement('br');
//     // divcolS.append(br);

//     var input=document.createElement('input');
//     input.type='radio';
//     input.name=`ans${i}`;
//     input.setAttribute('id',`four${i}`);
//     input.value='4';
//     divcolS.append(input);
//     var label=document.createElement('label');
//     label.classList.add('radio','mr-6','ml-1');
//     label.htmlFor=`four${i}`;
//     label.textContent='4';
//     divcolS.append(label);
    

// }
// allContent.appendChild(button);




function reset()
{
    // document.querySelector("allContent").innerHTML=        
    for(var i=1;i<=question;i++){
        var allContent=document.querySelector("#allContent");
        var textArea=document.createElement('textarea');
        textArea.setAttribute('placeholder',`Question ${i}`);
        textArea.name=`question${i}`;
        textArea.required='true';
        textArea.classList.add('textarea','is-link');
        allContent.append(textArea);
        var alpha=1;
        for(var j=0;j<2;j++){
            var divcolS=document.createElement('div');
            divcolS.classList.add('columns','m-2');
            allContent.append(divcolS);
            for(var k=1;k<=2;k++){
                var divCol=document.createElement('div');
                var textAreaDanger=document.createElement('textarea');
                divCol.classList.add('column','m-2');
                divcolS.append(divCol);
                textAreaDanger.setAttribute('placeholder',`Option ${alpha}`);
                textAreaDanger.name=`opt${alpha}${i}`;
                textAreaDanger.required='true';
                textAreaDanger.classList.add('textarea','is-danger');
                divCol.append(textAreaDanger);
                alpha++;
            }
        }
        var divcolS=document.createElement('div');
        divcolS.classList.add('control','mx-6','mb-6','px-6','pb-6');
        allContent.append(divcolS);
    
        var label=document.createElement('label');
        label.classList.add('mx-5');
        label.innerText='Select the correct option of this question: ';
        divcolS.append(label);
    
        var input=document.createElement('input');
        input.type='radio';
        input.name=`ans${i}`;
        input.setAttribute('id',`one${i}`);
        input.value='1';
        divcolS.append(input);
        var label=document.createElement('label');
        label.classList.add('radio','mr-6','ml-1');
        label.htmlFor=`one${i}`;
        label.innerText='1';
        divcolS.append(label);
        // var br=document.createElement('br');
        // divcolS.append(br);
    
        var input=document.createElement('input');
        input.type='radio';
        input.name=`ans${i}`;
        input.setAttribute('id',`two${i}`);
        input.value='2';
        divcolS.append(input);
        var label=document.createElement('label');
        label.classList.add('radio','mr-6','ml-1');
        label.htmlFor=`two${i}`;
        label.innerText='2';
        divcolS.append(label);
        // var br=document.createElement('br');
        // divcolS.append(br);
    
        var input=document.createElement('input');
        input.type='radio';
        input.name=`ans${i}`;
        input.setAttribute('id',`three${i}`);
        input.value='3';
        divcolS.append(input);
        var label=document.createElement('label');
        label.classList.add('radio','mr-6','ml-1');
        label.htmlFor=`three${i}`;
        label.innerText='3';
        divcolS.append(label);
        // var br=document.createElement('br');
        // divcolS.append(br);
    
        var input=document.createElement('input');
        input.type='radio';
        input.name=`ans${i}`;
        input.setAttribute('id',`four${i}`);
        input.value='4';
        divcolS.append(input);
        var label=document.createElement('label');
        label.classList.add('radio','mr-6','ml-1');
        label.htmlFor=`four${i}`;
        label.textContent='4';
        divcolS.append(label);
        
    
    }
    // allContent.appendChild(button);
    

}


ques.addEventListener('change',function(){
    allContent.innerHTML='';
    question=ques.value;
    reset();
})

reset();