import mongoose from 'mongoose';

const validationRuleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  rule: {
    type: String,
    required: true
  },
  severity: {
    type: String,
    enum: ['error', 'warning', 'info'],
    default: 'warning'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const ValidationRule = mongoose.model('ValidationRule', validationRuleSchema);