window.addEventListener("load", () => {
  const mainMenu = document.getElementById('mainMenu');

  const homeMenu = `
    <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="./cadastrar.html">Cadastrar</a>
    </li>`;

  const loggedMenu = `
    ${homeMenu}
    <li class="nav-item">
        <a class="nav-link" href="./produtos.html">Produtos</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" onclick="logout()">Sair</a>
    </li>
  `;

  const notLoggedMenu = `
    ${homeMenu}
    <li class="nav-item">
        <a class="nav-link" href="./entrar.html">Entrar</a>
    </li>
  `;

  if (logged === 'true') {
    mainMenu.innerHTML = loggedMenu;
  } else {
    mainMenu.innerHTML = notLoggedMenu;
  }
});
