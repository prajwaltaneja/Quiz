const express=require('express');
const app=express();
const path=require('path');

const {Quiz, Ques, userInfo} = require('./model/data')
app.use(express.static(path.join(__dirname,'/public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended : true}))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quizBase', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{ 
    console.log("MONGO DB SETUP");
})
.catch((err)=>{
    console.log("ERROR");
    console.log(err);
});
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/HomePage.html');
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/Login.html');
})
app.get('/Sign_in',(req,res)=>{
    res.sendFile(__dirname+'/Sign_in.html');
})
app.get('/qmake',(req,res)=>{
    res.sendFile(__dirname+'/qmake..html');
})
app.post('/newEntry',async (req,res)=>{
    let quesEntry=[];
    console.log(req.body);
    // console.log(req.body.q);
    for(var aj=1 ;aj<=req.body.ques_no ;aj++){
        var unitQues= new Ques({
            ques : req.body['question'+aj] ,
            opt1 : req.body['opt1'+aj],
            opt2 : req.body['opt2'+aj],
            opt3: req.body['opt3'+aj],
            opt4: req.body['opt4'+aj],
            ans: req.body['ans'+aj]
        })
        quesEntry.push(unitQues);
    }
    var quizEntry= new Quiz({
        title : req.body.title ,
        quesNo : req.body.ques_no,
        Question : quesEntry
    })
    await quizEntry.save();
    console.log(quizEntry);
    console.log(quizEntry._id);
    res.render('codeDisplay',{
        qEntry : quizEntry._id,
    });
})
app.post('/attend_quiz', async (req,res)=>{
 // data
    var userData = new userInfo({
    name: req.body.name,
    email_id:req.body.email,
    password: req.body.password
    });
    // console.log(req.body);
    await userData.save()
    .then(()=>{
        console.log("data");
        console.log(userData);
    })
    .catch((err)=>{
        console.log("error is comminggggggggggg");
        console.log(err);
    })
    res.sendFile(__dirname+'/attend_quiz.html');
})

app.post('/code', async (req,res)=>{
    // var {code}=req.params;
    console.log(req.body);
    let id = req.body.code;
    // let q = JSON.stringify(id);
    var quizOn;
     await Quiz.find({_id : id},(err, res) =>{
        if(!err)
        {
            console.log(res);
            quizOn = res;
        }
        else{
            console.log("eror", err);
        }
    });
    if(!quizOn){
        res.sendFile(__dirname+'/notExist.html');
    }
    console.log(quizOn);
    console.log(quizOn[0].Question);
    console.log(quizOn[0].title);
    let question = quizOn[0].Question;
    console.log(question);

    // console.log(quizOn);
    // res.send("WILL BE HAPPY");
    res.render('bbb', {
        quizOn : quizOn[0],
        Question : question});
})


app.post('/result', async (req,res)=>{
    // data
    
    var id = req.body.quizId;
    console.log("this is id -->>>>",id);
    await Quiz.find({_id : id},(err,quizData) =>{
        if(!err)
        {
            console.log(quizData);
            var score=0;
            let ques = quizData[0].Question;
            console.log("this is ques ->>>>>>",ques);
            console.log("this is req --->>>", req.body);
            for(var i=0; i < ques.length; i++){
                if(req.body[`ans${i+1}`]==quizData[0].Question[i].ans){
                    score++;
                }
            }
            res.render('printScore',{score});
        }
        else{
            console.log("eror", err);
        }
    })
    res.send("working fine");
    // res.sendFile(__dirname+'/attend_quiz.html');
})


app.post('/...',(req,res)=>{


    res.sendFile(__dirname+'/qmake..html');
})



app.listen(3000, ()=>{
    console.log("PORT 3000 listening.....!!");
    console.log("PORT 3000 listening.....!!");

})








