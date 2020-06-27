const mongoose = require("mongoose");
const Blog = require("./models/blog");
const Comment = require("./models/comment");

const data = [
  {
    tag: "Life",
    body: {
      header: {
        mainHeading: "Intra vs Inter Communication",
        mainImage: "https://i.imgur.com/v4tRlsD.png"
      },
      content: {
        // [introParagraph] div goes directly below the main heading with text-muted
        introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        sectionOne: {
          paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
          paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
        },

        sectionTwo: {
          smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphOne] first sentence will be styled "italically" by applying a class to it with css
          paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
          // [highlightedParagraph] div has border to the left
          highlightedParagraph: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
          paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
        },
        sectionThree: {
          // [smallHeading] here is even smaller than that of section 2 in font-size
          smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphOne] is a numbered div
          paragraphOne: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. <br>2. In a nibh nec risus aliquam rutrum.<br> 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
          paragraphTwo: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
          smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
          // [paragraphThree] EVERY sentence in this div is a unordered-list-style type point
          paragraphThree: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
          blogImage: "https://i.imgur.com/v4tRlsD.png",
          blogImageDescription: "coffee gaming and music",
          paragraphFour: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        },
        // [sectionFour] div is the conclusion
        sectionFour: {
          smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
          paragraphOne: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
        }
      }

    }

  },
    
  {
      tag: "Code",
      body: {
        header: {
          mainHeading: "Intra vs Inter Communication",
          mainImage: "https://i.imgur.com/v4tRlsD.png"
        },
        content: {
          // [introParagraph] div goes directly below the main heading with text-muted
          introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
          sectionOne: {
            paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
            paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
          },

          sectionTwo: {
            smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
            // [paragraphOne] first sentence will be styled "italically" by applying a class to it with css
            paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
            // [highlightedParagraph] div has border to the left
            highlightedParagraph: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
            paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
          },
          sectionThree: {
            // [smallHeading] here is even smaller than that of section 2 in font-size
            smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
            // [paragraphOne] is a numbered div
            paragraphOne: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. <br>2. In a nibh nec risus aliquam rutrum.<br> 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
            paragraphTwo: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
            smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
            // [paragraphThree] EVERY sentence in this div is a unordered-list-style type point
            paragraphThree: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
            blogImage: "https://i.imgur.com/v4tRlsD.png",
            blogImageDescription: "coffee gaming and music",
            paragraphFour: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
          },
          // [sectionFour] div is the conclusion
          sectionFour: {
            smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
            paragraphOne: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
          }
        }

      }

  },
      
  {
        tag: "Music",
        body: {
          header: {
            mainHeading: "Intra vs Inter Communication",
            mainImage: "https://i.imgur.com/v4tRlsD.png"
          },
          content: {
            // [introParagraph] div goes directly below the main heading with text-muted
            introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            sectionOne: {
              paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
              paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
            },

            sectionTwo: {
              smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
              // [paragraphOne] first sentence will be styled "italically" by applying a class to it with css
              paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
              // [highlightedParagraph] div has border to the left
              highlightedParagraph: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
              paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
            },
            sectionThree: {
              // [smallHeading] here is even smaller than that of section 2 in font-size
              smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
              // [paragraphOne] is a numbered div
              paragraphOne: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. <br>2. In a nibh nec risus aliquam rutrum.<br> 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
              paragraphTwo: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
              smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
              // [paragraphThree] EVERY sentence in this div is a unordered-list-style type point
              paragraphThree: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
              blogImage: "https://i.imgur.com/v4tRlsD.png",
              blogImageDescription: "coffee gaming and music",
              paragraphFour: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
            },
            // [sectionFour] div is the conclusion
            sectionFour: {
              smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
              paragraphOne: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
            }
          }

        }

  },
  {
          tag: "Self",
          body: {
            header: {
              mainHeading: "Intra vs Inter Communication",
              mainImage: "https://i.imgur.com/v4tRlsD.png"
            },
            content: {
              // [introParagraph] div goes directly below the main heading with text-muted
              introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
              sectionOne: {
                paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
                paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
              },

              sectionTwo: {
                smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
                // [paragraphOne] first sentence will be styled "italically" by applying a class to it with css
                paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
                // [highlightedParagraph] div has border to the left
                highlightedParagraph: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
                paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
              },
              sectionThree: {
                // [smallHeading] here is even smaller than that of section 2 in font-size
                smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
                // [paragraphOne] is a numbered div
                paragraphOne: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. <br>2. In a nibh nec risus aliquam rutrum.<br> 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
                paragraphTwo: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
                smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
                // [paragraphThree] EVERY sentence in this div is a unordered-list-style type point
                paragraphThree: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
                blogImage: "https://i.imgur.com/v4tRlsD.png",
                blogImageDescription: "coffee gaming and music",
                paragraphFour: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
              },
              // [sectionFour] div is the conclusion
              sectionFour: {
                smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
                paragraphOne: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
              }
            }

          }

  },
    {
      tag: "Life",
      body: {
        header: {
          mainHeading: "Intra vs Inter Communication",
          mainImage: "https://i.imgur.com/v4tRlsD.png"
        },
        content: {
          // [introParagraph] div goes directly below the main heading with text-muted
          introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
          sectionOne: {
            paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
            paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
          },

          sectionTwo: {
            smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
            // [paragraphOne] first sentence will be styled "italically" by applying a class to it with css
            paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
            // [highlightedParagraph] div has border to the left
            highlightedParagraph: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
            paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
          },
          sectionThree: {
            // [smallHeading] here is even smaller than that of section 2 in font-size
            smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
            // [paragraphOne] is a numbered div
            paragraphOne: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. <br>2. In a nibh nec risus aliquam rutrum.<br> 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
            paragraphTwo: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
            smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
            // [paragraphThree] EVERY sentence in this div is a unordered-list-style type point
            paragraphThree: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
            blogImage: "https://i.imgur.com/v4tRlsD.png",
            blogImageDescription: "coffee gaming and music",
            paragraphFour: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
          },
          // [sectionFour] div is the conclusion
          sectionFour: {
            smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
            paragraphOne: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
          }
        }

      }

    },
      {
        tag: "Music",
        body: {
          header: {
            mainHeading: "Intra vs Inter Communication",
            mainImage: "https://i.imgur.com/v4tRlsD.png"
          },
          content: {
            // [introParagraph] div goes directly below the main heading with text-muted
            introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            sectionOne: {
              paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
              paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
            },

            sectionTwo: {
              smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
              // [paragraphOne] first sentence will be styled "italically" by applying a class to it with css
              paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
              // [highlightedParagraph] div has border to the left
              highlightedParagraph: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
              paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
            },
            sectionThree: {
              // [smallHeading] here is even smaller than that of section 2 in font-size
              smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
              // [paragraphOne] is a numbered div
              paragraphOne: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. <br>2. In a nibh nec risus aliquam rutrum.<br> 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
              paragraphTwo: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
              smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
              // [paragraphThree] EVERY sentence in this div is a unordered-list-style type point
              paragraphThree: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
              blogImage: "https://i.imgur.com/v4tRlsD.png",
              blogImageDescription: "coffee gaming and music",
              paragraphFour: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
            },
            // [sectionFour] div is the conclusion
            sectionFour: {
              smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
              paragraphOne: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
            }
          }

        }

      },
        {
          tag: "Self",
          body: {
            header: {
              mainHeading: "Intra vs Inter Communication",
              mainImage: "https://i.imgur.com/v4tRlsD.png"
            },
            content: {
              // [introParagraph] div goes directly below the main heading with text-muted
              introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
              sectionOne: {
                paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
                paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
              },

              sectionTwo: {
                smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
                // [paragraphOne] first sentence will be styled "italically" by applying a class to it with css
                paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
                // [highlightedParagraph] div has border to the left
                highlightedParagraph: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
                paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
              },
              sectionThree: {
                // [smallHeading] here is even smaller than that of section 2 in font-size
                smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
                // [paragraphOne] is a numbered div
                paragraphOne: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. <br>2. In a nibh nec risus aliquam rutrum.<br> 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
                paragraphTwo: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
                smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
                // [paragraphThree] EVERY sentence in this div is a unordered-list-style type point
                paragraphThree: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
                blogImage: "https://i.imgur.com/v4tRlsD.png",
                blogImageDescription: "coffee gaming and music",
                paragraphFour: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
              },
              // [sectionFour] div is the conclusion
              sectionFour: {
                smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
                paragraphOne: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
              }
            }

          }

        },
          {
            tag: "Life",
            body: {
              header: {
                mainHeading: "Intra vs Inter Communication",
                mainImage: "https://i.imgur.com/v4tRlsD.png"
              },
              content: {
                // [introParagraph] div goes directly below the main heading with text-muted
                introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
                sectionOne: {
                  paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis.",
                  paragraphTwo: "Nulla gravida ultrices dolor id sollicitudin. Curabitur metus nulla, tempus eget lacus et, maximus ultricies est. Ut pharetra lacus quis urna mattis dapibus. Nam posuere ex vitae urna tincidunt mollis. Pellentesque ullamcorper, felis id fermentum venenatis, metus ex rhoncus urna, at maximus sem ipsum sed ex. Aenean vel iaculis felis. Vestibulum id euismod lorem, quis sagittis sapien. Donec egestas, erat bibendum mollis porta, risus elit tempor enim, at consectetur justo diam quis turpis."
                },

                sectionTwo: {
                  smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
                  // [paragraphOne] first sentence will be styled "italically" by applying a class to it with css
                  paragraphOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum.",
                  // [highlightedParagraph] div has border to the left
                  highlightedParagraph: "Aliquam dapibus non mi vitae sodales. Quisque vitae consectetur tellus, a eleifend augue. Vestibulum vulputate mollis erat non commodo. In eget libero pretium dolor fermentum tempor et ac ante. Nullam mattis massa et urna lacinia hendrerit vitae vitae est.",
                  paragraphThree: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit, leo ac consectetur ornare, nunc elit molestie ex, ut porta leo dolor vel sem. Sed pretium odio eu augue feugiat faucibus. Maecenas feugiat, tortor vel interdum tincidunt, nisl libero vulputate nibh, sit amet feugiat dolor diam vitae magna. Morbi vel leo dignissim, auctor dui at, placerat quam. In a nibh nec risus aliquam rutrum. Sed quis tristique ante. Praesent ac quam consectetur, finibus lectus eget, luctus felis. Nunc ac nulla sit amet tellus ultricies lobortis. Integer in mollis ex, a consectetur purus. Ut ac ipsum leo. Nam augue lorem, maximus in tellus non, bibendum malesuada tortor. Donec ullamcorper dui et pellentesque dapibus. Vivamus at commodo tortor, at eleifend turpis. Nullam erat mi, aliquam a massa ac, dignissim consectetur sem."
                },
                sectionThree: {
                  // [smallHeading] here is even smaller than that of section 2 in font-size
                  smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
                  // [paragraphOne] is a numbered div
                  paragraphOne: "1. Morbi vel leo dignissim, auctor dui at, placerat quam. <br>2. In a nibh nec risus aliquam rutrum.<br> 3. Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue.",
                  paragraphTwo: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum. Proin porttitor mi sed lacus iaculis, sit amet varius risus commodo. Curabitur malesuada metus libero, id pellentesque leo tristique id. Fusce vehicula neque a lectus egestas rutrum.",
                  smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
                  // [paragraphThree] EVERY sentence in this div is a unordered-list-style type point
                  paragraphThree: "Aenean sapien tellus, rhoncus id nunc vitae, blandit bibendum augue. Sed congue ipsum quis placerat ultrices. Curabitur suscipit risus ex, a tincidunt mi dictum varius. Cras at sapien quis ipsum varius fermentum",
                  blogImage: "https://i.imgur.com/v4tRlsD.png",
                  blogImageDescription: "coffee gaming and music",
                  paragraphFour: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
                },
                // [sectionFour] div is the conclusion
                sectionFour: {
                  smallHeading: "Nulla gravida ultrices dolor id sollicitudin",
                  paragraphOne: "Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus. Pellentesque ac urna orci. Quisque ac semper odio. Sed consectetur, dui ac convallis posuere, massa diam convallis purus, et sagittis libero lectus at risus. Pellentesque facilisis viverra metus, quis congue lacus. Duis luctus ornare est ut blandit. Cras dapibus ut massa sit amet interdum. In in felis nec lacus facilisis pharetra. Donec at lorem lacus."
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