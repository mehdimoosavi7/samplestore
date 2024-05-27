const { Schema, default: mongoose } = require("mongoose");

const commentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.Comment ||
  mongoose.model("Comment", commentSchema);
