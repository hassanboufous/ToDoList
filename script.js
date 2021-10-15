const btn = document.querySelector('button');
const container = document.getElementById('container');
const form = document.querySelector('form');


form.addEventListener('submit', (e)=> {
 e.preventDefault();
let input = document.getElementById('input')
 let task = `
  <div class="task">
        <span class="icon-star-empty icon"></span>
        <p class="par">${input.value}</p>
        <div>
          <span class="icon-bin icon"></span>
          <span class="icon-angry icon"></span>
        </div>
      </div>
 `
 container.innerHTML += task;
 input.value = ''
})

container.addEventListener('click', (e)=> {
  if (e.target.className == "icon-bin icon") {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.className == "icon-angry icon") {
    e.target.parentElement.parentElement
      .getElementsByClassName("par")[0]
      .classList.add("finish");
    e.target.classList.add("dn");
    const heartIcn = ` <span class="icon-heart icon" ></span> `;
    e.target.parentElement.innerHTML += heartIcn;
  } else if (e.target.className == "icon-heart icon") {
    e.target.classList.add("dn");
    e.target.parentElement.parentElement
      .getElementsByClassName("par")[0]
      .classList.remove("finish");

    const angIcn = ` <span class="icon-angry icon"></span> `;
    e.target.parentElement.innerHTML += angIcn;
  } else if (e.target.className == "icon-star-empty icon") {
    e.target.classList.add("Green");
    e.target.style.fontSize = "30px";
    e.target.parentElement.parentElement.prepend(e.target.parentElement);
    //  e.target.parentElement.parentElement = container
  } else if (e.target.className == "icon-star-empty icon Green") {
    e.target.classList.remove("Green");
  }
})
