const mongoose = require('mongoose');

//Defining Blog Schema
let BlogSchema = new mongoose.Schema({
  tag: String,
  body: {
    header: {
      mainHeading: String,
      mainImage: String
    },
    content: {
      // [introParagraph] div goes directly below the main heading with text-muted
      introParagraph: String,
      sectionOne: {
        paragraphOne: String,
        paragraphTwo: String
      },

      sectionTwo: {
        smallHeading: String,
        // [paragraphOne] first sentence will be styled "italically" by applying a class to it with css
        paragraphOne: String,
        // [highlightedParagraph] div has border to the left
        highlightedParagraph: String,
        paragraphThree: String
      },
      sectionThree: {
        // [smallHeading] here is even smaller than that of section 2 in font-size
        smallHeading: String,
        // [paragraphOne] is a numbered div
        paragraphOne: String,
        paragraphTwo: String,
        smallHeading: String,
        // [paragraphThree] div is a list-style type div
        paragraphThree: String,
        blogImage: String,
        blogImageDescription: String,
        paragraphFour: String
      },
      // [sectionFour] div is the conclusion
      sectionFour: {
        smallHeading: String,
        paragraphOne: String
      }
    }

  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }]

});

module.exports = mongoose.model("Blog", BlogSchema);