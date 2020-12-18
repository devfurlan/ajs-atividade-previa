function signIn(e) {
  e.preventDefault();

  const inputs = {
    email: formSignIn.email.value,
    password: formSignIn.password.value,
  };

  const errorSignIn = document.getElementById('errorSignIn');
  const validate = validEmail(inputs);

  if (!validate) {
    errorSignIn.classList.remove('d-none');
  } else {
    errorSignIn.classList.add('d-none');
    localStorage.setItem('logged', true);
    window.location.href = "/produtos.html";
  }
}

function validEmail(inputs) {
  const getUsers = JSON.parse(localStorage.getItem('users'));

  const hasUser = getUsers.filter(user => user.email === inputs.email && user.password === inputs.password);

  return !!hasUser[0];
}
