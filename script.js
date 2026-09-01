// Lightweight contact form handler.
// Replace FORM_ENDPOINT with your Formspree ID or other endpoint if you want server-side collection.
// If left as null, the script uses email fallback messaging only.

const FORM_ENDPOINT = null; // e.g. "https://formspree.io/f/your_form_id"

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "Sending…";

    const data = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      message: form.message.value
    };

    if (!FORM_ENDPOINT) {
      // No endpoint configured — show email fallback and prepare mailto link
      status.innerHTML = `Please email your briefing request to <a href="mailto:suresh.mk@vivista.in">suresh.mk@vivista.in</a> or call +91 84319 72939.`;
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        status.textContent = "Thanks — we'll be in touch within 48 hours.";
        form.reset();
      } else {
        status.innerHTML = "Submission failed. Please email <a href=\"mailto:suresh.mk@vivista.in\">suresh.mk@vivista.in</a>.";
      }
    } catch (err) {
      status.innerHTML = "Network error. Please email <a href=\"mailto:suresh.mk@vivista.in\">suresh.mk@vivista.in</a> or call +91 84319 72939.";
      console.error(err);
    }
  });
});