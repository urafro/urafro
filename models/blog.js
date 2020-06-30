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
        mediumHeading: String,
        // [paragraphThree] first sentence will be styled "italically" by applying a class to it with css
        paragraphThree: String,
        // [paragraphFour] div has border to the left
        paragraphFour: String,
        paragraphFive: String
      },
      sectionThree: {
        // [smallHeading] here is even smaller than that of section 2 in font-size
        smallHeading: String,
        // [paragraphSix] is a numbered div
        paragraphSix: String,
        paragraphSeven: String,
        smallerHeading: String,
        // [paragraphEight] div is a list-style type div
        paragraphEight: String,
        blogImage: String,
        // I'll use this value when i figure out how to set image alt attributes as variables
        blogImageDescription: String,
        paragraphNine: String
      },
      // [sectionFour] div is the conclusion
      sectionFour: {
        smallestHeading: String,
        lastParagraph: String
      }
    }

  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }],
  createdAt : {
    type: Date,
    default: Date.now()
  }

});

module.exports = mongoose.model("Blog", BlogSchema);