const customers = document.querySelectorAll('.js-changeCustomer')
const modalCustomer = document.querySelector('.js-modal-customer')
const modalCustomerClose = document.querySelector('.js-modalCustomer-close')
const modalCustomerContainer = document.querySelector('.js-modalCustomer-container')
const customerName = document.querySelector('.js-customer-name')
const customerAddress = document.querySelector('.js-customer-address')
const customerEmail = document.querySelector('.js-customer-email')
const customerPhone = document.querySelector('.js-customer-phone')
const changeInfoCustomer = document.querySelector('.js-change-customer')
const cancelCustomer = document.querySelector('.js-cancel-customer')

function showFormChangeCustomer(){
    modalCustomer.classList.add('open')
    customerName.value = ""
    customerAddress.value = ""
    customerEmail.value = ""
    customerPhone.value = ""
}

function hideFormChangeCustomer(){
    modalCustomer.classList.remove('open')
}

for(const customer of customers){
    customer.addEventListener('click', showFormChangeCustomer)
}

modalCustomerClose.addEventListener('click', hideFormChangeCustomer)
modalCustomer.addEventListener('click', hideFormChangeCustomer)
modalCustomerContainer.addEventListener('click', function(){
    event.stopPropagation()
})
changeInfoCustomer.addEventListener('click', hideFormChangeCustomer)
cancelCustomer.addEventListener('click', hideFormChangeCustomer)

customers.forEach(function(customer){
    customer.addEventListener('click', function(){
        const row = this.parentElement.parentElement
        modalCustomer.classList.add('open')
        customerName.value = row.querySelector('.customer-name').textContent
        customerAddress.value = row.querySelector('.customer-address').textContent
        customerEmail.value = row.querySelector('.customer-email').textContent
        customerPhone.value = row.querySelector('.customer-phone').textContent
    })
})

/*Bật tắt form xác nhận xóa*/
const deleteCustomers = document.querySelectorAll('.js-delete-customer')
const modalCustomerDelete = document.querySelector('.js-modal-deleteCustomer')   
const modalCustomerDeleteClose = document.querySelector('.js-modal-deleteCustomer-close')
const modalCustomerDeleteContainer = document.querySelector('.js-modal-deleteCustomer-container')
const modalCustomerDeleteChooseYes = document.querySelector('.js-customer-btn-yes')
const modalCustomerDeleteChooseNo = document.querySelector('.js-customer-btn-no')


function showFormDeleteCustomer(){
    modalCustomerDelete.classList.add('open-form-delete')
}

function hideFormDeleteCustomer(){
    modalCustomerDelete.classList.remove('open-form-delete')
}

for(const deleteCustomer of deleteCustomers){
    deleteCustomer.addEventListener('click', showFormDeleteCustomer)
}

modalCustomerDeleteClose.addEventListener('click', hideFormDeleteCustomer)
modalCustomerDelete.addEventListener('click', hideFormDeleteCustomer)
modalCustomerDeleteContainer.addEventListener('click', function(){
    event.stopPropagation()
})
modalCustomerDeleteChooseYes.addEventListener('click', hideFormDeleteCustomer)
modalCustomerDeleteChooseNo.addEventListener('click', hideFormDeleteCustomer)