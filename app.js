/**
 * Example store structure
 */
const STORE = {
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
        correctAnswer: 'c',
        answerText: 'Daniel Day Lewis',
        explanation: 'Daniel Day Lewis claimed he saw his father\'s ghost on stage and left during the middle of the performance. He has never appeared on stage again.',
        answerImg: '"./img/day-lewis.png"',
        answerImgAlt: '"Daniel Day Lewis as Hamlet"'
      },
      {
        question: 'Which one of Shakespeare’s female characters has the most lines?',
        answers: [
          'Rosalind in "As You Like It"',
          'Juliet in "Romeo and Juliet"',
          'Cleopatra in "Anthony and Cleopatra"',
          'Portia in "Merchant of Venice"'
        ],
        correctAnswer: 'a',
        answerText: 'Rosalind in "As You Like It"',
        explanation: 'Rosalind is Shakespeare’s biggest female role, with 685 lines, compared with Cleopatra’s 678, Portia’s 574 and Juliet’s 542. Romeo has more lines (617) than Juliet... which may have something to do with Juliet pretending to be dead for part of the play. Hamlet has the most lines of any Shakespearean character with 1,506 (he has a lot he is trying to figure out). Since "As You Like It" was written right before "Hamlet," a lot of comparisons have been drawn between the two leading characters... they are both big talkers!',
        answerImg: '"./img/rosalind.jpeg"',
        answerImgAlt: '"Helen Mirren as Rosalind"'
      },
      {
        question: 'What did Shakespeare leave his wife in his will?',
        answers: [
          'His manuscripts',
          'Half his money',
          'His dog',
          'His second-best bed'
        ],
        correctAnswer: 'd',
        answerText: 'His second-best bed',
        explanation: 'Since Shakespeare spent most of his life in London away from his wife Anne, it\'s easy to think this may have been a slight. But the best bed was regarded as "an heirloom piece," to be passed to an heir rather than a spouse. It is also likely that the best bed would have been reserved for guests, meaning the “second-best” was the bed that William and Anne shared. Shakespeare died at home with his family in Stratford-upon-Avon when he was 52 years old.',
        answerImg: '"./img/second-best-bed.jpeg"',
        answerImgAlt: '"An Elizabethan bed"'

      },
      {
        question: 'Which of these plays was not written during an outbreak of the plague?',
        answers: [
          'King Lear',
          'Hamlet',
          'Anthony and Cleopatra',
          'Macbeth'
        ],
        correctAnswer: 'b',
        answerText: 'Hamlet',
        explanation: '"King Lear," "Macbeth," and "Anthony and Cleopatra" were all written in 1606, during a bad outbreak of the Bubonic plague. All the theaters were shut down, so maybe Shakespeare had more time to spend writing.',
        answerImg: '"./img/bubonic-plague.jpg"',
        answerImgAlt: '"An Elizabethan drawing symbolizing the Bubonic Plague"'
      },
      {
        question: 'Which of these words appear most often in Shakespeare\'s work?',
        answers: [
          'Blood',
          'Love',
          'King',
          'Sun'
        ],
        correctAnswer: 'b',
        answerText: 'Love',
        explanation: '"Love" appears 2,191 times in Shakespeare works, according to the website Open Source Shakespeare. Among the plays, "Two Gentlemen of Verona" leads the pack with occurrences in 104 speeches, followed by "Romeo and Juliet" (94 speeches) and "A Midsummer Night\'s Dream" (79 speeches). "Hate" occurs only 184 times in Shakespeare\'s work.',
        answerImg: '"./img/love-shakespeare.jpg"',
        answerImgAlt: '"Claire Danes and Leonardo DiCaprio in Romeo and Juliet"'
      },
      {
        question: 'Honorificabilitudinitatibus, the longest word mentioned in any of Shakespeare’s plays, is spoken in which play?',
        answers: [
          'Henry VIII',
          'King Lear',
          'The Merry Wives of Windsor',
          'Love\'s Labour\'s Lost'
        ],
        correctAnswer: 'd',
        answerText: 'Love\'s Labour\'s Lost',
        explanation: 'This word is spoken by Costard in Act 5, Scene 1 of "Love\'s Labor\'s Lost." This play is known for its complicated and dense language.',
        answerImg: '"./img/loves-labours-lost.jpg"',
        answerImgAlt: '"A scene from Love\'s Labour\'s Lost"'
      },
      {
        question: 'What was the favorite Shakespearean line of Supreme Court Justice Ruth Bader Ginsburg?',
        answers: [
          '“The first thing we do, let\'s kill all the lawyers.”',
          '“I had rather hear my dog bark at a crow, than a man swear he loves me.”',
          '“This above all: to thine own self be true.”',
          '“There is nothing either good or bad, but thinking makes it so.”'
        ],
        correctAnswer: 'a',
        answerText: '“The first thing we do, let\'s kill all the lawyers.”',
        explanation: 'RBG was a huge Shakespeare fan and even made cameos in a few professional produtions. She performed in Henry IV and said of her role: "I had Dick the butcher’s part, with the famous line, ‘First thing we do, let’s kill all the lawyers.’ And then I asked if I could ad-lib an addition, I checked this out in advance, and the addition was, \'and next the reporters.\'"',
        answerImg: '"./img/rbg.jpg"',
        answerImgAlt: '"RBG on stage"'
      },
      
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0,
    outcomes: [
      {
        ansCorrect: 7,
        outcomeImg: '"./img/results-five-twelfth-night.jpg"',
        outcomeImgAlt: '"A scene from Twelfth Night"',
        quote: '‘Some are born great, some achieve greatness, and some have greatness thrust upon them.’',
        play: '(Twelfth Night, Act 2, Scene 5)'
      },
      {
        ansCorrect: 6,
        outcomeImg: '"./img/sarah-bernhardt-hamlet.jpg"',
        outcomeImgAlt: '"Sarah Bernhardt as Hamlet"',
        quote: '‘We know what we are, but know not what we may be.’',
        play: '(Hamlet, Act 4, Scene 5)'
      },
      {
        ansCorrect: 5,
        outcomeImg: '"./img/result-four-midsummer.jpg"',
        outcomeImgAlt: '"A scene from A Midsummer\'s Night Dream"',
        quote: '‘The course of true love never did run smooth.’',
        play: '(A Midsummer Night’s Dream, Act 1, Scene 1)'
      },
      { 
        ansCorrect: 4,
        outcomeImg: '"./img/hamlet-benedict-cumberbatch.jpg"',
        outcomeImgAlt: '"Benedict Cumberbatch as Hamlet"',
        quote: '‘There are more things in heaven and earth, Horatio, than are dreamt of in your philosophy.’',
        play: '(Hamlet, Act 1, Scene 5)'
      },
      {
        ansCorrect: 3,
        outcomeImg: '"./img/result-three-timon.jpg"',
        outcomeImgAlt: '"A scene from Timon of Athens"',
        quote: '‘We have seen better days.’',
        play: '(Timon of Athens, Act 4, Scene 2)'
      },
      {
        ansCorrect: 2,
        outcomeImg: '"./img/result-two-caesar.jpg"',
        outcomeImgAlt: '"A scene from Timon of Athens"',
        quote: '‘But, for my own part, it was Greek to me.’',
        play: '(Julius Caesar, Act 1, Scene 2)'
      },
      {
        ansCorrect: 1,
        outcomeImg: '"./img/tucci-puck.jpg"',
        outcomeImgAlt: '"Scene from A Midsummer\'s Night Dream"',
        quote: '‘Lord, what fools these mortals be!’',
        play: '(A Midsummer Night’s Dream, Act 1, Scene 1)'
      },
      {
        ansCorrect: 0,
        outcomeImg: '"./img/result-zero-lear.jpg"',
        outcomeImgAlt: '"A scene from King Lear"',
        quote: '‘Nothing will come of nothing.’',
        play: '(King Lear, Act 1, Scene 1)'
      }
    ],
   
    intro: {
        introImg: '"./img/shakespeare-book.jpg"',
        introImgAlt: '"The plays of William Shakespeare"'
    }
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
  function generateIntroElement() {
    return `
    <div class="item">
    <img src="./img/shakespeare-book.jpg" alt="The plays of William Shakespeare">
    </div>
    <div class="item">
    <button id="start-button">Start here!</button></a>
    <h4>“Go wisely and slowly. Those who rush stumble and fall.”</h4>
    </div>`;
  }

