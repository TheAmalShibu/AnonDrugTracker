console.log("ipfs");

// const { create } = require("ipfs-http-client");

// async function ipfsClient() {
//     const ipfs = await create(
//         {
//             host: "ipfs.infura.io",
//             port: 5001,
//             protocol: "https"
//         }
//     );
//     return ipfs;
//   }
  
  
//   async function saveText() {
//     let ipfs = await ipfsClient();
  
//     let result = await ipfs.add(`welcome ${new Date()}`);
//     console.log(result);
//   }
// //   saveText();
  
//   async function saveFile() {
  
//     let ipfs = await ipfsClient();
//     let data = "sidharth"
//     let options = {
//         warpWithDirectory: false,
//         progress: (prog) => console.log(`Saved :${prog}`)
//     }
//     let result = await ipfs.add(data, options);
//     console.log("result", result)
//   }
// //   saveFile()
  
//   async function getData(hash) {
//     let ipfs = await ipfsClient();
  
//     let asyncitr = ipfs.cat(hash)
  
//     for await (const itr of asyncitr) {
  
//         let data = Buffer.from(itr).toString()
//         console.log(data)
//     }
//   }
  
//   // getData("Qmcj8mSvPWYRucFN8tujRCZHaS2aa5W5EwXZ6dM5FB4vxT")
  
//   module.exports = {
//     getData: getData,
//     saveFile: saveFile,
//   };