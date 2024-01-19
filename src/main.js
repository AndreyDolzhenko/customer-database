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

form.addEventListener("submit", function (event) {
  console.log(formContent(array_form));
});

// form.addEventListener("submit", function(event){
//     for (let index = 0; index < array_form.length; index++) {
//         if (array_form[index].type=='checkbox') {
//             console.log(array_form[index].checked);
//         } else{
//             console.log(array_form[index].value);
//         }
//     }
// });

/*
//РАБОТА С FETCH
const main=document.querySelector('main');

let id_addres='31.131.199.37';

  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())    
  .then(commits => {id_addres=Object.values(commits);
                    console.log(id_addres);
                    return id_addres});

  console.log(id_addres);

  let url=`https://ipinfo.io/${id_addres}/geo`;

  fetch(url)
  .then(response => response.json())  
  .then(commits => main.innerHTML=`<p>${Object.keys(commits)+' : '+Object.values(commits)}</p>`);
 */
//'https://ipinfo.io/31.131.199.37/geo'