function generateQuestionElement() {
    i = STORE.questionNumber - 1; 
  const number = STORE.questionNumber;
  const currentQuestion= STORE.questions[i].question;
  const answerA= STORE.questions[i].answers[0];
  const answerB= STORE.questions[i].answers[1];
  const answerC= STORE.questions[i].answers[2];
  const answerD= STORE.questions[i].answers[3];
  const numCorrect=STORE.score;
  const numQues= STORE.questionNumber - 1;

    return `
    <div class ="item">
      <h4>Question #${number}</h4>
      <h5>Current Score: ${numCorrect}/${numQues}</h5>
      <h3 class="question">${currentQuestion}</h3>
      <div class ="item">
        <form>
          <label for='option-a'>
          <input type='radio' name='option' value='a' id='option-a'/>
          ${answerA}</label>
          <br>
          <label for='option-b'>
          <input type='radio' name='option' value='b' id='option-b'/>
          ${answerB}</label>
          <br>
          <label for='option-c'>
          <input type='radio' name='option' value='c' id='option-c'/>
          ${answerC}</label>
          <br>
          <label for='option-d'>
          <input type='radio' name='option' value='d' id='option-d'/>
          ${answerD}</label>
        </form>
      </div>
      <div class ="item">
      <button id="submit-answer">Submit</button>
      </div>`
  
};

