
$(function () {

  const quizData = [
    {
      question: "What is the occasion?",
      answers: [
        { text: "Wedding", result: "Bridal Gold Set" },
        { text: "Office", result: "Minimal Jewelry" },
        { text: "Party", result: "Statement Necklace" }
      ]
    },
    {
      question: "Preferred metal?",
      answers: [
        { text: "Yellow Gold", result: "22K Gold" },
        { text: "Rose Gold", result: "Rose Gold" },
        { text: "White", result: "Platinum" }
      ]
    }
  ];

  let index = 0;
  let selections = [];

  function loadQuestion() {
    const q = quizData[index];
    $("#question-text").text(q.question);
    $("#answer-buttons").empty();

    q.answers.forEach(a => {
      $("<button class='btn btn-outline-warning'>")
        .text(a.text)
        .click(() => {
          selections.push(a.result);
          index++;
          index < quizData.length ? loadQuestion() : showResult();
        })
        .appendTo("#answer-buttons");
    });
  }

  function showResult() {
    $("#question-box").hide();
    $("#result-box").show();
    $("#result-text").text(selections.join(" + "));
  }

  loadQuestion();
});
