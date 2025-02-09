const items=[
    {
        "id":1,
        "name":"BMX cycle",
        "cost":15000,
    },
    {
        "id":2,
        "name":"Hybrid bicycle",
        "cost":9000
    },
    {
        "id":3,
        "name":"MTB bicycle",
        "cost":14500
    },
    {
        "id":4,
        "name":"santa cruz v10 carbon BMX bicycle",
        "cost":14500
    },
    {
        "id":5,
        "name":"cardiac single speed Hybrid bicycle",
        "cost":8990
    },
    {
        "id":6,
        "name":"Blue MTB",
        "cost":15000
    },
    {
        "id":7,
        "name":"Jaugar MTB bicycle",
        "cost":10990
    },
    {
        "id":8,
        "name":"Hotrock MTB bicycle",
        "cost":1500
    },
    {
        "id":9,
        "name":"Vector MTB bicycle",
        "cost":10000
    },
    {
        "id":10,
        "name":"Hybrid2 bicycle",
        "cost":14500
    },
    {
        "id":11,
        "name":"Women Hybrid bicycle",
        "cost":8990
    },
    {
        "id":12,
        "name":"Bravo Hybrid bicycle",
        "cost":8990
    },
    {
        "id":13,
        "name":"New Hybrid",
        "cost":10000
    },
    {
        "id":14,
        "name":"MTB Kids Special",
        "cost":9000
    },
    {
        "id":15,
        "name":"BMX Ultra",
        "cost":9000
    },
    {
        "id":16,
        "name":"Cycle",
        "cost":8000
    },
    {
        "id":17,
        "name":"MTB for Kids",
        "cost":10000
    },
    {
        "id":18,
        "name":"Hybrid XP",
        "cost":8000
    },
    {
        "id":19,
        "name":"Helmet",
        "cost":2000
    },
    {
        "id":20,
        "name":"Bottle Holder",
        "cost":2000
    },
    {
        "id":21,
        "name":"Saddle Bag",
        "cost":2500
    },
    {
        "id":22,
        "name":"Mask",
        "cost":2500
    },
    {
        "id":23,
        "name":"Bottle",
        "cost":2000
    },
    {
        "id":24,
        "name":"Bike Lock",
        "cost":2500
    },
    
];
var totamt=0;
var itemcount=0;
function addItemToCart(id)
{
    var itemid=id;
    var item=items.find(item=>item.id===itemid);
    console.log(item);
    var itemcost=item.cost;
    var itemname=item.name;
    var quantity=1;
    itemcount+=1;
    totamt+=quantity*itemcost;

    var cart=document.getElementById("carttable");
    cart.innerHTML+=
    `
       <tr>
        <th>${itemcount} </th>
        <th>${itemname} </th>
        <th>${quantity} </th>
        <th>${itemcost} </th>
        <th> ${quantity*itemcost} </th>
       </tr>
      
     `
     /*var carttotal =document.getElementById("carttotal");
     carttotal.innerHTML+=
     `
      <tr>
         <th></th>
         <th></th>
         <th></th>
         <th><b>TOTAL</b></th>
         <th> ${totamt}</th>
        </tr>
      `*/

    document.getElementById("totalamt").innerHTML=totamt;
 
}
