
const topics = [
  {
    id: "basics", title: "Python Basics", emoji: "🐍",
    description: "Syntax, indentation and output",
    notes: [
      "Python uses indentation to define code blocks.",
      "Use # to write a single-line comment.",
      "print() displays information; input() reads user input as a string.",
      "Python is case-sensitive: name and Name are different."
    ],
    code: 'print("Hello, Python!")\nname = input("Your name: ")\nprint("Hello,", name)'
  },
  {
    id: "variables", title: "Variables & Data Types", emoji: "📦",
    description: "Store and work with different values",
    notes: [
      "Variables are created when you assign a value; no declaration keyword is needed.",
      "Common types: int, float, str and bool.",
      "Use type(value) to inspect a value's type.",
      "Convert values using int(), float() and str() when appropriate."
    ],
    code: 'age = 18\nprice = 12.5\nname = "Asha"\nis_ready = True\nprint(type(age))'
  },
  {
    id: "conditions", title: "Conditions & Loops", emoji: "🔁",
    description: "Control flow and repetition",
    notes: [
      "if, elif and else select which block runs.",
      "Comparison operators include ==, !=, <, >, <= and >=.",
      "for loops iterate over sequences; while loops repeat while a condition is true.",
      "range(5) produces 0, 1, 2, 3 and 4.",
      "break exits a loop; continue skips to the next iteration."
    ],
    code: 'for number in range(1, 4):\n    if number == 2:\n        continue\n    print(number)'
  },
  {
    id: "functions", title: "Functions", emoji: "🧩",
    description: "Reusable blocks of code",
    notes: [
      "Define a function with def followed by its name and parentheses.",
      "Parameters receive values; arguments are supplied when calling a function.",
      "return sends a result back to the caller.",
      "A function that reaches its end without returning a value returns None."
    ],
    code: 'def square(number):\n    return number * number\n\nprint(square(5))  # 25'
  },
  {
    id: "collections", title: "Collections", emoji: "🗂️",
    description: "Lists, tuples, sets and dictionaries",
    notes: [
      "Lists are ordered and mutable: [1, 2, 3].",
      "Tuples are ordered and immutable: (1, 2, 3).",
      "Sets store unique elements: {1, 2, 3}.",
      "Dictionaries store key-value pairs: {\"name\": \"Asha\"}.",
      "List indexing starts at 0; negative indexes count from the end."
    ],
    code: 'marks = [80, 90, 75]\nmarks.append(95)\nstudent = {"name": "Asha", "year": 1}\nprint(marks[0], student["name"])'
  },
  {
    id: "strings", title: "Strings", emoji: "🔤",
    description: "Text, slicing and string methods",
    notes: [
      "Strings are immutable sequences of characters.",
      "Use len(text) to get the length.",
      "Slicing text[start:stop] excludes the stop index.",
      "Useful methods include lower(), upper(), strip(), split() and replace().",
      "f-strings insert expressions using curly braces."
    ],
    code: 'word = "Python"\nprint(word[0])       # P\nprint(word[1:4])     # yth\nprint(f"Learn {word}")'
  },
  {
    id: "errors", title: "Errors & Exceptions", emoji: "🛠️",
    description: "Handle errors safely",
    notes: [
      "Syntax errors occur when code violates Python grammar.",
      "Exceptions occur during execution, such as ZeroDivisionError.",
      "try contains code that may raise an exception.",
      "except handles a matching exception; finally runs whether an exception occurs or not."
    ],
    code: 'try:\n    number = int(input("Number: "))\n    print(10 / number)\nexcept (ValueError, ZeroDivisionError):\n    print("Enter a valid non-zero number.")'
  },
  {
    id: "files", title: "File Handling", emoji: "📄",
    description: "Read and write files",
    notes: [
      "open() opens a file; with open(...) helps close it automatically.",
      "Mode r reads, w writes (replacing existing content), and a appends.",
      "read() reads content; write() writes text.",
      "Specify encoding=\"utf-8\" for predictable text encoding."
    ],
    code: 'with open("notes.txt", "w", encoding="utf-8") as file:\n    file.write("Revise Python")\n\nwith open("notes.txt", "r", encoding="utf-8") as file:\n    print(file.read())'
  }
];

