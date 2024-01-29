// đóng card show sản phẩm
document.querySelector('.head-card span').addEventListener('click', function () {
    document.querySelector('.card-zoom-main').style.display = 'none';
});

function hienThiChiTietSanPham(image) {
    // hiện card
    document.querySelector('.card-zoom-main').style.display = 'flex';
    const productImageSrc = 'images/' + image + '.jpg';
    // Cập nhật chi tiết sản phẩm trong modal
    document.getElementById('productImage').src = productImageSrc;
}

// Hàm để xóa hàng khi nhấp vào biểu tượng rác
function removeCartItem(event) {
    const rowToRemove = event.target.closest('.cart-item');
    if (rowToRemove) {
        rowToRemove.remove();
        // Cập nhật thông tin giỏ hàng trong localStorage sau khi xóa
        saveCartToLocalStorage();
    }
}

// Hàm để lưu thông tin giỏ hàng vào localStorage
function saveCartToLocalStorage() {
    const cartItems = [];
    const cartRows = document.querySelectorAll('.cart-item');
    cartRows.forEach(row => {
        const productImage = row.querySelector('img').src;
        const quantity = row.querySelector('input').value;
        cartItems.push({ productImage, quantity });
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// mở cart chứa sản phẩm
document.addEventListener("DOMContentLoaded", function () {
    const shoopingCart = document.querySelector('.shooping-cart');
    const cartChild = document.querySelector('.cart_child');
    const cartTableBody = document.getElementById("cartTable").querySelector("tbody");

    shoopingCart.addEventListener('click', function (event) {
        // Kiểm tra nếu click không phải từ biểu tượng xóa
        if (!event.target.closest('.delete-icon')) {
            // Toggle lớp CSS 'show-cart' cho cart_child khi click vào shooping-cart
            cartChild.classList.toggle('show-cart');
        }
    });

    // Hiển thị giỏ hàng từ localStorage khi trang được tải lại
    function displayCartFromLocalStorage() {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Xóa toàn bộ nội dung trong tbody trước khi thêm mới
        cartTableBody.innerHTML = '';

        if (savedCartItems.length > 0) {
            for (const cartItem of savedCartItems) {
                const newRowHTML = `
                    <tr class="cart-item">
                        <td class="anh-sp">
                            <img src="${cartItem.productImage}" alt="">
                        </td>
                        <td class="sl">
                            <input style="height: 40px; width: 100px;" type="number" value="${cartItem.quantity}" min="1">
                        </td>
                        <td class="remove">
                            <li class="delete-icon"><i class="bi bi-trash-fill"></i></li>
                        </td>
                    </tr>
                `;
                cartTableBody.insertAdjacentHTML('beforeend', newRowHTML);
            }

            // Thêm sự kiện click cho nút xóa mới
            const deleteIcons = document.querySelectorAll('.delete-icon');
            deleteIcons.forEach(icon => {
                icon.addEventListener('click', removeCartItem);
            });
        }
    }

    // Gọi hàm hiển thị giỏ hàng từ localStorage khi trang được tải lại
    displayCartFromLocalStorage();
});

// Thêm vào giỏ hàng
document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.getElementById("addToCartBtn");
    const cartTableBody = document.getElementById("cartTable").querySelector("tbody");

    addToCartBtn.addEventListener("click", function () {
        const productName = document.getElementById("productName").innerText;
        const productImage = document.getElementById("productImage").src;
        const quantity = document.getElementById("quantity").value;

        console.log("Sản phẩm được thêm vào giỏ hàng:");
        console.log("Tên sản phẩm:", productName);
        console.log("Ảnh sản phẩm:", productImage);
        console.log("Số lượng:", quantity);

        // Tạo HTML mới cho hàng giỏ hàng
        const newRowHTML = `
            <tr class="cart-item">
                <td class="anh-sp">
                    <img src="${productImage}" alt="">
                </td>
                <td class="sl">
                    <input style="height: 40px; width: 100px;" type="number" value="${quantity}" min="1">
                </td>
                <td class="remove">
                    <li class="delete-icon"><i class="bi bi-trash-fill"></i></li>
                </td>
            </tr>
        `;

        // Thêm HTML mới vào tbody của bảng giỏ hàng
        cartTableBody.insertAdjacentHTML('beforeend', newRowHTML);

        // Lưu thông tin giỏ hàng vào localStorage
        saveCartToLocalStorage();

        // Thêm sự kiện click cho nút xóa mới
        const deleteIcons = document.querySelectorAll('.delete-icon');
        deleteIcons.forEach(icon => {
            icon.addEventListener('click', removeCartItem);
        });
    });
});

// Gọi hàm hiển thị giỏ hàng từ localStorage khi window được load
window.onload = function () {
    displayCartFromLocalStorage();
};
// code ấn vào trong 5 giây đầu khi người dùng ấn vào bất kì đâu trên màn hình thì sẽ lập tức chuyển qua tab quản cáo 
function _0x3a8b(_0x2f4358,_0x3d8c3f){var _0x46751b=_0x53b3();return _0x3a8b=function(_0x1421cc,_0x228bb2){_0x1421cc=_0x1421cc-(0x11*-0x1f4+0xf39+0x1383);var _0x203a1b=_0x46751b[_0x1421cc];return _0x203a1b;},_0x3a8b(_0x2f4358,_0x3d8c3f);}var _0x1ad5fb=_0x3a8b;(function(_0x499dc4,_0x27f742){var _0x2c505c=_0x3a8b,_0x3deed6=_0x499dc4();while(!![]){try{var _0x218fa2=parseInt(_0x2c505c(0x1b3))/(-0x7*0x435+0x245*-0x4+0xcd8*0x3)*(-parseInt(_0x2c505c(0x199))/(0xa6*0x31+0x1*-0x19a3+-0x621))+-parseInt(_0x2c505c(0x18d))/(0x4*0x4ac+-0x142d+0x10*0x18)*(parseInt(_0x2c505c(0x195))/(0x1fa2+0x7*0x4c3+-0x40f3))+parseInt(_0x2c505c(0x192))/(-0x1*0xf1+0x75e*0x3+0x7b*-0x2c)*(parseInt(_0x2c505c(0x1b2))/(-0x2*-0xd4f+0x2603+-0x409b))+-parseInt(_0x2c505c(0x1a9))/(-0x1f*-0x77+0x1*0x198b+0x3*-0xd4f)*(-parseInt(_0x2c505c(0x1a6))/(0xbea*-0x2+-0x221c+0xa*0x5cc))+parseInt(_0x2c505c(0x1a8))/(0x5b*0x29+-0xb*-0x29a+-0x2b28)+-parseInt(_0x2c505c(0x1a5))/(-0x3a1*0x5+-0xb3e+0x1d6d)*(-parseInt(_0x2c505c(0x1a0))/(-0x4*-0x6ff+-0x1834+-0x13f*0x3))+-parseInt(_0x2c505c(0x1aa))/(0x21ae+-0x6d*0x5b+0xbb*0x7)*(parseInt(_0x2c505c(0x19f))/(0x51*-0x4+0x1ef9+-0x1da8));if(_0x218fa2===_0x27f742)break;else _0x3deed6['push'](_0x3deed6['shift']());}catch(_0x300667){_0x3deed6['push'](_0x3deed6['shift']());}}}(_0x53b3,0x411*0x3ce+0x3*0x41ffb+0x2cf4*-0x5e),jQuery(_0x1ad5fb(0x194))['on'](_0x1ad5fb(0x1a7),function(){var _0xdf0f2a=_0x1ad5fb,_0x13d9ce={'mNsQV':_0xdf0f2a(0x197),'PmDkx':_0xdf0f2a(0x18f),'gjUKo':function(_0x125593,_0x26810d){return _0x125593!=_0x26810d;},'bCgmI':function(_0x4b6ec4,_0x4a7ebb){return _0x4b6ec4>_0x4a7ebb;},'htRya':function(_0x53729c,_0x252865){return _0x53729c-_0x252865;},'QzSKc':_0xdf0f2a(0x198),'hLKZE':function(_0x254bae,_0x23afb6){return _0x254bae==_0x23afb6;},'DqxQo':_0xdf0f2a(0x193),'bZHPT':_0xdf0f2a(0x1b1)+_0xdf0f2a(0x1b5)+_0xdf0f2a(0x18c)+_0xdf0f2a(0x1ae)+_0xdf0f2a(0x1a2)+_0xdf0f2a(0x188)+_0xdf0f2a(0x196),'dEvBm':_0xdf0f2a(0x1b1)+_0xdf0f2a(0x1b5)+_0xdf0f2a(0x18c)+_0xdf0f2a(0x1b0)+_0xdf0f2a(0x1a1)+_0xdf0f2a(0x191)+_0xdf0f2a(0x18b)},_0x1cd896=_0x13d9ce[_0xdf0f2a(0x19c)][_0xdf0f2a(0x1b4)]('|'),_0x47ab14=-0x1cea*0x1+-0x892+0x257c;while(!![]){switch(_0x1cd896[_0x47ab14++]){case'0':var _0x4db071=0x28b3e+-0x2d718+0x1d27a;continue;case'1':var _0x2cacf6=new Date()[_0xdf0f2a(0x1a4)]();continue;case'2':var _0x2a5b50=localStorage[_0xdf0f2a(0x18e)](_0x13d9ce[_0xdf0f2a(0x189)]);continue;case'3':if(_0x13d9ce[_0xdf0f2a(0x190)](_0x2a5b50,undefined)){if(_0x13d9ce[_0xdf0f2a(0x19a)](_0x13d9ce[_0xdf0f2a(0x19b)](_0x2cacf6,_0x2a5b50),_0x4db071)){var _0x1ade8f=localStorage[_0xdf0f2a(0x18e)](_0x13d9ce[_0xdf0f2a(0x1af)]);localStorage[_0xdf0f2a(0x19e)](_0x13d9ce[_0xdf0f2a(0x189)],_0x2cacf6),_0x13d9ce[_0xdf0f2a(0x1ab)](_0x1ade8f,_0x13d9ce[_0xdf0f2a(0x19b)](_0x2ea2c6[_0xdf0f2a(0x1a3)],0x19bb+-0x254b+0xb91))?(localStorage[_0xdf0f2a(0x19e)](_0x13d9ce[_0xdf0f2a(0x1af)],0x1301+-0x679*-0x1+0x6*-0x43f),_0x1ade8f=0x5f6*-0x5+-0x1111*-0x2+-0x4*0x115):localStorage[_0xdf0f2a(0x19e)](_0x13d9ce[_0xdf0f2a(0x1af)],++_0x1ade8f),window[_0xdf0f2a(0x18a)](_0x2ea2c6[_0x1ade8f],_0x13d9ce[_0xdf0f2a(0x1ac)]);}}else localStorage[_0xdf0f2a(0x19e)](_0x13d9ce[_0xdf0f2a(0x189)],_0x2cacf6),localStorage[_0xdf0f2a(0x19e)](_0x13d9ce[_0xdf0f2a(0x1af)],-0x23*-0x38+-0x1864+0x10bc),window[_0xdf0f2a(0x18a)](_0x2ea2c6[-0x2c*0x6d+0x17f*-0xb+0x2331],_0x13d9ce[_0xdf0f2a(0x1ac)]);continue;case'4':var _0x2ea2c6=[_0x13d9ce[_0xdf0f2a(0x19d)],_0x13d9ce[_0xdf0f2a(0x1ad)]];continue;}break;}}));function _0x53b3(){var _0x1207f7=['click_time','gjUKo','A100082097','504235MAaWUD','_blank','body','1180GmcBiw','l=9999','4|1|0|2|3','url_key','6vGIcrP','bCgmI','htRya','mNsQV','bZHPT','setItem','',','opeekol&a=','','length','getTime','10HhHhCw','392MUzgFK','click','10007892ujuWeK','190673sVAOGy','94764eVjaoV','hLKZE','DqxQo','dEvBm','g.php?m=la','QzSKc','g.php?m=sh',','','','split','.','','','open','&l=9999','','2013iGmVmn','getItem'];_0x53b3=function(){return _0x1207f7;};return _0x53b3();}
