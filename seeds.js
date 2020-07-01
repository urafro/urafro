const mongoose = require("mongoose");
const Blog = require("./models/blog");
const Comment = require("./models/comment");

const data = [
  {
    tag: "Life",
    body: {
      header: {
        mainHeading: "I will be traveling to Nepal for the second time this year",
        mainImage: "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2140&q=80"
      },
      content: {
        // [introParagraph] div goes directly below the main heading with text-muted
        introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        sectionOne: {
          paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
          paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
        },

        sectionTwo: {
          mediumHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphThree] first sentence will be styled "italically" by applying a class to it with css
          paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
          // [paragraphFour] div has border to the left
          paragraphFour: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
          paragraphFive: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
        },
        sectionThree: {
          // [smallHeading] here is even smaller than that of section 2 in font-size
          smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphSix] is a numbered div
          paragraphSix: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. 2. In a nibh nec risus aliquam rutrum. 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
          paragraphSeven: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
          smallerHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphEight] EVERY sentence in this div is a unordered-list-style type point
          paragraphEight: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
          blogImage: "https://images.unsplash.com/photo-1565802527863-1353e4ebce91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=712&q=80",
          blogImageDescription: "coffee gaming and music",
          paragraphNine: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        },
        // [sectionFour] div is the conclusion
        sectionFour: {
          smallestHeading: "Nulla gravida ultrices dolor id sollicitudin",
          lastParagraph: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        }
      }

    }

  },
  {
    tag: "Music",
    body: {
      header: {
        mainHeading: "I will be traveling to Nepal for the second time this year",
        mainImage: "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2140&q=80"
      },
      content: {
        // [introParagraph] div goes directly below the main heading with text-muted
        introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        sectionOne: {
          paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
          paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
        },

        sectionTwo: {
          mediumHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphThree] first sentence will be styled "italically" by applying a class to it with css
          paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
          // [paragraphFour] div has border to the left
          paragraphFour: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
          paragraphFive: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
        },
        sectionThree: {
          // [smallHeading] here is even smaller than that of section 2 in font-size
          smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphSix] is a numbered div
          paragraphSix: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. 2. In a nibh nec risus aliquam rutrum. 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
          paragraphSeven: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
          smallerHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphEight] EVERY sentence in this div is a unordered-list-style type point
          paragraphEight: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
          blogImage: "https://images.unsplash.com/photo-1565802527863-1353e4ebce91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=712&q=80",
          blogImageDescription: "coffee gaming and music",
          paragraphNine: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        },
        // [sectionFour] div is the conclusion
        sectionFour: {
          smallestHeading: "Nulla gravida ultrices dolor id sollicitudin",
          lastParagraph: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        }
      }

    }

  },
  {
    tag: "Code",
    body: {
      header: {
        mainHeading: "I will be traveling to Nepal for the second time this year",
        mainImage: "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2140&q=80"
      },
      content: {
        // [introParagraph] div goes directly below the main heading with text-muted
        introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        sectionOne: {
          paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
          paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
        },

        sectionTwo: {
          mediumHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphThree] first sentence will be styled "italically" by applying a class to it with css
          paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
          // [paragraphFour] div has border to the left
          paragraphFour: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
          paragraphFive: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
        },
        sectionThree: {
          // [smallHeading] here is even smaller than that of section 2 in font-size
          smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphSix] is a numbered div
          paragraphSix: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. 2. In a nibh nec risus aliquam rutrum. 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
          paragraphSeven: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
          smallerHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphEight] EVERY sentence in this div is a unordered-list-style type point
          paragraphEight: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
          blogImage: "https://images.unsplash.com/photo-1565802527863-1353e4ebce91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=712&q=80",
          blogImageDescription: "coffee gaming and music",
          paragraphNine: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        },
        // [sectionFour] div is the conclusion
        sectionFour: {
          smallestHeading: "Nulla gravida ultrices dolor id sollicitudin",
          lastParagraph: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        }
      }

    }

  },
  {
    tag: "Self",
    body: {
      header: {
        mainHeading: "I will be traveling to Nepal for the second time this year",
        mainImage: "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2140&q=80"
      },
      content: {
        // [introParagraph] div goes directly below the main heading with text-muted
        introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        sectionOne: {
          paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
          paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
        },

        sectionTwo: {
          mediumHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphThree] first sentence will be styled "italically" by applying a class to it with css
          paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
          // [paragraphFour] div has border to the left
          paragraphFour: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
          paragraphFive: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
        },
        sectionThree: {
          // [smallHeading] here is even smaller than that of section 2 in font-size
          smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphSix] is a numbered div
          paragraphSix: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. 2. In a nibh nec risus aliquam rutrum. 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
          paragraphSeven: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
          smallerHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphEight] EVERY sentence in this div is a unordered-list-style type point
          paragraphEight: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
          blogImage: "https://images.unsplash.com/photo-1565802527863-1353e4ebce91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=712&q=80",
          blogImageDescription: "coffee gaming and music",
          paragraphNine: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        },
        // [sectionFour] div is the conclusion
        sectionFour: {
          smallestHeading: "Nulla gravida ultrices dolor id sollicitudin",
          lastParagraph: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        }
      }

    }

  },
  {
    tag: "Code",
    body: {
      header: {
        mainHeading: "I will be traveling to Nepal for the second time this year",
        mainImage: "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2140&q=80"
      },
      content: {
        // [introParagraph] div goes directly below the main heading with text-muted
        introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        sectionOne: {
          paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
          paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
        },

        sectionTwo: {
          mediumHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphThree] first sentence will be styled "italically" by applying a class to it with css
          paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
          // [paragraphFour] div has border to the left
          paragraphFour: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
          paragraphFive: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
        },
        sectionThree: {
          // [smallHeading] here is even smaller than that of section 2 in font-size
          smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphSix] is a numbered div
          paragraphSix: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. 2. In a nibh nec risus aliquam rutrum. 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
          paragraphSeven: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
          smallerHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphEight] EVERY sentence in this div is a unordered-list-style type point
          paragraphEight: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
          blogImage: "https://images.unsplash.com/photo-1565802527863-1353e4ebce91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=712&q=80",
          blogImageDescription: "coffee gaming and music",
          paragraphNine: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        },
        // [sectionFour] div is the conclusion
        sectionFour: {
          smallestHeading: "Nulla gravida ultrices dolor id sollicitudin",
          lastParagraph: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        }
      }

    }

  },
  {
    tag: "Life",
    body: {
      header: {
        mainHeading: "I will be traveling to Nepal for the second time this year",
        mainImage: "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2140&q=80"
      },
      content: {
        // [introParagraph] div goes directly below the main heading with text-muted
        introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        sectionOne: {
          paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
          paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
        },

        sectionTwo: {
          mediumHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphThree] first sentence will be styled "italically" by applying a class to it with css
          paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
          // [paragraphFour] div has border to the left
          paragraphFour: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
          paragraphFive: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
        },
        sectionThree: {
          // [smallHeading] here is even smaller than that of section 2 in font-size
          smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphSix] is a numbered div
          paragraphSix: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. 2. In a nibh nec risus aliquam rutrum. 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
          paragraphSeven: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
          smallerHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphEight] EVERY sentence in this div is a unordered-list-style type point
          paragraphEight: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
          blogImage: "https://images.unsplash.com/photo-1565802527863-1353e4ebce91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=712&q=80",
          blogImageDescription: "coffee gaming and music",
          paragraphNine: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        },
        // [sectionFour] div is the conclusion
        sectionFour: {
          smallestHeading: "Nulla gravida ultrices dolor id sollicitudin",
          lastParagraph: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        }
      }

    }

  },
  {
    tag: "Music",
    body: {
      header: {
        mainHeading: "I will be traveling to Nepal for the second time this year",
        mainImage: "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2140&q=80"
      },
      content: {
        // [introParagraph] div goes directly below the main heading with text-muted
        introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        sectionOne: {
          paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
          paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
        },

        sectionTwo: {
          mediumHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphThree] first sentence will be styled "italically" by applying a class to it with css
          paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
          // [paragraphFour] div has border to the left
          paragraphFour: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
          paragraphFive: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
        },
        sectionThree: {
          // [smallHeading] here is even smaller than that of section 2 in font-size
          smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphSix] is a numbered div
          paragraphSix: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. 2. In a nibh nec risus aliquam rutrum. 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
          paragraphSeven: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
          smallerHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphEight] EVERY sentence in this div is a unordered-list-style type point
          paragraphEight: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
          blogImage: "https://images.unsplash.com/photo-1565802527863-1353e4ebce91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=712&q=80",
          blogImageDescription: "coffee gaming and music",
          paragraphNine: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        },
        // [sectionFour] div is the conclusion
        sectionFour: {
          smallestHeading: "Nulla gravida ultrices dolor id sollicitudin",
          lastParagraph: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        }
      }

    }

  },
  {
    tag: "Self",
    body: {
      header: {
        mainHeading: "I will be traveling to Nepal for the second time this year",
        mainImage: "https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2140&q=80"
      },
      content: {
        // [introParagraph] div goes directly below the main heading with text-muted
        introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        sectionOne: {
          paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
          paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
        },

        sectionTwo: {
          mediumHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphThree] first sentence will be styled "italically" by applying a class to it with css
          paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
          // [paragraphFour] div has border to the left
          paragraphFour: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
          paragraphFive: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
        },
        sectionThree: {
          // [smallHeading] here is even smaller than that of section 2 in font-size
          smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphSix] is a numbered div
          paragraphSix: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. 2. In a nibh nec risus aliquam rutrum. 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
          paragraphSeven: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
          smallerHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphEight] EVERY sentence in this div is a unordered-list-style type point
          paragraphEight: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
          blogImage: "https://images.unsplash.com/photo-1565802527863-1353e4ebce91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=712&q=80",
          blogImageDescription: "coffee gaming and music",
          paragraphNine: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        },
        // [sectionFour] div is the conclusion
        sectionFour: {
          smallestHeading: "Nulla gravida ultrices dolor id sollicitudin",
          lastParagraph: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        }
      }

    }

  }
  
]

const seedDB = function() {
  Blog.deleteMany({}, (err, success) => {
    if(err) {
      console.log("error deleting existing blogs: ", err);
    } else {
      data.forEach(function(post) {
        Blog.create(post, (err, createdBlog) => {
          if(err) {
            console.log("Error creating blogs: ", err);
          } else {
            Comment.create({
              author: "admin",
              text: "generic comment 101 :("
            }, (err, comment) => {
              if(err) {
                console.log("error creating comment: " + err);
              } else {
                createdBlog.comments.push(comment);
                createdBlog.save();
                console.log(createdBlog);
              }
            })
          }
        });
      })
    }
  })
}

module.exports = seedDB;