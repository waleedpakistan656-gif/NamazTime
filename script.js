document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Tab switching
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('main section').forEach(sec => sec.hidden = true);
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab).hidden = false;
    });
  });

  // Theme toggle
  const app = document.getElementById('app');
  document.getElementById('themeBtn').addEventListener('click', () => {
    app.dataset.theme = app.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.style.background = app.dataset.theme === 'dark' ? '#0f172a' : '#f1f5f9';
    document.body.style.color = app.dataset.theme === 'dark' ? 'white' : '#0f172a';
  });
});
