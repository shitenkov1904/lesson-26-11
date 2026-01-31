export const displayData = (data1, container) => {
  container.innerHTML=``
  data1.forEach((data) => {
    const el = document.createElement("div");
    el.classList.add("el");
    el.innerHTML=`
    <div>${data.name}</div>
    <div class="img" style="background-image: url(${data.url});"></div>
    `
    container.appendChild(el);
  });
};
