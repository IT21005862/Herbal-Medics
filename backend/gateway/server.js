//Gateway Provides the port to which the path needs to be routed.
// const express = require("express");
const gateway = require("fast-gateway");

const port = 9001;
const server = gateway({

    routes: [
        {
            prefix: "/user", //user
            target: "http://localhost:8081/",
            hooks: {}
        },
        {
            prefix: "/product", //seller
            target: "http://localhost:8082/",
            hooks: {}
        },
        {
            prefix: "/payment", //payment
            target: "http://localhost:8083/",
            hooks: {}
        },
        {
            prefix: "/seller", //seller
            target: "http://localhost:8084/",
            hooks: {}
        }
    ]
});

server.get('/', (req,res)=> {
    res.send("Gateway Called"); //gateway response
})

server.start(port).then(server=>{
    console.log("Gateway is running "+port); //console response
})

