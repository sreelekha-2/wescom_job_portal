
const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    togglePassword.classList.toggle('fa-eye');
});


// const countryData=[
//     {url:"../../../images/afghanisthan.png",countryCode:"+93"},
//     {url:"../../../images/australia.png",countryCode:"+93"},
//     {url:"../../../images/hangkong.png",countryCode:"+93"},
//     {url:"../../../images/india.png",countryCode:"+93"},
//     {url:"../../../images/jordan.png",countryCode:"+93"}
// ];
// let listData = ""
// countryData.forEach(({ url }) => {

//     listItem = "<li class='dropdown-item'><img src=" + url + "/></li>"
//     listData = listData + listItem
// }
// )

// // console.log
// document.getElementById("countriesList").innerHTML=listData

// window.intlTelInput(input, {
//     initialCountry: "us",
//     showSelectedDialCode: true,
    
//   });

// $(document).ready(function() {
//     $('.js-example-basic-single').select2();
// });