const questions = [
  { c: "basics", q: "Which function displays output in Python?", o: ["show()", "print()", "display_text()", "output()"], a: 1, e: "print() writes output to the console." },
  { c: "basics", q: "Which symbol begins a single-line comment?", o: ["//", "<!--", "#", "**"], a: 2, e: "Python single-line comments begin with #." },
  { c: "basics", q: "What does input() return by default?", o: ["An integer", "A string", "A Boolean", "A list"], a: 1, e: "input() returns text, even if the user types digits." },
  { c: "variables", q: "What is the type of 3.0?", o: ["int", "str", "float", "bool"], a: 2, e: "A number written with a decimal point is a float." },
  { c: "variables", q: "What is the result of type(True)?", o: ["int", "bool", "str", "float"], a: 1, e: "True is a Boolean value." },
  { c: "variables", q: "Which converts the string '42' to an integer?", o: ["str(42)", "float('42')", "int('42')", "bool('42')"], a: 2, e: "int('42') converts the numeric string to 42." },
  { c: "conditions", q: "What values are produced by range(3)?", o: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3 only"], a: 1, e: "range(3) starts at 0 and stops before 3." },
  { c: "conditions", q: "Which keyword skips the current loop iteration?", o: ["stop", "pass", "break", "continue"], a: 3, e: "continue skips to the next iteration." },
  { c: "conditions", q: "What does break do inside a loop?", o: ["Restarts the loop", "Exits the loop", "Skips one iteration", "Defines a function"], a: 1, e: "break terminates the nearest enclosing loop." },
  { c: "functions", q: "Which keyword defines a function?", o: ["function", "define", "def", "fun"], a: 2, e: "Python functions are defined using def." },
  { c: "functions", q: "What does a function return if there is no return statement?", o: ["0", "False", "An empty string", "None"], a: 3, e: "The implicit return value is None." },
  { c: "functions", q: "What does return do?", o: ["Repeats the function", "Sends a result to the caller", "Prints automatically", "Imports a module"], a: 1, e: "return provides a value to the calling code." },
  { c: "collections", q: "Which collection is immutable?", o: ["list", "dict", "set", "tuple"], a: 3, e: "A tuple cannot be modified after creation." },
  { c: "collections", q: "What does a set automatically eliminate?", o: ["Numbers", "Duplicate elements", "Strings", "All ordering information in every context"], a: 1, e: "Sets contain unique elements." },
  { c: "collections", q: "How do you access the value for key 'name' in d?", o: ["d.name", "d(name)", "d['name']", "d->name"], a: 2, e: "Dictionary values can be accessed using d['name']." },
  { c: "strings", q: "What is 'Python'[1:4]?", o: ["Pyt", "yth", "ytho", "tho"], a: 1, e: "The slice starts at index 1 and stops before index 4." },
  { c: "strings", q: "Which string method removes whitespace from the ends?", o: ["remove()", "trim()", "strip()", "clear()"], a: 2, e: "strip() removes leading and trailing whitespace." },
  { c: "errors", q: "Which exception may occur with 10 / 0?", o: ["ValueError", "ZeroDivisionError", "NameError", "KeyError"], a: 1, e: "Dividing by zero raises ZeroDivisionError." },
  { c: "errors", q: "Which block handles an exception?", o: ["try", "except", "define", "import"], a: 1, e: "except handles specified exceptions raised in the try block." },
  { c: "files", q: "Which file mode appends content?", o: ["r", "w", "a", "x"], a: 2, e: "Mode a appends instead of replacing existing content." },
  { c: "files", q: "Why use with open(...) when working with files?", o: ["It encrypts the file", "It automatically manages closing the file", "It creates a list", "It prevents every possible error"], a: 1, e: "The context manager closes the file when the block exits." }
];

const flashcards = [
  { c: "basics", q: "How do you display output in Python?", a: "Use print(value), for example print('Hello!')." },
  { c: "basics", q: "Why is indentation important in Python?", a: "It defines code blocks such as function bodies, loops and conditions." },
  { c: "variables", q: "Name four common Python data types.", a: "int, float, str and bool." },
  { c: "variables", q: "How do you check a value's type?", a: "Use type(value)." },
  { c: "conditions", q: "What is the difference between break and continue?", a: "break exits the loop; continue skips to the next iteration." },
  { c: "conditions", q: "What does range(1, 5) produce?", a: "The sequence 1, 2, 3, 4; the stop value 5 is excluded." },
  { c: "functions", q: "How do you define a function?", a: "Use def name(parameters): followed by an indented body." },
  { c: "functions", q: "What is the purpose of return?", a: "It sends a value back to the caller and ends that function call." },
  { c: "collections", q: "List vs tuple: what is the key difference?", a: "Lists are mutable; tuples are immutable." },
  { c: "collections", q: "What does a dictionary store?", a: "Key-value pairs, such as {'name': 'Asha'}." },
  { c: "strings", q: "What does slicing text[1:4] mean?", a: "Take characters from index 1 up to, but not including, index 4." },
  { c: "strings", q: "Are Python strings mutable?", a: "No. Strings are immutable." },
  { c: "errors", q: "What are try and except used for?", a: "They let you handle exceptions that may arise during execution." },
  { c: "files", q: "What are r, w and a file modes?", a: "r reads, w writes/replaces content, and a appends content." }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const storage = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }
};

