var arrIdSpan = [
    'mailId',
    'nameId',
    'passId',
    'passId2',
    'phoneId',
    'genderId'
]
isValid = true;
function addDataUser(){
event.preventDefault();
var uSer = {};
arrValue = document.querySelectorAll("form input, select");
// console.log(arrValue);
// dùng vòng lặp lấy giá trị thông qua arrValue DOM tới các thẻ html
for(var i=0; i<arrValue.length; i++){
    
    var data = arrValue[i];
    // isValid &= checkEmptyValue(data.value, arrIdSpan[i]);
    // console.log(data.id);
    // console.log(arrValue[i].id);
    uSer[data.id] = data.value;
    // if(arrValue[i].id == 'email'){
    //     checkEmailValue(data.value, arrIdSpan[i]);
    // }
    if (arrValue[i].id == "phone") {
        isValid &=
          checkEmptyValue(data.value, arrIdSpan[i]) &&
          checkPhoneValue(data.value, arrIdSpan[i]);
      } else if (arrValue[i].id == "name") {
        isValid &=
          checkEmptyValue(data.value, arrIdSpan[i]) &&
          checkNameValue(data.value, arrIdSpan[i]);
      } else if (arrValue[i].id == "email") {
        isValid &=
          checkEmptyValue(data.value, arrIdSpan[i]) &&
          checkEmailValue(data.value, arrIdSpan[i]);
      } else if (arrValue[i].id == "password") {
        isValid &=
          checkEmptyValue(data.value, arrIdSpan[i]) &&
          checkPasswordValue(data.value, arrIdSpan[i]);
      } else {
        isValid &= checkEmptyValue(data.value, arrIdSpan[i]);
      }
   
    

    
    // console.log(uSer[data.id]);


};
// console.log(uSer);
// if(isValid){
    



// }
// FORM DATA
var promise = axios({
    method : 'POST',
    url : 'https://shop.cyberlearn.vn/api/Users/signup',
    // data giúp truyền dữ liệu lên trên sever
    data : uSer,
   });

   promise.then(function(result){
    console.log(result);
    openToast(result.data.message)
    
   })
   .catch(function(error){
    console.log(error);
   });

}

function openToast(string){
    document.querySelector('.toast-body').innerHTML = string;
// gọi tới layout toast 
    const toastLiveExample = document.getElementById('liveToast');
// thêm toast bootrap để có thể sử dụng phương thức show giúp mở toast lên
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show()
}