const mongoose = require("mongoose");
const ParagraphSchema = require("./Paragraph").schema;

const articleSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    code: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: false },
    author: { type: String, required: false },
    description: { type: String, required: true },
    category: { type: String, required: false },
    image: { type: String, required: false },
    reference: { type: String, required: false },
    isFeatured: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    paragraphs: [ParagraphSchema],
    videoUrl: { type: String, required: false },
    downloadinfo: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
