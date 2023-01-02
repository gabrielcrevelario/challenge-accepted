import { Document } from "mongoose";

export default interface Locale extends Document {
    id: number;
    name: string;
    state: string;
    latitude: number;
    longitude: number;
  }