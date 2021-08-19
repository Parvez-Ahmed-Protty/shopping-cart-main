function getProducts(product,price,isAdd){
    const productInput = document.getElementById(product+'-input');
    let productNumber = parseInt(productInput.value) ;
    if (isAdd == true){
        productNumber = productNumber + 1;
    }
    else {
        if (productNumber > 0){
            productNumber = productNumber - 1;
        }
    }
    
    productInput.value = productNumber ;
    const productPrice = document.getElementById(product+'-price');
    productPrice.innerText = productNumber * price ;
    // update price
    catcolation();
}
function getInputValue(product){
    const productInput =document.getElementById(product+'-input');
    const productNumber = productInput.value ;
    return productNumber ;
}
function catcolation(){
    const phone = getInputValue('phone') * 1219 ;
    const cas = getInputValue('case') * 59 ;
    const subTotal = phone + cas ;
    const taxAmount = subTotal / 10 ;
    const toalPrice = subTotal + taxAmount ;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = toalPrice;
}
document.getElementById('phone-plus').addEventListener('click', function (){
    const phone = getProducts('phone',1219,true);

})
document.getElementById('phone-minus').addEventListener('click', function (){
    const phone = getProducts('phone',1219,false);
})
document.getElementById('case-plus').addEventListener('click', function (){
    const cas = getProducts('case',59,true);
})
document.getElementById('case-minus').addEventListener('click', function (){
    const cas = getProducts('case',59,false);
})