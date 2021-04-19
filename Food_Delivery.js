const Food_Item=document.querySelector('#Food_Item');//for id
const Customer_Name=document.querySelector('#Customer_Name');//for id 
const Quantity=document.querySelector('#Quantity');  //for id
const Delivery_Date=document.querySelector('#Delivery_Date');//for id
const btn=document.querySelector('.btn');    //for class
const Food_List=document.querySelector('#Food_List'); //for id

btn.addEventListener('click',function(e) {
e.preventDefault();       //output hold on console 
 
//form validation
if(Food_Item.value =='' && Customer_Name.value =='' && Quantity.value == '' && Delivery_Date.value =='')
{
  alert('Please input valid info');

}

else{

  const newRow = document.createElement('tr');

//its for food item
const newFood = document.createElement('th');
newFood.innerHTML= Food_Item.value;
newRow.appendChild(newFood);

//its for customer name

const newCustomer_Name = document.createElement('th');
newCustomer_Name.innerHTML =Customer_Name.value;
newRow.appendChild(newCustomer_Name);

//its for quantity


const newQuantity=document.createElement('th');
newQuantity.innerHTML=Quantity.value;
newRow.appendChild(newQuantity);
//its for delivery_date

const newDelivery_Date=document.createElement('th');
newDelivery_Date.innerHTML=Delivery_Date.value;
newRow.appendChild(newDelivery_Date);

//showing table in UI
Food_List.appendChild(newRow);
}
});