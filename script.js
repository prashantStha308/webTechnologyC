const companyNameToBeGiven = document.getElementById("getCompanyName");
const giveCompanyName = document.getElementsByClassName("companyName");

const receiverNameToBeGiven = document.getElementById("getReceiverName");
const giveReceiverName = document.getElementById("receive");


companyNameToBeGiven.addEventListener( "keydown", function(event){

    if( event.key === "Enter" ){
        if( document.activeElement === companyNameToBeGiven ){
            getCompanyName();
        }
    }
} );

receiverNameToBeGiven.addEventListener( "keydown", function(event){

    if( event.key === "Enter" ){
       if( document.activeElement === receiverNameToBeGiven ){
        getReceiverName();
       }
    }
} );

const getCompanyName = ()=>{
    const name = companyNameToBeGiven.value;
    if(name == null || name === ""){
        console.log("Empty");
    }else{
        for (let i = 0; i < giveCompanyName.length; i++) {
            giveCompanyName[i].textContent= name;
        }
    }
}

const getReceiverName = ()=>{
    const name = receiverNameToBeGiven.value;
    if(name == null || name === ""){
        console.log("Empty");
    }else{
        console.log("isNe");
        giveReceiverName.textContent = name;
        console.log("receiverName");
    }
}

function displayImage( inImage , outImage , inputVal ){
    const input = inImage.files[0];
    outImage.textContent = "";
    outImage.style.border = "none";

    const image = document.createElement("img");
    image.classList.add("iconImg");

    const reader = new FileReader();
    reader.onload = function(e){
        image.setAttribute("src", e.target.result);
    }
    reader.readAsDataURL(input);

    outImage.appendChild(image);

    if( inputVal === 1 ){
        image.id = "iconImg1"
    }else if( inputVal === 2 ){
        image.id = "iconImg2";
    }

}

function getIcon1(input){
    const icon1 = document.getElementById("icon1");
    const giveIcon1 = document.getElementById("giveIcon1");

    displayImage( icon1 , giveIcon1 , input );
}

function getIcon2(input){
    const icon2 = document.getElementById("icon2");
    const giveIcon2 = document.getElementById("giveIcon2");

    displayImage( icon2 , giveIcon2 , input );

}

const getIcon = ( input )=>{
    switch(input){
        case 1:
            getIcon1(input);
            break;
        
        case 2:
            getIcon2(input);
            break;
        default:
            console.log("Invalid");
    }
}

function reset1(){

    const image = document.getElementById("iconImg1");
    
    if( !image ){
        const containerDiv = document.getElementById("giveIcon1");
        containerDiv.style.border = "none";
        containerDiv.textContent = "";

    }else{
        image.remove();
    }
}

function reset2(){

    const image = document.getElementById("iconImg2");
    
    if( !image ){
        const containerDiv = document.getElementById("giveIcon2");
        containerDiv.style.border = "none";
        containerDiv.textContent = "";

    }else{
        image.remove();
    }
}

const reset = (input)=>{
    switch(input){
        case 1:
            reset1();
            break;
        
        case 2:
            reset2();
            break;
        default:
            console.log("Invalid");
    }
}


const printCertificate = () =>{
    print();
}