var arrProduct = [];
function getDataProduct() {
    var promise = axios({
        method: 'GET',
        url: 'https://shop.cyberlearn.vn/api/Product',
        responsetype: 'JSON',
    });
    promise.then(function (result) {
        console.log(result.data.content);
        arrProduct = result.data.content;
        renderDataProduct(arrProduct)
    }).catch(function (error) {
        console.log(error);
    });
}
getDataProduct();

function renderDataProduct(arr) {
    var content = '';
    for (var i = 0; i < arrProduct.length; i++) {
        var product = arr[i];
        content += `
        <div class="col-4">
            <a href="../control.hmtl/detail.html?productid=${product.id}">
                <div class="item_top">
                <div class="img_product">
                    <img src=${product.image} alt="">
                </div>
                <p class="product_name">${product.name}</p>
                <p class="product_description">${product.description
                }</p>
                </div>
                <div class="item_bottom">
                <button>Buy now</button>
                <p>${product.price}$</p>
                </div>
            </a>
        </div>
        `;
    }
    document.querySelector('.row').innerHTML = content;
}
