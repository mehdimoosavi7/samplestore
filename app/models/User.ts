const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
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
  addresses: {
    type: Array,
  },
  cart: {
    type: Array,
  },
  orders: {
    type: Array,
  },
  comments: {
    type: Array,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", userSchema);
