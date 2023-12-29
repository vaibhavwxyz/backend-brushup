import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    previousDiagonsed: {
      type: String,
    },
    previousHospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
