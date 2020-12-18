function logout() {
  localStorage.setItem('logged', false);
  window.location.href = "/";
}
