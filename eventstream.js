/**
 * Sends the final answers payload to your Azure Function.
 * Update AZURE_FUNCTION_URL when you deploy.
 */
const EventSender = (() => {
  // TODO: replace with your deployed function URL (include ?code=... if needed)
  // Example: "https://<app>.azurewebsites.net/api/sendVARtoEventStream?code=XXXX"
  const AZURE_FUNCTION_URL = "http://localhost:7071/api/sendVARtoEventStream";

  async function sendAnswers(username, answers) {
    const body = {
      username,
      answers: answers.map(a => ({
        question: a.question,
        answer: a.answer,
        score: a.score
      }))
    };

    const response = await fetch(AZURE_FUNCTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const text = await response.text();

    let parsed;
    try { parsed = JSON.parse(text); } catch { parsed = text; }

    if (!response.ok) {
      const err = typeof parsed === "string" ? parsed : JSON.stringify(parsed);
      throw new Error(`Azure Function error (${response.status}): ${err}`);
    }

    return { status: response.status, data: parsed };
  }

  return { sendAnswers };
})();