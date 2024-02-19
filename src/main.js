const URL='http://127.0.0.1:5000/api/v1';

const registration = document.getElementById("registration");
const registration_form = document.getElementById("registration_form");
const form = document.querySelector("form"); // получаю содержимое формы
const array_form = [...form]; // перевожу содержимое формы в массив

function formContent(arr) {
  let obj_form = [];
  obj_form.name = arr[0].value;
  obj_form.surname = arr[1].value;
  obj_form.email = arr[2].value;
  obj_form.phone = arr[3].value;
  arr[4].checked == true ? (obj_form.pol = "man") : (obj_form.pol = "woman");
  obj_form.Date_of_Birth = arr[6].value;

  return obj_form;
}

// открываем форму для заполнения
registration.addEventListener("click", function (event) {
  registration.style.display = "none";
  registration_form.style.display = "inherit";
});

// получаем данные из формы и выводим в консоль

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  console.log(formContent(array_form));
  const content = formContent(array_form);
  const employee = {
    employeeName: content.name,
    wage: content.surname,
    email: content.email,
  }
  const response = await fetch(`${URL}/employees`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  })
  const result = await response.text();
  console.log(result);
});
