import { Schema, model, models } from "mongoose";

const leaveSchema = new Schema(
  {
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    prompt: { type: String, required: [true, 'Prompt is required'] },
    tag: { type: String, required: [true, 'Tag is required'] },
  },
  {
    versionKey: false,
  }
);

const Leave = models.Leave || model("Leave", leaveSchema);

export default Leave;
