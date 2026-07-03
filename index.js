let productCode=document.getElementById("product-code");
let productname=document.getElementById("product-name");
let productPrice=document.getElementById("product-price");
let productQuantity=document.getElementById("product-quantity");
let btn=document.getElementById("btn-atc");
let table=document.getElementById("table");
let products=[];
btn.addEventListener("click",()=>{

    if(productCode.value==="" || productPrice.value==="" 
        || productQuantity.value==="" ||productname.value===""){
            alert("pls fill the details");
            return;
        }
        if(productPrice.value<0||productQuantity.value<0||productCode.value<0 || productQuantity.value==0){
          alert("dont give negative value");
          return;
        }
   let  product={
        Code:productCode.value,
        name:productname.value,
        price:productPrice.value,
        quantity:productQuantity.value
    }
    products.push(product);
    
    table.innerHTML=`
     
          <tr >
        <th>Product Code</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
           <th>total amount</th>
    </tr>
   `;
     products.forEach((items,index) => {
        
        let total=Number(items.price)*Number(items.quantity);
        table.innerHTML+=`
     
          <tr>
        <td>${items.Code}</td>
        <td>${items.name}</td>
        <td>${items.price}</td>
        <td>${items.quantity}</td>
        <td>${total}</td>
        <td><button onClick="deleterow(${index})">delete</button></td>
           
    </tr>
   `

  //{ productCode.value = "";
//productname.value = "";
//productPrice.value = "";
//productQuantity.value = "";
     });

})


function deleterow(index){
  products.splice(index, 1);
  console.log(products);
  if(products.length==0){
    table.style.display="none";
    table.innerHTML="";
    return;
}else{
    table.style.display="table";
}
  table.innerHTML=`
     
          <tr >
        <th>Product Code</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
           <th>total amount</th>
    </tr>
   `;
     products.forEach((items,index) => {
        
        let total=Number(items.price)*Number(items.quantity)*0.18;
        table.innerHTML+=`
     
          <tr>
        <td>${items.Code}</td>
        <td>${items.name}</td>
        <td>${items.price}</td>
        <td>${items.quantity}</td>
        <td>${total}</td>
        <td><button onClick="deleterow(${index})">delete</button></td>
           
    </tr>
   `
 

  ;
     });
     
}