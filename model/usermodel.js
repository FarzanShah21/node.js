import mongoose from "mongoose";
const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: ["please provide valid user "],
      minlenght: [10, "name must be consist on 10 character"],
      maxlenght: [20, "name must be consist on 20 character"],
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    cartItems: [
      {
        quantity: {
          type: Number,
          default: 1,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product.model",
        },
      },
    ],
    // role: {type: String, default: 'user'},
    // cart: [{
    //     productId: {type: Schema.Types.ObjectId, ref: 'Product'},
    //     quantity: {type: Number, default: 1}
    // }]
  },
  { timestamps: true }
);
const User = mongoose.model("user", UserSchema);
export default User;
