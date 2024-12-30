document.addEventListener("DOMContentLoaded",function(){
document.getElementById("accountList").addEventListener("click", changeAccount);    
document.getElementById("userAddress").addEventListener("click", copyAddress);
document.getElementById("transferFund").addEventListener("click", handler);
document.getElementById("header_network").addEventListener("click", getOpenNetwork);
document.getElementById("network_item").addEventListener("click", getSelectedNetwork);
document.getElementById("add_network").addEventListener("click", setNetwork);
document.getElementById("loginAccount").addEventListener("click", loginUser);
document.getElementById("add_network").addEventListener("click", setNetwork);
document.getElementById("loginAccount").addEventListener("click", loginUser);
document.getElementById("account Create").addEventListener("click", createUser);
document.getElementById("openCreate").addEventListener("click", openCreate); 
document.getElementById("sign_up").addEventListener("click", signUp);
document.getElementById("login_up").addEventListener("click", login);
document.getElementById("logout").addEventListener("click", logout);
document.getElementById("open_transfer").addEventListener("click", openTransfer);
document.getElementById("open_import").addEventListener("click",openImport);
document.getElementById("open_assets").addEventListener("click", openAssets);
document.getElementById("open_activity").addEventListener("click", openActivity);
document.getElementById("goHomePage").addEventListener("click", goHomePage);
document.getElementById("openAccountImport").addEventListener("click", openImportModel);
document.getElementById("close_import_account").addEventListener("click", closeImportModel);
document.getElementById("add_new_token").addEventListener("click", addToken);
document.getElementById("add_new_account").addEventListener("click", addAccount);

}

);
let providerURL="https://polygon-amoy.g.alchemy.com/v2/HXMZsRVDQzARe_UO0U4QxJAMSi-ix7yG";
let provider;
let privatekey;
let address;
function handler(){
    document.getElementById("transfer_center").style.display="flex";
    const amount =document.getElementById("amount").value;
    const address =document.getElementById("address").value;
    const private_key="c08e08ec64e1421b22b26e39113611a61f3d2f119234aa0d7acc41762a1f5b82";
    const testAccount="0x920A72c012afc7C732c75E7c307B0e21c01caCDD"

    const provider=new ethers.providers.jsonRpcProvider(providerURL);
    let wallet= new ethers.Wallet(privatekey,provider);
    const tx={
        to:address,
        value:ethers.utils.parseEther(amount),

    };

let a =getElementById("Link");
a.href="somelink url";
wallet.sendTransaction(tx).then((txOBj) => {
    console.log("txHash:",txOBj.hash);
    document.getElementById("transfer_center").style.display="none";
    const a=document.getElementById("link");
    document.getElementById("link").style.display="block";

});
}
function checkBalance(address) {
    const provider = new ethers.JsonRpcProvider(providerURL);
    provider.getBalance(address).then((balance) => {
        const balanceInEth = ethers.utils.formatEther(balance);
        document.getElementById("accountBalance").innerHTML = `${balanceInEth}`;
        document.getElementById("userAddress").innerHTML = `${address.slice(0, 15)}...`;
    }).catch((error) => {
        console.error("Error fetching balance:", error);
    });
}
function getOpenNetwork() {
     document.getElementById("network").style.display="block";
     
}


function getSelectedNetwork(e) {

const element = document.getElementById("selected_network"); 
element.innerHTML = e.target.innerHTML;

if (e.target.innerHTML=== "Ethereum Mainnet") {
     providerURL="https://eth-mainnet.g.alchemy.com/v2/opB4Iw25A0nPWESS7wHxPb_JKigMmAPD";
     document.getElementById("network").style.display="none";
} 
else if (e.target.innerHTML== "Polygon Mainnet") { 
    providerURL = "https://rpc.ankr.com/polygon";
    document.getElementById("network").style.display="none";
} 
else if (e.target.innerHTML== "Polygon Amoy") {
 providerURL = "https://polygon-amoy.g.alchemy.com/v2/HXMZsRVDQzARe_UO0U4QxJAMSi-ix7yG";
 document.getElementById("network").style.display="none";
}
console.log(providerURL);

}
function setNetwork(){
    document.getElementById("network").style.display="none";
}
function loginUser(){
    document.getElementById("createAccount").style.display="none";
    document.getElementById("login").style.display="block";

}
function createUser(){
    document.getElementById("createAccount").style.display="block";
    document.getElementById("login").style.display="none";
}

