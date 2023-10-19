/*Bật tắt form xác nhận xóa*/
const deleteOrders = document.querySelectorAll('.js-delete-order')
const modalDeleteOrder = document.querySelector('.js-modal-deleteOrder')   
const modalDeleteOrderClose = document.querySelector('.js-modal-deleteOrder-close')
const modalDeleteOrderContainer = document.querySelector('.js-modal-deleteOrder-container')
const modalDeleteOrderChooseYes = document.querySelector('.js-order-btn-yes')
const modalDeleteOrderChooseNo = document.querySelector('.js-order-btn-no')

function showFormDeleteOrder(){
    modalDeleteOrder.classList.add('open-form-delete')
}

function hideFormDeleteOrder(){
    modalDeleteOrder.classList.remove('open-form-delete')
}

for(const deleteOrder of deleteOrders){
    deleteOrder.addEventListener('click', showFormDeleteOrder)
}

modalDeleteOrderClose.addEventListener('click', hideFormDeleteOrder)
modalDeleteOrder.addEventListener('click', hideFormDeleteOrder)
modalDeleteOrderContainer.addEventListener('click', function(){
    event.stopPropagation()
})
modalDeleteOrderChooseYes.addEventListener('click', hideFormDeleteOrder)
modalDeleteOrderChooseNo.addEventListener('click', hideFormDeleteOrder)