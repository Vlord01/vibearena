document.getElementById('contactBtn').addEventListener('click', () => {
  const message = document.getElementById('message');
  message.textContent = 'Thanks for clicking! I will get back to you soon.';
  message.style.color = 'green';
});
