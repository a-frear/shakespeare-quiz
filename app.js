/**
 * Example store structure
 */
const store = {
    // 5 or more questions are required
    questions: [
      {
        question: 'Which actor claims to have seen his actual father\'s ghost on stage while playing Hamlet?',
        answers: [
          'Lawrence Olivier ',
          'Richard Burton',
          'Daniel Day Lewis',
          'Benedict Cumberbatch'
        ],
        correctAnswer: 'Daniel Day Lewis',
        explanation: 'Daniel Day Lewis claimed he saw his father\'s ghost on stage and left during the middle of performance. He has never appeared on stage again.'
        answerImg: '"img/day-lewis.png"'
      },
      {
        question: 'Which one of Shakespeare’s female characters has the most lines?',
        answers: [
          'Rosalind in "As You Like It"',
          'Juliet in "Romeo and Juliet"',
          'Cleopatra in "Anthony and Cleopatra"',
          'Portia in "Merchant of Venice"'
        ],
        correctAnswer: 'Rosalind in "As You Like It"',
        explanation: 'Rosalind is Shakespeare’s biggest female role, with 685 lines, compared with Cleopatra’s 678, Portia’s 574 and Juliet’s 542. Romeo has more lines (617) than Juliet... which may have something to do with Juliet pretending to be dead for part of the play. Hamlet has the most lines of any Shakespearean character with 1,506 (he has a lot he is trying to figure out!). Since As You Like It was written right before Hamlet, a lot of comparisons have been drawn between the characters of Rosalind and the Danish prince.'
        answerImg: '"img/rosalind.jpeg"'
      },
      {
        question: 'What did Shakespeare leave his wife in his will?',
        answers: [
          'His manuscripts',
          'Half his money',
          'His dog',
          'His second-best bed'
        ],
        correctAnswer: 'His second-best bed',
        explanation: 'Since Shakespeare did spend most of his life in London away from his wife Anne, its easy to think this may have been a slight. But the best bed was regarded as "an heirloom piece," to be passed to an heir rather than a spouse. It is also likely that the best bed would have been reserved for guests, meaning the “second-best” was the bed that William and Anne shared. Shakespeare died at home with his family in Stratford-upon-Avon when he was 52 years old.'
        answerImg: '"img/second-best-bed.jpeg"'
      },
      {
        question: 'Which of these plays were not written during an outbreak of the plague?',
        answers: [
          'King Lear',
          'Hamlet',
          'Anthony and Cleopatra',
          'Macbeth'
        ],
        correctAnswer: 'Hamlet',
        explanation: 'King Lear, Macbeth, and Anthony and Cleopatra were all written in 1606, during a bad outbreak of the Bubonic plague. All the theaters were shut down, so maybe Shakespeare had more time to spend writing.'
        answerImg: '"img/bubonic-plague.jpg"'
      },
      {
        question: 'Which of these words appear most often in Shakespeare's work?',
        answers: [
          'Blood',
          'Love',
          'King',
          'Sun'
        ],
        correctAnswer: 'Love',
        explanation: '"Love" appears 2,191 times in Shakespeare works, according to the website Open Source Shakespeare. Among the plays, "Two Gentlemen of Verona" leads the pack with occurrences in 104 speeches, followed by "Romeo and Juliet" (94 speeches) and "A Midsummer Night\'s Dream" (79 speeches). "Hate" occurs only 184 times in Shakespeare\'s work.'
        answerImg: '"img/love-shakespeare.jpg"'
      },
      {
        question: 'Honorificabilitudinitatibus, the longest word mentioned in any of Shakespeare’s plays, is spoken in which play?',
        answers: [
          'Henry VIII',
          'King Lear',
          'The Merry Wives of Windsor',
          'Love\'s Labour\'s Lost'
        ],
        correctAnswer: 'Love\'s Labour\'s Lost',
        explanation: 'This word is spoken by Costard in Act 5, Scene 1 of Love\'s Labor\'s Lost. This play is known for its complicated and dense language.'
        answerImg: '"img/loves-labours-lost.jpg"'
      },
      {
        question: 'What was the favorite Shakespearean line of Supreme Court Justice Ruth Bader Ginsburg?',
        answers: [
          '“The first thing we do, let\'s kill all the lawyers.”',
          '“I had rather hear my dog bark at a crow, than a man swear he loves me.”',
          '“This above all: to thine own self be true.”',
          '“There is nothing either good or bad, but thinking makes it so.”'
        ],
        correctAnswer: '“The first thing we do, let\'s kill all the lawyers.”',
        explanation: 'RBG was a huge Shakespeare fan and even made cameos in a few professional produtions. She performed in Henry IV and said of her role: "I had Dick the butcher’s part, with the famous line, ‘First thing we do, let’s kill all the lawyers.’ And then I asked if I could ad-lib an addition, I checked this out in advance, and the addition was, \'and next the reporters.\'"'
        answerImg: '"img/rbg.jpg"'
      },
      
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
  };
  
  /**
   * 
   * Technical requirements:
   * 
   * Your app should include a render() function, that regenerates the view each time the store is updated. 
   * See your course material and access support for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   * 
   */
  
  /********** TEMPLATE GENERATION FUNCTIONS **********/
  
  // These functions return HTML templates
  
  /********** RENDER FUNCTION(S) **********/
  
  // This function conditionally replaces the contents of the <main> tag based on the state of the store
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)