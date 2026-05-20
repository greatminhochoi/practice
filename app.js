const allQuestions = Array.isArray(window.QUIZ_QUESTIONS) ? window.QUIZ_QUESTIONS : [];

const kindLabels = {
  multiple: "4지선다",
  short: "단답형",
  essay: "서술형",
};

const state = {
  questions: [...allQuestions],
  answers: new Map(),
};

const quizList = document.querySelector("#quizList");
const scoreText = document.querySelector("#scoreText");
const progressText = document.querySelector("#progressText");
const accuracyText = document.querySelector("#accuracyText");
const shuffleBtn = document.querySelector("#shuffleBtn");

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeAnswer(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replaceAll(/\s+/g, "");
}

function shuffle(items) {
  const copied = [...items];
  for (let i = copied.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }
  return copied;
}

function renderMeta(question) {
  return `<span class="tag">${kindLabels[question.kind] ?? "문제"}</span>`;
}

function renderPassage(question) {
  if (!question.passage) return "";
  return `<pre class="passage"><code>${escapeHtml(question.passage)}</code></pre>`;
}

function renderMultipleQuestion(question) {
  const selected = state.answers.get(question.id);
  const answered = selected !== undefined;
  const choices = question.choices
    .map((choice, choiceIndex) => {
      const isCorrect = choiceIndex === question.answer;
      const isSelected = choiceIndex === selected;
      const resultClass = answered && isCorrect ? " correct" : answered && isSelected ? " wrong" : "";
      return `
        <button class="choice${resultClass}" type="button" data-id="${escapeHtml(question.id)}" data-choice="${choiceIndex}">
          <span class="num">${choiceIndex + 1}</span>
          <span>${escapeHtml(choice)}</span>
        </button>
      `;
    })
    .join("");
  const resultText =
    answered && selected === question.answer
      ? "정답입니다."
      : answered
        ? `오답입니다. 정답은 ${question.answer + 1}번입니다.`
        : "";

  return `
    <div class="choices">${choices}</div>
    <p class="feedback${answered ? " show" : ""}">
      <strong>${escapeHtml(resultText)}</strong>
      ${question.explanation ? `<br>${escapeHtml(question.explanation)}` : ""}
    </p>
  `;
}

function renderWrittenQuestion(question) {
  const answer = state.answers.get(question.id) ?? "";
  const answered = answer !== "";
  const isShort = question.kind === "short";
  const normalizedUserAnswer = normalizeAnswer(answer);
  const normalizedCorrectAnswer = normalizeAnswer(question.answerText);
  const isCorrect = isShort && normalizedUserAnswer === normalizedCorrectAnswer;
  const field = isShort
    ? `<input class="answer-input" data-id="${escapeHtml(question.id)}" value="${escapeHtml(answer)}" placeholder="정답 입력">`
    : `<textarea class="answer-input" data-id="${escapeHtml(question.id)}" placeholder="답안 작성">${escapeHtml(answer)}</textarea>`;
  const resultText = isShort
    ? isCorrect
      ? "정답입니다."
      : "정답을 확인해 보세요."
    : "예시 답안과 비교해 보세요.";

  return `
    <div class="written-box">
      ${field}
      <button class="check-btn" type="button" data-id="${escapeHtml(question.id)}">정답 확인</button>
    </div>
    <p class="feedback${answered ? " show" : ""}">
      <strong>${escapeHtml(resultText)}</strong>
      <br>정답: ${escapeHtml(question.answerText)}
      ${question.explanation ? `<br>${escapeHtml(question.explanation)}` : ""}
    </p>
  `;
}

function renderQuestion(question, index) {
  const body =
    question.kind === "multiple"
      ? renderMultipleQuestion(question)
      : renderWrittenQuestion(question);

  return `
    <article class="question-card">
      <div class="question-head">
        <div class="meta">${renderMeta(question)}</div>
      </div>
      <p class="question-title">${index + 1}. ${escapeHtml(question.question)}</p>
      ${renderPassage(question)}
      ${body}
    </article>
  `;
}

function updateSummary() {
  const total = state.questions.length;
  let correct = 0;
  let checked = 0;
  let scored = 0;

  state.answers.forEach((answer, id) => {
    const question = state.questions.find((item) => item.id === id);
    if (!question) return;
    checked += 1;
    if (question.kind === "essay") return;
    scored += 1;
    if (question.kind === "multiple" && answer === question.answer) correct += 1;
    if (question.kind === "short" && normalizeAnswer(answer) === normalizeAnswer(question.answerText)) {
      correct += 1;
    }
  });

  const accuracy = scored ? Math.round((correct / scored) * 100) : 0;
  scoreText.textContent = `${correct} / ${scored}`;
  progressText.textContent = `총 ${total}문제 중 ${checked}문제 확인`;
  accuracyText.textContent = `정답률 ${accuracy}%`;
}

function render() {
  if (!state.questions.length) {
    quizList.innerHTML = `<div class="empty">표시할 문제가 없습니다.</div>`;
    updateSummary();
    return;
  }

  quizList.innerHTML = state.questions.map(renderQuestion).join("");
  updateSummary();
}

function focusCurrentCard(id) {
  const card = [...document.querySelectorAll("[data-id]")]
    .find((element) => element.dataset.id === id)
    ?.closest(".question-card");
  card?.scrollIntoView({ block: "nearest" });
}

function setChoiceAnswer(id, choice) {
  state.answers.set(id, Number(choice));
  render();
  focusCurrentCard(id);
}

function checkWrittenAnswer(id) {
  const input = document.querySelector(`.answer-input[data-id="${CSS.escape(id)}"]`);
  state.answers.set(id, input?.value.trim() ?? "");
  render();
  focusCurrentCard(id);
}

shuffleBtn.addEventListener("click", () => {
  state.questions = shuffle(state.questions);
  state.answers.clear();
  render();
});

quizList.addEventListener("click", (event) => {
  const choice = event.target.closest(".choice");
  if (choice) {
    setChoiceAnswer(choice.dataset.id, choice.dataset.choice);
    return;
  }

  const check = event.target.closest(".check-btn");
  if (check) {
    checkWrittenAnswer(check.dataset.id);
  }
});

render();
