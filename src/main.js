const registration=document.getElementById('registration');
const registration_form=document.getElementById('registration_form');
const form=document.querySelector('form'); // получаю содержимое формы
const array_form=[...form]; // перевожу содержимое формы в массив
// открываем форму для заполнения
registration.addEventListener("click", function(event){
    registration.style.display='none';
    registration_form.style.display='inherit';
});
// получаем данные из формы
form.addEventListener("submit", function(event){    
    for (let index = 0; index < array_form.length; index++) {
        if (array_form[index].type=='checkbox') {
            console.log(array_form[index].checked);
        } else{
            console.log(array_form[index].value);
        } 
    }
});