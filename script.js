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

function displayImage(fileInput, imgContainer) {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imgContainer.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
}

function getIcon1() {
    const icon1 = document.getElementById("icon1");
    const giveIcon1 = document.getElementById("giveIcon1");
    displayImage(icon1, giveIcon1);
}

function getIcon2() {
    const icon2 = document.getElementById("icon2");
    const giveIcon2 = document.getElementById("giveIcon2");
    displayImage(icon2, giveIcon2);
}

const getIcon = ( input )=>{

    switch(input){
        case 1:
            getIcon1();
            break;
        
        case 2:
            getIcon2();
            break;
        default:
            console.log("Invalid");
    }
}

const printCertificate = (printable) =>{

    print();

}