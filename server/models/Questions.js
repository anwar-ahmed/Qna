const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let QuestionsSchema = new Schema({
   title: String,
   desc: String,
   answers:{type: Number, Default: 0 },
   tag: String,
   like: Number,
   dislike: Number,
   createdDate: { type: Date, default: Date.now },
   username: String
});

module.exports = mongoose.model('Question',QuestionsSchema);