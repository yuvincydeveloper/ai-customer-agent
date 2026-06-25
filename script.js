async function reply() {
  const question = document.getElementById("question").value;

  if (!question.trim()) {
    alert("Please enter a question.");
    return;
  }

  const apiKey = "YOUR_GEMINI_API_KEY";

  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
    apiKey;

  const body = {
    contents: [
      {
        parts: [
          {
            text: question
          }
        ]
      }
    ]
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    const answer =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response received.";

    document.getElementById("reply").innerHTML =
      "<b>AI Reply:</b><br><br>" + answer;

  } catch (error) {
    document.getElementById("reply").innerHTML =
      "Error: " + error.message;
  }
}
