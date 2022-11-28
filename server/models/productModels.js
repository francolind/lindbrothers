import mongoose from "mongoose";

const reviewschema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        require:true,
    },
    comment:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"user"
    }
})

const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    Image:{
        type:String,
        require:true,
      
    },
    description:{
        type:String,
        require:true,
        
    },
    rating:{
        type:Number,
        require:true,
        default:0
    },
    review:[reviewschema],
    numReview:{
        type:Number,
        require:true,
        default:0
    },
    price:{
        type:Number,
        require:true,
        default:0
    },
    countInStock:{
        type:Number,
        require:true,
        default:0
    }
},
{
    timestramps:true
}
)
const Product = mongoose.model("Product",productSchema)

export default Product