let productCode=document.getElementById("product-code");
let productName=document.getElementById("product-name");
let productPrice=document.getElementById("product-price");
let productQuantity=document.getElementById("product-quantity");
let btn=document.getElementById("btn-atc");
let table=document.getElementById("table");
let billBtn=document.getElementById("bill");

let products=[];
let billNumber=1001;
btn.addEventListener("click",()=>{
 if(productCode.value=="" ||
    productName.value=="" ||
   productPrice.value=="" ||
  productQuantity.value==""){
        alert("Please fill all details");
     return;
    }
    if(productCode.value<0 ||
       productPrice.value<0 ||
       productQuantity.value<=0){
        alert("Invalid Input");
        return;
    }
    let product={
        code:productCode.value,
        name:productName.value,
        price:Number(productPrice.value),
        quantity:Number(productQuantity.value)
    };

    products.push(product);
    displayProducts();
    productCode.value="";
    productName.value="";
    productPrice.value="";
    productQuantity.value="";

});
function displayProducts(){

 table.innerHTML=`
    <tr> <th>Code</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
    <th>Delete</th>

    </tr>

    `;

    products.forEach((item,index)=>{
     let total=item.price*item.quantity;
 table.innerHTML+=`
   <tr>
        <td>${item.code}</td>
        <td>${item.name}</td>
        <td>₹${item.price}</td>
        <td>${item.quantity}</td>
        <td>₹${total}</td>   <td>

   <button onclick="deleteRow(${index})">
        Delete
 </button>

 </td>  </tr>
  `; });

}

function deleteRow(index){

    products.splice(index,1)
    displayProducts();
if(products.length==0){ table.innerHTML="";

 document.getElementById("bill-no").innerHTML="-";
   document.getElementById("bill-date").innerHTML="-";
   document.getElementById("subtotal").innerHTML="0";
    document.getElementById("gst").innerHTML="0";
   document.getElementById("final-total").innerHTML="0";
    }

}

billBtn.addEventListener("click",()=>{
  if(products.length==0){

        alert("Cart is Empty");
      return;
}

let subtotal=0;
    products.forEach(item=>{
        subtotal+=item.price*item.quantity; });
    let gst=subtotal*0.18;
    let finalTotal=subtotal+gst;
    let today=new Date();
    let date=today.toLocaleDateString();

    document.getElementById("bill-date").innerHTML=date;
    document.getElementById("bill-no").innerHTML=billNumber++;
    document.getElementById("subtotal").innerHTML=subtotal.toFixed(2);
    document.getElementById("gst").innerHTML=gst.toFixed(2);
    document.getElementById("final-total").innerHTML=finalTotal.toFixed(2);

});