window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("params", myParam);
  // call api https://shop.cyberlearn.vn/api/Product/getbyid?id=1

  axios({
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`,
    method: "GET",
  })
    .then((result) => {
      console.log(result.data);
      document.getElementById("imgTesst").src = result.data.content.image;
      document.getElementById("sneakerName").innerHTML =
        result.data.content.name;
      document.getElementById("textSneaker").innerHTML =
        result.data.content.shortDescription;
      renderSize(result.data.content.size);
      document.getElementById("giaTien").innerHTML = result.data.content.price;
      // renderDataProduct(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

function renderSize(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var productSize = arr[i];
    // console.log(productSize);
    content += ` <button class="btn btn-info  ">${productSize}</button>`;
  }
  document.getElementById("checkSize").innerHTML = content;
}
// PRODUCT DATA

// var arrProduct = [];
function getDataProduct() {
  var promise = axios({
    method: "GET",
    url: "https://shop.cyberlearn.vn/api/Product",
    // responsetype: 'JSON',
  });
  promise
    .then(function (reason) {
      console.log(reason.data.content);
      // arrProduct = result.data.content;
      renderDataProduct(reason.data.content);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getDataProduct();
function renderDataProduct(arr) {
  var content = "";
  for (var a = 0; a < arr.length; a++) {
    var product = arr[a];
    content += `
      <div class="col-4">
          <a href="../control.hmtl/detail.html?productid=${product.id}">
              <div class="item_top">
              <div class="img_product">
                  <img src=${product.image} alt="">
              </div>
              <p class="product_name">${product.name}</p>
              <p class="product_description">${product.description}</p>
              </div>
              <div class="item_bottom">
              <button>Buy now</button>
              <p>${product.price}$</p>
              </div>
          </a>
      </div>
      `;
  }
  document.getElementById("productRow").innerHTML = content;
}
