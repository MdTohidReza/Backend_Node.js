import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    deals: { type: Number, required: true },
  },
  { timestamps: true },
);

export default mongoose.model("Sale", saleSchema);
