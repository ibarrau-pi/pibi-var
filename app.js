(function () {
  const $screenStart = $("#screenStart");
  const $screenGame = $("#screenGame");
  const $screenFinal = $("#screenFinal");

  const $email = $("#email");
  const $btnStart = $("#btnStart");

  const $gifWrap = $("#gifWrap");
  const $gif = $("#gif");
  const $answers = $("#answers");
  const $chipQuestion = $("#chipQuestion");
  const $chipScore = $("#chipScore");
  const $progressBar = $("#progressBar");

  const $btnRestart = $("#btnRestart");
  const $btnSkip = $("#btnSkip");

  const $finalSummary = $("#finalSummary");
  const $finalSendHint = $("#finalSendHint");
  const $btnPlayAgain = $("#btnPlayAgain");

  const $toast = $("#toast");

  let state = {
    username: "",
    index: 0,
    correct: 0,
    answered: 0,
    results: [], // {username, question, answer, score, timestamp?}
    locked: false
  };

  function showToast(msg) {
    $toast.text(msg);
    $toast.addClass("show");
    setTimeout(() => $toast.removeClass("show"), 1400);
  }

  function switchScreen(which) {
    $(".screen").removeClass("active");
    if (which === "start") $screenStart.addClass("active");
    if (which === "game") $screenGame.addClass("active");
    if (which === "final") $screenFinal.addClass("active");
  }

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(String(v || "").trim());
  }

  function updateStartGate() {
    const ok = isValidEmail($email.val());
    $btnStart.prop("disabled", !ok);
    $("#emailHint").text(ok ? "Perfecto. ¡Vamos!" : "Ingresa un email válido para habilitar “Empezar”.");
  }

  function updateHeader() {
    const total = questions.length;
    const idx = state.index;
    const q = questions[idx];
    $chipQuestion.text(q?.question || "");
    $chipScore.text(`Puntaje ${state.correct} / ${state.answered}`);
    $progressBar.css("width", `${Math.round((idx / total) * 100)}%`);
  }

  function setLoadingGif(loading) {
    $gifWrap.toggleClass("loading", !!loading);
  }

  function renderQuestion() {
    const q = questions[state.index];
    if (!q) return;

    state.locked = false;
    updateHeader();

    setLoadingGif(true);
    $gif.off("load error");

    $gif.on("load", () => setLoadingGif(false));
    $gif.on("error", () => {
      setLoadingGif(false);
      showToast("No se pudo cargar el gif (revisa la URL).");
    });

    /*$gif.attr("src", q.gif);
    $gif.attr("alt", `Jugada ${q.question}`);*/
	$gif.attr("src", q.gif); // now this will be an .mp4 path
	$gif.attr("aria-label", `Jugada ${q.question}`); // video doesn't use "alt"

	// Force reload/play when switching questions
	const el = $gif.get(0);
	if (el) {
	  el.load();
	  el.play?.().catch(() => {});
	}

    $answers.empty();
    const entries = Object.values(q.possible_answers || {});
    entries.forEach((text) => {
      const $b = $(`<button class="btn btnGhost" type="button"></button>`);
      $b.text(text);
      $b.on("click", () => onAnswer(text));
      $answers.append($b);
    });
  }

  function vibrate(ms) {
    try { if (navigator.vibrate) navigator.vibrate(ms); } catch {}
  }

  function lockOnce(fn) {
    if (state.locked) return;
    state.locked = true;
    try { fn(); } finally { setTimeout(() => { state.locked = false; }, 180); }
  }

  function onAnswer(answerText) {
    lockOnce(() => {
      const q = questions[state.index];
      if (!q) return;

      const score = answerText === q.correct_answer ? 1 : 0;
      state.answered += 1;
      state.correct += score;

      // Keep only what Azure Function expects (question, answer, score).
      state.results.push({
        question: q.question,
        answer: answerText,
        score
      });

      next();
    });
  }

  function skip() {
    lockOnce(() => {
      const q = questions[state.index];
      if (!q) return;

      state.answered += 1;

      state.results.push({
        question: q.question,
        answer: "SKIP",
        score: 0
      });

      showToast("Saltado");
      next();
    });
  }

  function next() {
    state.index += 1;
    if (state.index >= questions.length) {
      finish();
      return;
    }
    renderQuestion();
  }

  async function finish() {
    switchScreen("final");
    $progressBar.css("width", "100%");
    //$finalSummary.text(`Puntaje final: ${state.correct} / ${questions.length}`);

    // Send to your Azure Function (single POST)
    $finalSendHint.text("Enviando tus respuestas…");

    try {
      const res = await EventSender.sendAnswers(state.username, state.results);
      $finalSendHint.text(`¡Listo! Respuestas enviadas (HTTP ${res.status}). Ve al stand para ver el ranking de resultados.`);
    } catch (e) {
      $finalSendHint.text(`No se pudieron enviar las respuestas, pasa por el stand de Pi para informarlo: ${String(e)}`);
    }
  }

  function resetGame() {
    state = {
      username: "",
      index: 0,
      correct: 0,
      answered: 0,
      results: [],
      locked: false
    };
    $progressBar.css("width", "0%");
    $answers.empty();
    $gif.attr("src", "");
    setLoadingGif(false);
  }

  function startGame() {
    const email = String($email.val() || "").trim().toLowerCase();
    if (!isValidEmail(email)) { showToast("Ingresa un email válido."); return; }

    resetGame();
    state.username = email;
    switchScreen("game");
    renderQuestion();
  }

  $email.on("input", updateStartGate);
  $btnStart.on("click", startGame);

  $btnRestart.on("click", () => { showToast("Reiniciado"); switchScreen("start"); });
  $btnSkip.on("click", skip);
  $btnPlayAgain.on("click", () => { switchScreen("start"); });

  updateStartGate();
})();