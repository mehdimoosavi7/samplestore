const { Schema, default: mongoose } = require("mongoose");

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  photo: {
    type: String,
  },
  pictures: {
    type: String,
  },
  blogs: {
    type: Array,
  },
});

export default mongoose.models.Admin || mongoose.model("Admin", adminSchema);
