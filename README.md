Project config:
git clone https://github.com/ramachandraraju1998/Nest_test.git
Install dependencies 
Command => npm i

Db Config:
MongoDb should run locally, create a Database with name store

Start Application 
Command => npm start run

Api's
GET ALL PRODUCTS
----------------
APi Type : GET
url : localhost:3000/store/products

ADD PRODUCTS
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