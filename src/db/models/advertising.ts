import mongoose, { Document, Schema } from "mongoose";

export type Advertising = {
  title: string;
  description: string;
  location: string;
  phoneNumber: string;
  promoteImage: string;
  imageList: string[];
};

export interface IAdvertising extends Document, Advertising {}

const advertisingSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 200,
  },
  location: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: false,
    unique: true,
  },
  promoteImage: {
    type: String,
    required: true,
    unique: true,
  },
  imageList: {
    type: [String],
    required: true,
  },
  // Relationship with the Partner collection. 1 ad belongs to a partner.
  partner: {
    type: Schema.Types.ObjectId,
    ref: "Partner",
    required: true,
  },
});

const AdvertisingModel = mongoose.model<IAdvertising>(
  "Advertising",
  advertisingSchema
);
export default AdvertisingModel;
