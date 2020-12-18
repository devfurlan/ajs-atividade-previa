function signUp(e) {
  e.preventDefault();

  const inputs = {
    name: form.nameUser.value,
    email: form.email.value,
    confirmEmail: form.confirmEmail.value,
    password: form.password.value,
    confirmPassword: form.confirmPassword.value,
  };

  save(inputs);

  window.location.href = "/entrar.html";
}

function confirmEmail() {
  confirm('confirmEmail', 'email');
}

function confirmPassword() {
  confirm('confirmPassword', 'password');
}

function confirm(input, main) {
  const field = document.getElementById(input);

  const a = document.getElementById(input).value;
  const b = document.getElementById(main).value;

  if (a !== b) {
    field.classList.add('is-invalid');
    document.getElementById(`${input}Feedback`).innerText = 'Confirmação inválida';
  } else {
    field.classList.remove('is-invalid');
  }
}

function save(inputs) {
  let setUsers = [];

  if (localStorage.hasOwnProperty('users')) {
    setUsers = JSON.parse(localStorage.getItem('users'));
  }

  setUsers.push({
    name: inputs.name,
    email: inputs.email,
    password: inputs.password,
  })

  localStorage.setItem('users', JSON.stringify(setUsers))
}
