const mongoose=require('mongoose');

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
    quesNo : {
        type : Number,
        required : true
    },
    Question : [quesSchema]
});



const userSchema = new mongoose.Schema({
    name: {
        type: String,
    required : true
    },
    email_id :{
        type: String,
        required: true
    },
    password : {type: String,
        
    }
})
const Ques = mongoose.model('quesSchema', quesSchema);
const Quiz = mongoose.model('Quiz',quizSchema);
const userInfo = mongoose.model('user',userSchema);
module.exports = {Quiz, Ques, userInfo};
