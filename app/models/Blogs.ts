const { Schema, default: mongoose } = require("mongoose");

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  pictures: {
    type: Array,
  },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
