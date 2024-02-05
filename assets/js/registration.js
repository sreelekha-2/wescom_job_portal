
const togglePassword = document.getElementById('toggleRegPassword');
const password = document.getElementById('registrationPassword');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    togglePassword.classList.toggle('icon-eye-slash');
    togglePassword.classList.toggle('icon-eye');
});



var data = ["Apple", "Banana", "Cherry", "Date", "ElderberriesElderberry"]; // Programatically-generated options array with > 5 options
var placeholder = "select";
$(".js-example-basic-single").select2({
    data: data,
    placeholder: placeholder,
    allowClear: false,
    minimumResultsForSearch: 5
});

$(".js-example-basic-single").select2().on("select2-open", ":input", function () {
    setTimeout(function () {
        $(":focus").blur();
    }, 50);
});

