const addBooks = document.querySelectorAll('.js-add-book')
const modalAdd = document.querySelector('.js-modal-addBook')   
const modalAddClose = document.querySelector('.js-modal-addBook-close')
const modalAddContainer = document.querySelector('.js-modal-addBook-container')
const add = document.querySelector('.js-addBook')
const cancelBooks = document.querySelectorAll('.js-cancel-book')

function showFormAddBook(){
    modalAdd.classList.add('open')
}

function hideFormAddBook(){
    modalAdd.classList.remove('open')
}

for(const addBook of addBooks){
    addBook.addEventListener('click', showFormAddBook)
}

for(const cancelBook of cancelBooks){
    cancelBook.addEventListener('click', hideFormAddBook)
}

modalAddClose.addEventListener('click', hideFormAddBook)
modalAdd.addEventListener('click', hideFormAddBook)
modalAddContainer.addEventListener('click', function(){
    event.stopPropagation()
})
add.addEventListener('click', hideFormAddBook)


const changeBooks = document.querySelectorAll('.js-changeBook')
const modalChangeBook = document.querySelector('.js-modal-changeBook')  
const modalChangeBookClose = document.querySelector('.js-modal-changeBook-close')
const modalChangeBookContainer = document.querySelector('.js-modal-changeBook-container')
const saveChangeBook = document.querySelector('.js-save-changedBook')
const bookName = document.querySelector('.js-book-name')
const bookCategory = document.querySelector('.js-book-category')
const bookQuantity = document.querySelector('.js-book-quantity')
const bookPrice = document.querySelector('.js-book-price')
const bookAuthor = document.querySelector('.js-book-author')
const bookTags = document.querySelector('.js-book-tags')
const bookDescription = document.querySelector('.js-book-description')

changeBooks.forEach(function(changeBook){
    changeBook.addEventListener('click', function(){
        const row = this.parentElement.parentElement
        modalChangeBook.classList.add('open')
        bookName.value = row.querySelector('.book-name').textContent
        bookCategory.value = row.querySelector('.book-category').textContent
        bookQuantity.value = row.querySelector('.book-quantity').textContent
        bookPrice.value = row.querySelector('.book-price').textContent.match(/\d+/)
        bookAuthor.value = row.querySelector('.book-author').textContent
        bookTags.value = row.querySelector('.book-tags').textContent
        bookDescription.value = row.querySelector('.book-description').textContent
    })
})

function hideFormChangeBook(){
    modalChangeBook.classList.remove('open')
}

for(const cancelBook of cancelBooks){
    cancelBook.addEventListener('click', hideFormChangeBook)
}

modalChangeBookClose.addEventListener('click', hideFormChangeBook)
modalChangeBook.addEventListener('click', hideFormChangeBook)
modalChangeBookContainer.addEventListener('click', function(){
    event.stopPropagation()
})
saveChangeBook.addEventListener('click', hideFormChangeBook)

/*Bật tắt form xác nhận xóa*/
const deleteBooks = document.querySelectorAll('.js-delete-book')
const modalDeleteBook = document.querySelector('.js-modal-deleteBook')   
const modalDeleteBookClose = document.querySelector('.js-modal-deleteBook-close')
const modalDeleteBookContainer = document.querySelector('.js-modal-deleteBook-container')
const modalDeleteBookChooseYes = document.querySelector('.js-book-btn-yes')
const modalDeleteBookChooseNo = document.querySelector('.js-book-btn-no')

function showFormDeleteBook(){
    modalDeleteBook.classList.add('open-form-delete')
}

function hideFormDeleteBook(){
    modalDeleteBook.classList.remove('open-form-delete')
}

for(const deleteBook of deleteBooks){
    deleteBook.addEventListener('click', showFormDeleteBook)
}

modalDeleteBookClose.addEventListener('click', hideFormDeleteBook)
modalDeleteBook.addEventListener('click', hideFormDeleteBook)
modalDeleteBookContainer.addEventListener('click', function(){
    event.stopPropagation()
})
modalDeleteBookChooseYes.addEventListener('click', hideFormDeleteBook)
modalDeleteBookChooseNo.addEventListener('click', hideFormDeleteBook)

// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
        main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast-close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle"
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast-${type}`);
        toast.style.animation = `slideInLeft ease .4s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
                        <div class="toast-icon">
                            <i class="${icon}"></i>
                        </div>
                        <div class="toast-body">
                            <h3 class="toast-title">${title}</h3>
                            <p class="toast-msg">${message}</p>
                        </div>
                        <div class="toast-close">
                            <i class="fas fa-times"></i>
                        </div>
                    `;
        main.appendChild(toast);
    }
}