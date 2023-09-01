const elLoader = document.querySelector('.js-loader');
const api = "https://akhrorweb-chef.onrender.com/users";
let singIn = "/login",
  signUp = "/signup",
  token, user;
window.addEventListener('load', () => {
  setTimeout(() => {
    elLoader.classList.add('loader-wrapper--none');
  }, 800);
  token = localStorage.getItem("token");
  user = token ? token : false;
  if (user) {
    signUp = singIn;
    title.innerText = localStorage.getItem("title");
    button.innerText = title.innerText;
  }
});

form.onsubmit = (event) => {
  event.preventDefault();
  fetch(api + signUp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer"
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    })
  })
    .then(res => res.json())
    .then(res => {
      if (res?.accessToken) {
        title.innerText = "Sign up succesfully 😊";
        localStorage.setItem("token", res.accessToken);
      };
      form.reset();
      localStorage.setItem("title", "Sign in");
      throw new Error(res.errors);
    }).catch(err => {
      console.log(err);
      title.innerText = err.message;
      setTimeout(() => {
        title.innerText = localStorage.getItem("title") ? localStorage.getItem("title") : "Sign up";
      }, 5000);
    });

};