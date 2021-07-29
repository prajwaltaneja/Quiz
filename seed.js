const mongoose = require('mongoose');


// const {Quiz, Ques} = require('./model/data');

mongoose.connect('mongodb://localhost:27017/quizBase', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{ 
    console.log("MONGO DB SETUP");
})
.catch((err)=>{
    console.log("ERROR!!!");
    console.log(err);
});



const quesSchema = new mongoose.Schema({
    //quiz_id :{
        // type: Number
    // },
    ques : {
        type : String,
        required : true
    },
    opt1 : {
        type : String,
        required: true
    },
    opt2 : {
        type : String,
        required : true
    },
    opt3 : {
        type : String,
        required : true
    },
    opt4 : {
        type : String,
        required : true
    }, 
    ans : {
        type : Number,
        required : true
    }
})


const quizSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    Question : [quesSchema]
});



// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//     required : true
//     },
//     email_id :{
//         type: String,
//         required: true
//     },
//     password : {type: String,
//         required: true
//     }
// })
const Ques = mongoose.model('quesSchema', quesSchema);
const Quiz = mongoose.model('Quiz',quizSchema);


const x = new Ques({
        ques : 'what is daksh',
        opt1 : 'languageeeeeeeeeeeeeeeeeeee',
        opt2 : 'jewelahhhhhhhhhhhhhhhhhhhh5ry',
        opt3 : 'dont know',
        opt4 : 'out of syllabus',
        ans : 1
    // { ques : 'what is cpp',
    //     opt1 : 'language',
    //     opt2 : 'jewelary',
    //     opt3 : 'dont know',
    //     opt4 : 'out of syllabus',
    //     ans : 1
    // },
    // { ques : 'what is hollow',
    //     opt1 : 'language',
    //     opt2 : 'jewelary',
    //     opt3 : 'dont know',
    //     opt4 : 'out of syllabus',
    //     ans : 1
    // },
    // { ques : 'what is javascript',
    //     opt1 : 'language',
    //     opt2 : 'jewelary',
    //     opt3 : 'dont know',
    //     opt4 : 'out of syllabus',
    //     ans : 1
    // },
    // { ques : 'what is mathssss',
    //     opt1 : 'language',
    //     opt2 : 'jewelary',
    //     opt3 : 'dont know',
    //     opt4 : 'out of syllabus',
    //     ans : 1
    // }
});
const p = new Quiz({
    title : 'first quiz',
    Question : [  { ques : 'what is cpp',
        opt1 : 'language',
        opt2 : 'jewelary',
        opt3 : 'dont know',
        opt4 : 'out of syllabus',
        ans : 1
    },
    { ques : 'what is hollow',
        opt1 : 'language',
        opt2 : 'jewelary',
        opt3 : 'dont know',
        opt4 : 'out of syllabus',
        ans : 1
    },
    { ques : 'what is javascript',
        opt1 : 'language',
        opt2 : 'jewelary',
        opt3 : 'dont know',
        opt4 : 'out of syllabus',
        ans : 1
    },
    { ques : 'what is mathssss',
        opt1 : 'language',
        opt2 : 'jewelary',
        opt3 : 'dont know',
        opt4 : 'out of syllabus',
        ans : 1
    }]
})
p.save()
.then(p=>{
    console.log(p);
})
.catch(err =>{
    console.log("OMG ERRORRRRRRR....!!!!");
    console.log(err);
})


