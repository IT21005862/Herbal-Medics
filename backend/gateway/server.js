// const express = require("express");
const gateway = require("fast-gateway");

const port = 9001;
const server = gateway({
    routes: [
        {
            prefix: "/user",
            target: "http://localhost:8081/",
            hooks: {}
        },
        {
            prefix: "/product",
            target: "http://localhost:8082/",
            hooks: {}
        }
    ]
});

server.get('/', (req,res)=> {
    res.send("Gateway Called");
})

server.start(port).then(server=>{
    console.log("Gateway is running "+port);
})
