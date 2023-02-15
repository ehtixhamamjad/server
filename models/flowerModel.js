import mongoose from "mongoose";

const flowerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  //   avatar: {
  //     public_id: String,
  //     url: String,
  //   },
  //   userId: {
  //     type: String,
  //     required: true,
  //   },
  city: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Flower = mongoose.model("Flower", flowerSchema);
