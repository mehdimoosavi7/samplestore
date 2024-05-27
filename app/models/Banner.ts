const { Schema, default: mongoose } = require("mongoose");

const bannerSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link:{
    type: String,
    required: true
  }
});

export default mongoose.models.Banner || mongoose.model("Banner", bannerSchema);
