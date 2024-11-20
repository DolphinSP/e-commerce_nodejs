// models/partner.ts

import mongoose, { Document, Schema } from "mongoose";

export type Partner = {
  name: string;
  username: string;
  email: string;
  password: string;
};

// Let's extend Document using our Partner type
export interface IPartner extends Document, Partner {}

const partnerSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: false,
    unique: true,
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
});

const PartnerModel = mongoose.model<IPartner>("Partner", partnerSchema);
export default PartnerModel;
