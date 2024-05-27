const { Schema, default: mongoose } = require("mongoose");

const brandSchema = new Schema({
  logo: {
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  }
});

export default mongoose.models.Brand || mongoose.model("Brand", brandSchema);
