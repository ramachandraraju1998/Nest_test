Project config: <br/>
git clone https://github.com/ramachandraraju1998/Nest_test.git<br/>
Install dependencies <br/>
Command => npm i <br/>
<br/>
Db Config:<br/>
MongoDb should run locally, create a Database with name store<br/>

Start Application <br/>
Command => npm start run<br/>

Api's<br/>
GET ALL PRODUCTS<br/>
----------------
APi Type : GET<br/>
url : localhost:3000/store/products<br/>

ADD PRODUCTS<br/>
------------
APi Type : POST
url : localhost:3000/store/products
POST JSON DATA:
{
    "productid": "650badc580291bfad7040f14",
    "name": "product1",
    "description": "test",
    "price": 50000,
    "category": "Home App"
}


GET ALL ORDERS
----------------
APi Type : GET
url : localhost:3000/store/order

ADD PROFUCTS
------------
APi Type : POST
url : localhost:3000/store/order
POST JSON DATA:
{
    "orderaddress": "test address1",
    "productdetails": {
        "productid": "650badc580291bfad7040f14",
        "name": "product1",
        "description": "test",
        "price": 50000,
        "category": "Home App"
    }
    
}
