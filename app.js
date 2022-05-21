const { create } = require("ipfs-http-client");
const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');    

async function ipfsClient() {
    const ipfs = await create(
        {
            host: "ipfs.infura.io",
            port: 5001,
            protocol: "https"
        }
    );
    return ipfs;
  }
  
  
  async function saveText() {
    let ipfs = await ipfsClient();
  
    let result = await ipfs.add(`welcome ${new Date()}`);
    console.log(result);
  }

//   saveText();
  
  async function saveFile(data) {
  
    let ipfs = await ipfsClient();
    let options = {
        warpWithDirectory: false,
        progress: (prog) => console.log(`Saved :${prog}`)
    }
    let result = await ipfs.add(data, options);
    console.log("result", result)
    return result
  }

//   saveFile()
  
  async function getData(hash) {
    let ipfs = await ipfsClient();
  
    let asyncitr = ipfs.cat(hash)
  
    for await (const itr of asyncitr) {
  
        let data = Buffer.from(itr).toString()
        console.log(data)
        return data
    }
  }
  
  // getData("Qmcj8mSvPWYRucFN8tujRCZHaS2aa5W5EwXZ6dM5FB4vxT")
  

// Set EJS as templating engine 
app.set('view engine', 'ejs'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {  
  res.render("index");
});
    

app.get("/report", function(req, res) {  
    res.render("report", {code: 1});
  });

  app.get("/signin", function(req, res) {  
    res.render("signin");
  });

app.post('/ipfs', function(req, res) {
    let data = req.body.Report;
    console.log("dataishere",data)
    async function getIpfs() {
        let saveFileResult = await saveFile(data);
        console.log(saveFileResult)
        let getDataResult = await getData(saveFileResult.cid)
        console.log("output", getDataResult)
        res.render("data", {file: saveFileResult, data: getDataResult});
    }
    getIpfs()
    // res.end()
});

// Server setup
app.listen(3000, function(req, res) {
  console.log("Connected on port:3000");
});