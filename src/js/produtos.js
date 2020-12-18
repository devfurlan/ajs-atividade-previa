function listUsers() {

  const getUsers = JSON.parse(localStorage.getItem('users'));


  const usersHtml = getUsers.map(user => {
    return `
      <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
      </tr>`;
  }).join('');

  const html = `
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">Nome</th>
        <th scope="col">E-mail</th>
      </tr>
      </thead>
      <tbody>
        ${usersHtml}
      </tbody>
    </table>`;

  document.getElementById('usersContent').innerHTML = html;
}
