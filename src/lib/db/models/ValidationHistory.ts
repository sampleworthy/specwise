import mongoose from 'mongoose';

const validationHistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  results: [{
    rule: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ValidationRule'
    },
    message: String,
    severity: {
      type: String,
      enum: ['error', 'warning', 'info']
    },
    line: Number,
    column: Number
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const ValidationHistory = mongoose.model('ValidationHistory', validationHistorySchema);