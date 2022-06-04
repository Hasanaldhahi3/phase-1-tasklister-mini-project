document.addEventListener("DOMContentLoaded", () => {


  const inputText = document.getElementById("new-task-description")

  const submitBtn = document.getElementById("create");


  const tasks = document.getElementById("tasks");


  const id = 0


  submitBtn.addEventListener('click', (e) => {

    e.preventDefault();



    tasks.innerHTML += `<li id="${id}" >${inputText.value} <button name = "hasan" class ="hasan ${id}">X</button></li> `;
    inputText.value = "";
  })



  document.getElementsByName(".hasan").forEach(element => {
    element.addEventListener("click", () => {

      console.log("clicked")

      const item = document.getElementById(`${element.className.split(" ")[1]}`)
      console.log(item)
      item.style.visibility = "hidden"
    }
    )
  });













});
