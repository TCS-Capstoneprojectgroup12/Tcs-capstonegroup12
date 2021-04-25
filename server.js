var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");
var url = "mongodb://127.0.0.1:27017/CAPSTONE";
var Schema = mongo.Schema;
var db = mongo.connect(url, function (err, response) {
    if (err) { console.log(err); }
    else { console.log('Connected to ' + db, ' + ', response); }
});

const userSchema = new Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { collection: 'Admin' });

const Admin = mongo.model('Admin', userSchema);


const productSchema = new Schema({
    product_name: { type: String, required: true },
    product_price: { type: String, required: true },
    product_quantity: { type: String, required: true },
    discount:{ type: String}
}, { collection: 'Product' });
const Product = mongo.model('Product', productSchema);

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
})

app.post('/api/admin/login', (req, res) => {
    mongo.connect(url, function (err) {
        if (err) throw err;
        console.log('connected successfully, username is ', req.body.username, ' password is ', req.body.password);

        Admin.find({
            name: req.body.username, password: req.body.password
        }, function (err, user) {
            if (err) throw err;
            if (user.length === 1) {
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }

        })
    });
})


app.post("/api/saveProduct", function (req, res) {
    mongo.connect(url, function (err) {
        if (err) throw err;
        var mod = new Product(req.body);
        if (req.body.mode == "Save") {
            mod.save(function (err, data) {
                if (err) {
                    res.send({status: 'fail',data:err});
                }
                else {
                    res.send({status: 'success', data: "Record has been Inserted..!!" });
                }
            });
        }
        else {
            Product.findByIdAndUpdate(req.body._id, { product_name: req.body.product_name, product_price: req.body.product_price, product_quantity: req.body.product_quantity,discount:req.body.discount },
                function (err, data) {
                    if (err) {
                        res.send({status: 'fail',data:err});
                    }
                    else {
                        res.send({status: 'success', data: "Record has been Updated..!!" });
                    }
                }); 
        }
    });
})


app.get("/api/getProduct", function (req, res) {
    mongo.connect(url, function (err) {
        if (err) throw err;
        Product.find({}, function (err, data) {
        if (err) {
            res.send({status: 'fail',data:err});
        }
        else {
            res.send({status: 'success', data: data });
        }
    });
});
})

app.post("/api/deleteProduct",function(req,res){    
    mongo.connect(url, function (err) {
        if (err) throw err;  
        Product.remove({ _id: req.body.id }, function(err) {    
     if(err){    
        res.send({status: 'fail',data:err}); 
     }    
     else{      
        res.send({status: 'success', data: "Record has been Deleted..!!" });                
        }    
 });    
});
   })  

app.listen(9090, function () {
    console.log('Example app listening on port 9090!')
})