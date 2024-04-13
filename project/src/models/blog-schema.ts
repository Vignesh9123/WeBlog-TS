import mongoose, { Schema } from 'mongoose'

const blogSchema = new mongoose.Schema({
    userId:{
        type:Schema.Types.ObjectId,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    content: String,
},{timestamps:true})


const Blog = mongoose.models.blog || mongoose.model("blog",blogSchema)
export default Blog