let reviewed = storage.get("pyrev-reviewed", []);
let tasks = storage.get("pyrev-tasks", [false, false, false, false]);
let totalAnswered = storage.get("pyrev-answered", 0);
let totalCorrect = storage.get("pyrev-correct", 0);
let selectedTopic = null;

function saveProgress() {
  storage.set("pyrev-reviewed", reviewed);
  storage.set("pyrev-tasks", tasks);
  storage.set("pyrev-answered", totalAnswered);
  storage.set("pyrev-correct", totalCorrect);
}

function updateStats() {
  $("#reviewed-count").textContent = `${reviewed.length} / ${topics.length}`;
  $("#topic-progress").style.width = `${reviewed.length / topics.length * 100}%`;
  $("#answered-count").textContent = totalAnswered;
  $("#accuracy-count").textContent = `${totalAnswered ? Math.round(totalCorrect / totalAnswered * 100) : 0}%`;
  $("#checklist-count").textContent = `${tasks.filter(Boolean).length} / ${tasks.length}`;
}

function showPage(pageId) {
  $$(".page").forEach(page => page.classList.toggle("active", page.id === pageId));
  $$(".nav-link").forEach(button => button.classList.toggle("active", button.dataset.page === pageId));
  const titles = {
    overview: "Python Revision Dashboard",
    topics: "Explore Python Topics",
    quiz: "Practice Quiz",
    flashcards: "Flashcard Studio"
  };
  $("#page-title").textContent = titles[pageId] || "PyRevise";
  if (pageId === "topics") renderTopics();
  if (pageId === "flashcards") renderFlashcard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$$(".nav-link").forEach(button => button.addEventListener("click", () => showPage(button.dataset.page)));
$$("[data-go]").forEach(button => button.addEventListener("click", () => showPage(button.dataset.go)));

tasks.forEach((checked, index) => {
  const checkbox = $(`[data-task="${index}"]`);
  checkbox.checked = checked;
  checkbox.addEventListener("change", () => {
    tasks[index] = checkbox.checked;
    saveProgress();
    updateStats();
  });
});

function renderTopics() {
  const search = $("#topic-search").value.trim().toLowerCase();
  const filter = $("#topic-filter").value;
  const filtered = topics.filter(topic => {
    const matchesSearch = `${topic.title} ${topic.description} ${topic.notes.join(" ")}`.toLowerCase().includes(search);
    const matchesStatus = filter === "all" || (filter === "reviewed" ? reviewed.includes(topic.id) : !reviewed.includes(topic.id));
    return matchesSearch && matchesStatus;
  });

  $("#topic-grid").innerHTML = filtered.map(topic => `
    <button class="topic-card ${selectedTopic === topic.id ? "selected" : ""}" data-topic="${topic.id}">
      <span class="topic-emoji">${topic.emoji}</span>
      <h3>${topic.title}</h3>
      <p>${topic.description}</p>
      <span class="topic-status">${reviewed.includes(topic.id) ? "✓ Reviewed" : "○ Not reviewed"}</span>
    </button>
  `).join("") || `<div class="panel empty-state">No topics match your search.</div>`;

  $$("#topic-grid [data-topic]").forEach(button => {
    button.addEventListener("click", () => {
      selectedTopic = button.dataset.topic;
      renderTopics();
      renderTopicDetail();
    });
  });
}

function renderTopicDetail() {
  const topic = topics.find(item => item.id === selectedTopic);
  if (!topic) return;
  $("#topic-detail").innerHTML = `
    <div class="section-heading">
      <div><h2>${topic.emoji} ${topic.title}</h2><p>${topic.description}</p></div>
      <span class="pill">${reviewed.includes(topic.id) ? "Reviewed ✓" : "In progress"}</span>
    </div>
    <h3>Key concepts</h3>
    <ul>${topic.notes.map(note => `<li>${note}</li>`).join("")}</ul>
    <h3>Code example</h3>
    <pre>${topic.code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
    <button class="button button-primary" id="mark-reviewed">${reviewed.includes(topic.id) ? "Mark as not reviewed" : "✓ Mark as reviewed"}</button>
  `;
  $("#mark-reviewed").addEventListener("click", () => {
    reviewed = reviewed.includes(topic.id)
      ? reviewed.filter(id => id !== topic.id)
      : [...reviewed, topic.id];
    saveProgress();
    updateStats();
    renderTopics();
    renderTopicDetail();
  });
}

$("#topic-search").addEventListener("input", renderTopics);
$("#topic-filter").addEventListener("change", renderTopics);

let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizLocked = false;
let quizHistory = [];

function startQuiz() {
  const category = $("#quiz-category").value;
  const amount = Number($("#quiz-length").value);
  const pool = questions.filter(question => category === "all" || question.c === category);
  quizQuestions = pool.sort(() => Math.random() - 0.5).slice(0, amount);
  quizIndex = 0;
  quizScore = 0;
  quizHistory = [];
  quizLocked = false;
  $("#quiz-settings").classList.add("hidden");
  $("#quiz-result").classList.add("hidden");
  $("#quiz-panel").classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const question = quizQuestions[quizIndex];
  if (!question) return;
  quizLocked = false;
  $("#quiz-panel").innerHTML = `
    <div class="quiz-topline"><span>Question ${quizIndex + 1} of ${quizQuestions.length}</span><span>Score: ${quizScore}</span></div>
    <div class="progress-track"><div class="progress-fill" style="width:${quizIndex / quizQuestions.length * 100}%"></div></div>
    <h2 class="quiz-question">${question.q}</h2>
    <div class="answer-list">${question.o.map((option, index) => `
      <button class="answer-option" data-answer="${index}">${String.fromCharCode(65 + index)}. ${option}</button>
    `).join("")}</div>
    <p class="feedback" id="quiz-feedback" aria-live="polite"></p>
    <div class="quiz-footer"><span class="muted">Choose one answer.</span><button id="next-question" class="button button-primary" disabled>${quizIndex === quizQuestions.length - 1 ? "See results" : "Next question →"}</button></div>
  `;
  $$("#quiz-panel [data-answer]").forEach(button => {
    button.addEventListener("click", () => answerQuestion(Number(button.dataset.answer)));
  });
  $("#next-question").addEventListener("click", nextQuestion);
}

function answerQuestion(answer) {
  if (quizLocked) return;
  quizLocked = true;
  const question = quizQuestions[quizIndex];
  const correct = answer === question.a;
  totalAnswered++;
  if (correct) {
    quizScore++;
    totalCorrect++;
  }
  quizHistory.push({ correct, explanation: question.e });
  saveProgress();
  updateStats();

  $$("#quiz-panel [data-answer]").forEach((button, index) => {
    button.disabled = true;
    if (index === question.a) button.classList.add("correct");
    else if (index === answer) button.classList.add("incorrect");
  });
  $("#quiz-feedback").textContent = `${correct ? "Correct! ✓" : "Not quite."} ${question.e}`;
  $("#next-question").disabled = false;
  $("#quiz-panel .quiz-topline span:last-child").textContent = `Score: ${quizScore}`;
}

function nextQuestion() {
  if (!quizLocked) return;
  quizIndex++;
  if (quizIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  $("#quiz-panel").classList.add("hidden");
  $("#quiz-result").classList.remove("hidden");
  const percent = Math.round(quizScore / quizQuestions.length * 100);
  $("#quiz-result").innerHTML = `
    <p class="eyebrow">QUIZ COMPLETE</p>
    <h2>${quizScore} / ${quizQuestions.length}</h2>
    <p>You scored ${percent}%.</p>
    <p>${percent >= 80 ? "Excellent work! Keep building on that understanding." : percent >= 50 ? "Good effort! Review the explanations and try again." : "Every attempt helps. Revise the topic notes and give it another go."}</p>
    <button id="retry-quiz" class="button button-primary">Try again</button>
    <button id="quiz-home" class="button button-secondary">Back to overview</button>
  `;
  $("#retry-quiz").addEventListener("click", () => {
    $("#quiz-settings").classList.remove("hidden");
    $("#quiz-result").classList.add("hidden");
  });
  $("#quiz-home").addEventListener("click", () => showPage("overview"));
}

$("#start-quiz").addEventListener("click", startQuiz);

let activeCards = [...flashcards];
let cardIndex = 0;
let cardFlipped = false;
let knownCards = storage.get("pyrev-known-cards", []);
let showKnownOnly = false;

function renderFlashcard() {
  const category = $("#flashcard-category").value;
  activeCards = flashcards.filter(card =>
    (category === "all" || card.c === category) &&
    (!showKnownOnly || knownCards.includes(card.q))
  );
  if (cardIndex >= activeCards.length) cardIndex = 0;
  cardFlipped = false;
  const card = activeCards[cardIndex];
  if (!card) {
    $("#card-counter").textContent = "No cards available";
    $("#flashcard-label").textContent = "NOTHING HERE YET";
    $("#flashcard-text").textContent = "Try another topic or show all cards.";
    $("#flashcard-hint").textContent = "";
    $("#known-count").textContent = `${knownCards.length} cards marked as known`;
    return;
  }
  $("#card-counter").textContent = `Card ${cardIndex + 1} of ${activeCards.length}`;
  $("#flashcard-label").textContent = "QUESTION";
  $("#flashcard-text").textContent = card.q;
  $("#flashcard-hint").textContent = "Click to reveal answer";
  $("#mark-known").textContent = knownCards.includes(card.q) ? "✓ Known — click to undo" : "✓ Mark as known";
  $("#known-count").textContent = `${knownCards.length} cards marked as known`;
}

function flipFlashcard() {
  const card = activeCards[cardIndex];
  if (!card) return;
  cardFlipped = !cardFlipped;
  $("#flashcard-label").textContent = cardFlipped ? "ANSWER" : "QUESTION";
  $("#flashcard-text").textContent = cardFlipped ? card.a : card.q;
  $("#flashcard-hint").textContent = cardFlipped ? "Click to see question" : "Click to reveal answer";
}

$("#flashcard").addEventListener("click", flipFlashcard);
$("#flip-card").addEventListener("click", flipFlashcard);
$("#previous-card").addEventListener("click", () => {
  if (!activeCards.length) return;
  cardIndex = (cardIndex - 1 + activeCards.length) % activeCards.length;
  renderFlashcard();
});
$("#next-card").addEventListener("click", () => {
  if (!activeCards.length) return;
  cardIndex = (cardIndex + 1) % activeCards.length;
  renderFlashcard();
});
$("#flashcard-category").addEventListener("change", () => {
  cardIndex = 0;
  renderFlashcard();
});
$("#shuffle-cards").addEventListener("click", () => {
  activeCards.sort(() => Math.random() - 0.5);
  cardIndex = 0;
  renderFlashcard();
});
$("#known-filter").addEventListener("click", () => {
  showKnownOnly = !showKnownOnly;
  $("#known-filter").textContent = showKnownOnly ? "Show: Known" : "Show: All";
  cardIndex = 0;
  renderFlashcard();
});
$("#mark-known").addEventListener("click", () => {
  const card = activeCards[cardIndex];
  if (!card) return;
  knownCards = knownCards.includes(card.q)
    ? knownCards.filter(question => question !== card.q)
    : [...knownCards, card.q];
  storage.set("pyrev-known-cards", knownCards);
  renderFlashcard();
});

$("#theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  $("#theme-toggle").textContent = isDark ? "☀" : "☾";
  storage.set("pyrev-dark-mode", isDark);
});

if (storage.get("pyrev-dark-mode", false)) {
  document.body.classList.add("dark");
  $("#theme-toggle").textContent = "☀";
}

updateStats();
renderTopics();
renderFlashcard();
