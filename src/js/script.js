var logged = localStorage.getItem('logged');

console.log('logged')
console.log(logged)

const currentPage = window.location.href;

if (currentPage.indexOf('cadastrar') !== -1){
  let form = document.formSignUp;

  form.addEventListener("submit", signUp);

  form.email.addEventListener("keyup", confirmEmail);
  form.confirmEmail.addEventListener("keyup", confirmEmail);

  form.password.addEventListener("keyup", confirmPassword);
  form.confirmPassword.addEventListener("keyup", confirmPassword);
}

if (currentPage.indexOf('entrar') !== -1){
  const formSignIn = document.formSignIn;

  formSignIn.addEventListener("submit", signIn);
}

if (currentPage.indexOf('produtos') !== -1){
  if (logged === 'true') {
    // const formSignIn = document.formSignIn;
    //
    window.addEventListener("load", listUsers);
  } else {
    alert('Entre para ter acesso!')
    window.location.href = "/entrar.html";
  }
}








//
//
// const loadEpisodes = (limit) => {
//
//     const RSS_URL = 'https://anchor.fm/s/7972938/podcast/rss';
//     fetch(RSS_URL)
//         .then(response => response.text())
//         .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
//         .then(data => {
//
//             const items = data.querySelectorAll('item');
//             const itemsArray = Array.from(items);
//             const itemsPaginated = paginate(itemsArray, limit);
//
//             itemsPaginated.forEach((ep, key) => {
//                 const pre = '<![CDATA[';
//                 const suf = ']]>';
//
//                 const title = ep.querySelector('title').innerHTML
//                     .replace(pre, '').replace(suf, '');
//
//                 const description = ep.querySelector('description').innerHTML
//                     .replace(pre, '').replace(suf, '');
//
//                 const link = ep.querySelector('link').innerHTML
//                     .replace('https://anchor.fm/revolucast/episodes/', '');
//
//                 const episodesHtml = document.createElement('div');
//
//                 // key = key > 0 ? `animate__delay-${key + 2}s` : '';
//                 // console.log(key)
//                 episodesHtml.className = `card animate__animated animate__fadeInUp`;
//
//                 episodesHtml.innerHTML = `
//                     <h2 class="card__title">${title}</h2>
//                     <div class="card__description">${description}</div>
//                     <iframe src="https://anchor.fm/revolucast/embed/episodes/${link}" width="100%" height="102px" frameborder="0" scrolling="no"></iframe>
//                 `;
//
//                 document.getElementById('episodes').appendChild(episodesHtml);
//             });
//         }
//     );
// }
// loadEpisodes(0);
//
//
// const paginate = (array, limit) => {
//     limit = Math.abs(parseInt(limit));
//     limit = limit > 0 ? limit - 1 : limit;
//     let offset = 3;
//     offset = offset < 1 ? 1 : offset;
//
//     return [...(array.filter((value, n) => {
//         return (n >= limit) && (n < ((limit) + offset))
//         // return (n >= (limit * offset)) && (n < ((limit+1) * offset))
//     }))]
// };
//
//
// let limit = 1;
// document.getElementById('loadMore').addEventListener('click', e => {
//     e.preventDefault();
//     limit = limit + 3;
//     loadEpisodes(limit);
// });
//
