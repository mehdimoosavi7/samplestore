const { Schema, default: mongoose } = require("mongoose");

const messageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: false,
  },
  subject: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Message ||
  mongoose.model("Message", messageSchema);
