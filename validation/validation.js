// check validation emty
function checkEmptyValue(value, idSpan) {
    // check dữ liệu của user
    if (value == "") {
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).style.color = "red";

      document.getElementById(idSpan).innerHTML = `Vui lòng không bỏ trống`;
      return false;
    } else {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    };
  };
  // check validation Email 
function checkEmailValue(value, idSpan) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // sử dụng phương thức test để kiểm tra dữ liệu đầu vào có thoả chuỗi regex hay không
  regexEmail.test(value); // true , dữ liệu không thoả ==> false
  if (regexEmail.test(value)) {
    // dữ liệu thoả regex
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(idSpan).style.display = "block";
    document.getElementById(idSpan).innerHTML =
      "Định dạng email không chính xác";
    return false;
  };
};

  // check validation user name :
  function checkNameValue(value, idSpan) {
    regexName = /^[a-zA-Z]+$/;
    regexName.test(value);
    if (regexName.test(value)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    }else{
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).style.color = "red";
      document.getElementById(idSpan).innerHTML =
        "Chỉ được nhập chữ cái";
      return false;
    };
  };
  // check validation password :
function checkPasswordValue(value, idSpan) {
    regexPassword = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,10}$/;
    regexPassword.test(value);
    if (regexPassword.test(value)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    }else{
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).style.color = "red";
      document.getElementById(idSpan).innerHTML =
        "Password cần có từ 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
      return false;
    };
  };

  // check validation user phone
  function checkPhoneValue(value, idSpan) {
    regexPhone = /^\d+$/;
    regexPhone.test(value);
    if (regexPhone.test(value)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    }else{
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).style.color = "red";
      document.getElementById(idSpan).innerHTML =
        "Chỉ có thể nhập số";
      return false;
    };
  };