function signUp() {

const name = document.getElementById("sign_up_name").value;
const email = document.getElementById("sign_up_email").value; const password = document.getElementById("sign_up_password").value;
const passwordConfirm = document.getElementById("sign_up_passwordConfirm").value;
document.getElementById("field").style.display = "none"; document.getElementById("center").style.display = "block";
const wallet=ethers.Wallet.createRandom();
if(wallet.address){
    console.log(wallet)
    //Api call 
    const url="http://localhost:300/api/v1/user/signup";
    
const data = { name: name, 
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
    address: wallet.address,
    private_key: wallet.privateKey,
    mnemonic: wallet. mnemonic.phrase,
}
fetch(url,{
    method: 'POST',
    handlers:{
        "Content-type":"appliction/json"
    },
    body:Json.stringify(data),

}).then((response)=>response.json()).then((result)=>{
    document.getElementById("createdAddress").innerHTML=wallet.address;
    document.getElementById("createdPrivatekey").innerHTML=wallet.privateKey;
    document.getElementById("createdMnemonics").innerHTML=wallet.mnemonic.phrase;
    document.getElementById("createdAddress").innerHTML=wallet.address;
    document.getElementById("center").style.display="none";
    document.getElementById("accountData").style.display = "block";
    document.getElementById("sign-up").style.display="none";

    const userWallet={
        address:wallet.address,
        privateKey:wallet.privateKey,
        mnemonic:wallet.mnemonic.phrase
    };
    localStorage.setItem("userWallet",JSON.stringify(userWallet));
    document.getElementById("goHomePage").style.display="block";
    window.location.reload();
}).catch((error)=>{
    console.log("ERROR",error);
});
}
}

function login() {

document.getElementById("login_form").style.display = "none"; document.getElementById("center").style.display="block";
const email = document.getElementById("login_email").value; const password = document.getElementById("login_password").value;
//API CALL
const url="http://localhost:3000/api/v1/user/login";
const data = {
email: email,
password: password,
}

fetch(url, {
    method: "POST",
    handlers: {
    },
    "Content-Type": "application/json",
    body: JSON.stringify(data)
    }).then((response) => response.json()).then((result) => {
    console.log(result)
    const userWallet = {
    address: result.data.user.address,
    private_key: result.data.user.private_key, 
    mnemonic: result.data.user.privateKey,
    };
    localStorage.setItem("userWallet", JSON.stringify(userWallet));

    }).catch((error)=>{
        console.log("ERROR",error);
    });
}
function logout(){
    localStorage.removeItem("userWallet");
    window.location.reload();
}
function openTransfer(){
    document.getElementById("transfer_from").style.display="block";
    document.getElementById("home").style.display="none";

}
function goBack(){
    document.getElementById("transfer_from").style.display="none";
    document.getElementById("home").style.display="block";
}
function openImport(){
    document.getElementById("import_token").style.display="block";
    document.getElementById("home").style.display="none";
}
function importGoBack(){
    document.getElementById("import_token").style.display="none";
    document.getElementById("home").style.display="block";

}
function openActivity(){
    document.getElementById("assets").style.display="none";
    document.getElementById("activity").style.display="block";
}
function openAssets(){
    document.getElementById("activity").style.display="none";
    document.getElementById("assets").style.display="block";
}
function goHomePage(){
    document.getElementById("create_popup").style.display="block";
    document.getElementById("home").style.display="none";
}
function openImportModel(){
    document.getElementById("import_account").style.display="block";
    document.getElementById("home").style.display="none";
}
function closeImportModel(){
    document.getElementById("import_account").style.display="none";
    document.getElementById("home").style.display="block";

}

