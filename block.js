var web3;
async function Connect(){
    // await window.web3.currentProvider.enable();
    // web3=new web3(window.web3.currentProvider);

    if (window.ethereum) {
        await window.ethereum.request({method: 'eth_requestAccounts'});
        window.web3 = new Web3(window.ethereum);
        return true;
      }
      return false;


} 

// async function ipfsClient() {
//   const ipfs = await create(
//       {
//           host: "ipfs.infura.io",
//           port: 5001,
//           protocol: "https"
//       }
//   );
//   return ipfs;
// }


// async function saveText() {
//   let ipfs = await ipfsClient();

//   let result = await ipfs.add(`welcome ${new Date()}`);
//   console.log(result);
// }
// saveText();

// async function saveFile() {

//   let ipfs = await ipfsClient();
//   let mydata = "sidharthp"
//   let data = mydata
//   let options = {
//       warpWithDirectory: false,
//       progress: (prog) => console.log(`Saved :${prog}`)
//   }
//   let result = await ipfs.add(data, options);
//   console.log("result", result)
// }
// saveFile()

// async function getData(hash) {
//   let ipfs = await ipfsClient();

//   let asyncitr = ipfs.cat(hash)

//   for await (const itr of asyncitr) {

//       let data = Buffer.from(itr).toString()
//       console.log(data)
//   }
// }

// getData("Qmcj8mSvPWYRucFN8tujRCZHaS2aa5W5EwXZ6dM5FB4vxT")

