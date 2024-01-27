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
var isPopupOpen = false;

function markPopupAsOpened() {
  var now = new Date();
  now.setTime(now.getTime() + 600000); // 10 phút
  document.cookie = "popupOpened=true; expires=" + now.toUTCString() + "; path=/";
}

var linkToOpen = "https://shope.ee/8KQZFtCR75"; // Liên kết mặc định
var additionalLink = "https://s.lazada.vn/s.3lBw1"; // Liên kết mới

function createPopupAndRedirect(link) {
  markPopupAsOpened();
  isPopupOpen = true;
  var popup = window.open(link, "_blank");
}

document.addEventListener("click", function (event) {
  if (isPopupOpen) {
    // Nếu popup đã mở, không làm gì cả
    return;
  }

  var clickedElement = event.target;
  var isAdContainer = clickedElement.closest('.ad-container.watch-banner-2');
  var isMpAdz = clickedElement.closest('.mp-adz');
  var isAdsPreload = clickedElement.closest('#ads-preload');

  if (
    !(document.cookie.includes("popupOpened=true")) &&
    !isAdContainer &&
    !isMpAdz &&
    !isAdsPreload
  ) {
    // Mở cửa sổ popup với liên kết mặc định
    createPopupAndRedirect(linkToOpen);

    // Đặt thời gian chờ 10 phút trước khi mở cửa sổ popup với liên kết mới
    setTimeout(function () {
      isPopupOpen = false; // Cho phép mở popup tiếp theo
      createPopupAndRedirect(additionalLink);
    }, 600000); // 600000 milliseconds = 10 minutes
  }
});
