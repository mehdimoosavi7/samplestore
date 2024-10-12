const { Schema, default: mongoose } = require("mongoose");
 
const productSchema = new Schema({
  price:{
    type: Number,
    required: true
  },
  count:{
    type: Number,
    required: true
  },
  details:{
    type: String,
    required: false
    },
  name:{
    type: String,
    required: true
  },
  category:{
    type: Number,
    required: true
  },
  specs:{
    type: Array,
    required: false
    },
  pictures:{
    type: Array,
    required: false
  },
  comments: {
    type: Array,
    required: false
  },
  brand: {
    type: Number,
    required: true
  },
  points:{
    type: Number 
  },
  oldPrice:{
    type: Number
  },
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);
