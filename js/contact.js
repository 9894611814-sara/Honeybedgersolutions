function submitContact(e) {
  if (e) e.preventDefault();

  const name = document.getElementById('f-name')?.value.trim();
  const email = document.getElementById('f-email')?.value.trim();
  const phone = document.getElementById('f-phone')?.value.trim();
  const company = document.getElementById('f-company')?.value.trim();
  const service = document.getElementById('f-service')?.value;
  const budget = document.getElementById('f-budget')?.value;
  const msg = document.getElementById('f-msg')?.value.trim();

  const errName = document.getElementById('err-name');
  const errEmail = document.getElementById('err-email');
  const errMsg = document.getElementById('err-msg');

  if (errName) errName.style.display = "none";
  if (errEmail) errEmail.style.display = "none";
  if (errMsg) errMsg.style.display = "none";

  let isValid = true;

  if (!name) {
    if (errName) errName.style.display = "block";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    if (errEmail) errEmail.style.display = "block";
    isValid = false;
  }

  if (!msg) {
    if (errMsg) errMsg.style.display = "block";
    isValid = false;
  }

  if (!isValid) return;

  const btn = document.getElementById('submitBtn');
  if (btn) {
    btn.innerHTML = "Opening WhatsApp...";
    btn.disabled = true;
  }

  const text = `🔥 *New Enquiry*

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone || 'NA'}
🏢 Company: ${company || 'NA'}

🛠 Service: ${service || 'NA'}
💰 Budget: ${budget || 'NA'}

💬 Message:
${msg}`;

const url = `https://wa.me/918056501976?text=${encodeURIComponent(text)}`;

// ✅ Show success FIRST
document.getElementById("contactForm").style.display = "none";
document.getElementById("successState").style.display = "block";

// ✅ Reset fields
document.querySelectorAll("#contactForm input, #contactForm textarea, #contactForm select")
  .forEach(el => el.value = "");

// ✅ Open WhatsApp after 1 sec
setTimeout(() => {
  window.open(url, "_blank");
}, 1000);

  setTimeout(() => {
    if (btn) {
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      btn.disabled = false;
    }
  }, 1500);
}