function generateAnswerElement() {
  i = STORE.questionNumber - 1; 
  const currentAnswer= STORE.questions[i].answerText;
  const currentAnswerImage= STORE.questions[i].answerImg;
  const currentAnswerAlt= STORE.questions[i].answerImgAlt;
  const currentExplanation=STORE.questions[i].explanation;

  if (STORE.questionNumber < 7) {
  
  return `
    <div class="item">
    <h2 class="correct-incorrect">Incorrect</h2>
    <h3 id="answer">${currentAnswer}</h3>
  </div>
  <div class="item">
    <img src=${currentAnswerImage} id="answer-img" alt=${currentAnswerAlt}></main>
  </div>
  <div class="item">
      <p id="explanation">${currentExplanation}</p>
  </div>
  <div class="item">
      <button id="next-question">Next question</button></a>
  </div>`
  }

  if (STORE.questionNumber = 7) {
    return `
    <div class="item">
    <h2 class="correct-incorrect">Incorrect</h2>
    <h3 id="answer">${currentAnswer}</h3>
  </div>
  <div class="item">
    <img src=${currentAnswerImage} id="answer-img" alt=${currentAnswerAlt}></main>
  </div>
  <div class="item">
      <p id="explanation">${currentExplanation}</p>
  </div>
  <div class="item">
      <button id="result">Result</button></a>
  </div>`

  }

}

  function generateOutcomeElement() {
  const score = STORE.score;
  for (let i=0; i<STORE.outcomes.length; i++) {
    if (score === STORE.outcomes[i].ansCorrect) {
      return `
      <div class="item">
        <h1>Final Score: <span id="number-correct">${score}</span>/7</h1>
        <div class="item">
        <img src=${STORE.outcomes[i].outcomeImg} alt=${STORE.outcomes[i].outcomeImgAlt}>
      </div>
        <h2 id="result-quote">${STORE.outcomes[i].quote}</h2>
        <h3 id="result-play">${STORE.outcomes[i].play}</h3>
      </div>
      <div class="item">
        <button id="start-over">Once more unto the breach!</button>
        </div>`  
      }
    }
  }
  
  /********** RENDER FUNCTION(S) **********/
  
  // This function conditionally replaces the contents of the <main> tag based on the state of the store

  function renderIntro() {
    $('main').html(generateIntroElement());
  }

  function renderQuestion() {
    $('main').html(generateQuestionElement());
  }

 function renderAnswer() {
  $('main').html(generateAnswerElement());
}

 function renderOutcome() {
  $('main').html(generateOutcomeElement());
 }
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)

  function startQuiz() {
    $('main').on('click', '#start-button', function (e) {
      STORE.questionNumber = 1;
      console.log(STORE.questionNumber);
      renderQuestion();
    });
  };


  function submitAnswer() {
    $('main').on('click', '#submit-answer', function (e) {
      console.log('submitting answer');
    i = STORE.questionNumber - 1; 
    const userAnswer = $("input[type=radio]:checked").val();
    console.log(userAnswer);
    const correctAnswer = STORE.questions[i].correctAnswer; 
    console.log(correctAnswer);

    renderAnswer();
    if (userAnswer === correctAnswer) {
      console.log('correct');
      $('.correct-incorrect').text('Correct');
      STORE.score++;
      console.log('score:' + STORE.score);
    }
    }
    );
  }

  function nextQuestion() {
    $('main').on('click', '#next-question', function (e) {
      STORE.questionNumber++;
      console.log(STORE.questionNumber);
      renderQuestion();
    });
  };

  

  function result() {
    $('main').on('click', '#result', function (e) {
      renderOutcome();
    });

  }

  function startOver() {
    $('main').on('click', '#start-over', function (e) {
      console.log('render intro');
      STORE.score = 0;
      renderIntro();
    });
  }

  /* Initializer function */
function initializer () {
  renderIntro();
  startQuiz();
  submitAnswer();
  nextQuestion();
  result();
  startOver();
};

$(initializer)