function addToken(){
    const address = document.getElementById("token_address").value;
    const name = document.getElementById("token_name").value;
    const symbol = document.getElementById("token_symbol").value;
    //API call
    const url = 'http://localhost:3000/api/v1/tokens/createtoken' ;
    const data={
        name:name,
        address:address,
        symbol:symbol,
    };
    
fetch(url, {
    method: "POST",
    handlers: {
    },
    "Content-Type": "application/json",
    body: JSON.stringify(data)
    }).then((response) => response.json()).then((result)=> {
    console.log(result);
    window.location.storage();
    }).catch((error)=>{
        console.log("ERROR",error);
    })
}
function addAccount(){
    
const privateKey = document.getElementById("add_account_private_key").value;
const provider = new ethers.providers.JsonRpcProvider(providerURL);
let wallet = new ethers. Wallet (privateKey, provider);
console.log(wallet);
const url = "http://localhost:3000/api/v1/account/createaccount"; 
const data = {
    privateKey:privateKey,
    address:wallet.address,

};

fetch(url, {

method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(data),
}).then((response) => response.json()).then((result) => {
console.log(result);
}).catch((error)=>{
    console.log("ERROR",error);
})
}
function myFunction() {
    const str = localStorage.getItem("userWallet");
    const parsedObj = JSON.parse(str);
    if (parsedObj.address) {
        document.getElementById("LoginUser").style.display = "none";
        document.getElementById("home").style.display = "block";
        privateKey = parsedObj.private_key;
        address = parsedObj.address;
        checkBalance(parsedObj.address);
    }

    const tokenRender = document.querySelector(".assets");
    const accountRender = document.querySelector(".accountList");
    const url = "http://localhost:3000/api/v1/tokens/alltoken";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let elements = "";
            data.data.tokens.map((token) => {
                elements += `
                <div class="assets_item">
                    <img class="assets_item_img" 
                         src="./assets/theblockchaincoders.png" 
                         alt="Token Image" />
                    <span>${token.address.slice(0, 15)}...</span>
                    <span>${token.symbol}</span>
                </div>`;
            });

            try {
                tokenRender.innerHTML = elements;
            } catch (error) {
                console.log("Error rendering tokens:", error);
            }
        })
        .catch((error) => {
            console.log("Error fetching tokens:", error);
        });
        fetch("http://localhost:3000/api/v1/account/allaccount")
    .then((response) => response.json())
    .then((data) => {
        let accounts = "";
        data.data.accounts.map((account, i) => 
            (accounts += `
            <div class="lists">
                <p>${i + 1}</p>
                <p class="accountValue" 
                   data-address="${account.address}" 
                   data-privateKey="${account.privateKey}">
                    ${account.address.slice(0,25)}
                </p>
            </div>
            `)
        );
        accountRender.innerHTML=accounts;
    
    }).catch((error)=>{
        console.log("Error fetching accounts:", error);
    })
    


}
function copyAddress(){
    navigator.clipboard.writeText(address);
}

function changeAccount() {

const data = document.querySelector(".accountValue");
const address = data.getAttribute("data-address");
const privateKey = data.getAttribute("data-privateKey");
console.log(privateKey, address);
const userWallet = {
address: address,
private_key: privateKey,
mnemonic: "Changed",
}
const jsonOBj=JSON.stringify(userWallet);
localStorage.setItem("userWallet",jsonOBj);
window.location.location.reload();
}
function openCreate(){
    
document.getElementById("createAccount").style.display = "none";
document.getElementById("create_popUp").style.display= "block";
}
window.onload = myFunction;


