const mongoose = require('mongoose');

const ParagraphSchema = new mongoose.Schema({
  title: { type: String },
  subtitle: { type: String },
  description: { type: String },
  image: { type: String },
  reference: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Paragraph', ParagraphSchema);
