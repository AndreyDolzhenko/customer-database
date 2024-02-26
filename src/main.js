const URL = "http://127.0.0.1:5000/api/v1";

const employeeDatabaseParameters = document.getElementById(
  "employee_database_parameters"
);
const employeeDatabaseParametersOpen = document.getElementById(
  "employee_database_parameters_open"
);
const staffTable = document.getElementById("staffTable");
const employeeDatabase = document.getElementsByClassName("employee_database");
const showEmployees = document.getElementById("showEmployees");
const tableEmployees = document.getElementById("tableEmployees");
const employeesForm = document.getElementById("employees");
const registration = document.getElementById("registration");
const registration_form = document.getElementById("registration_form");
const form = document.querySelector("form"); // получаю содержимое формы
const array_form = [...employeesForm]; // перевожу содержимое формы в массив

let countReg = 0;

function formContentReg(arr) {
  let obj_form = [];
  obj_form.name = arr[0].value;
  obj_form.surname = arr[1].value;
  obj_form.email = arr[2].value;
  obj_form.phone = arr[3].value;
  arr[4].checked == true ? (obj_form.pol = "man") : (obj_form.pol = "woman");
  obj_form.Date_of_Birth = arr[6].value;

  return obj_form;
}
// Функция для получения данных из формы "Сотрудники"
function formContent(arr) {
  let obj_form = [];
  obj_form.name = arr[0].value;
  obj_form.patronymic = arr[1].value;
  obj_form.surname = arr[2].value;
  obj_form.sex = arr[3].value;
  obj_form.dateOfBirth = arr[4].value;

  return obj_form;
}

// Создаём таблицу с сотрудниками на экране
function createTable(content) {
  // Очищаем таблицу перед заполнением
  tableEmployees.innerHTML = "";
  // Строим заголовок таблицы
  let trHead = document.createElement("tr");
  let idHead = document.createElement("td");
  idHead.innerText = "id";
  trHead.append(idHead);
  let companyHead = document.createElement("td");
  companyHead.innerText = "Компания";
  trHead.append(companyHead);
  let subdivisionHead = document.createElement("td");
  subdivisionHead.innerText = "Подразделение";
  trHead.append(subdivisionHead);
  let positionHead = document.createElement("td");
  positionHead.innerText = "Должность";
  trHead.append(positionHead);
  let surnameEmployeeHead = document.createElement("td");
  surnameEmployeeHead.innerText = "Фамилия";
  trHead.append(surnameEmployeeHead);
  let nameEmployeeHead = document.createElement("td");
  nameEmployeeHead.innerText = "Имя";
  trHead.append(nameEmployeeHead);
  let patronymicEmployeeHead = document.createElement("td");
  patronymicEmployeeHead.innerText = "Отчество";
  trHead.append(patronymicEmployeeHead);
  let dateOfBirthEmplooyeeHead = document.createElement("td");
  dateOfBirthEmplooyeeHead.innerText = "Дата рождения";
  trHead.append(dateOfBirthEmplooyeeHead);
  let salaryHead = document.createElement("td");
  salaryHead.innerText = "Оклад";
  trHead.append(salaryHead);
  tableEmployees.append(trHead);
  // Выводим в таблицу данные из запроса бэкенд
  content.forEach((el) => {
    let tr = document.createElement("tr");
    let idTable = document.createElement("td");
    idTable.innerHTML = el.id;
    tr.append(idTable);
    let nameCompanieTable = document.createElement("td");
    nameCompanieTable.innerHTML = el.name_companie;
    tr.append(nameCompanieTable);
    let nameSubdivision = document.createElement("td");
    nameSubdivision.innerHTML = el.name_subdivision;
    tr.append(nameSubdivision);
    let namePosition = document.createElement("td");
    namePosition.innerHTML = el.name_position;
    tr.append(namePosition);
    let surnameEmployee = document.createElement("td");
    surnameEmployee.innerHTML = el.surname_employee;
    tr.append(surnameEmployee);
    let nameEmployee = document.createElement("td");
    nameEmployee.innerHTML = el.name_employee;
    tr.append(nameEmployee);
    let patronymicEmployee = document.createElement("td");
    patronymicEmployee.innerHTML = el.patronymic_employee;
    tr.append(patronymicEmployee);
    let dateOfBirthEmplooyee = document.createElement("td");
    dateOfBirthEmplooyee.innerHTML = el.date_of_birth_emplooyee.slice(0, 10);
    tr.append(dateOfBirthEmplooyee);
    let salaryTable = document.createElement("td");
    salaryTable.innerHTML = el.salary;
    tr.append(salaryTable);
    tableEmployees.append(tr);
  });
}

// Получаем данные из формы "Сотрудники"
employeesForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const content = formContent(array_form);
  console.log(content);
  const employee = {
    nameEmployee: content.name,
    patronymicEmployee: content.patronymic,
    surnameEmployee: content.surname,
    sex: content.sex,
    dateOfBirthEmplooyee: content.dateOfBirth,
  };
  const response = await fetch(`${URL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
  const result = await response.text();
  console.log(result);
});

// Выводим на экран таблицу "employees"
showEmployees.addEventListener("click", async function (event) {
  event.preventDefault();
  const response = await fetch(`${URL}/employees`);
  const result = await response.json();
  // const createTable = createTable(result);
  showEmployees.innerHTML = `Показать сотрудников<br><br>`;
  createTable(result);
  console.log(result);
});

// открываем форму для заполнения
registration.addEventListener("click", function (event) {
  //registration.style.display = "none";
  countReg++;
  console.log(countReg);
  if (countReg % 2 == 0) {
    registration_form.style.display = "none";
  } else {
    registration_form.style.display = "inherit";
  }
});

// открываем параметры базы
employeeDatabaseParametersOpen.addEventListener("click", function (event) {
  //registration.style.display = "none";
  countReg++;
  console.log(countReg);
  if (countReg % 2 == 0) {
    employeeDatabaseParameters.style.display = "none";
  } else {
    employeeDatabaseParameters.style.display = "flex";
  }
});

// получаем данные о должностях из штатного расписания
staffTable.addEventListener("click", async function(event) {
  event.preventDefault();
  const response = await fetch(`${URL}/companies`);
  const result = await response.json();
  console.log(result);
});