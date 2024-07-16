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

const printCertificate = (printable) =>{

    var mainContainer = document.getElementById(printable).innerHTML;
    var printWindow = window.open('', '_blank');
    
    printWindow.document.open();
    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Print Certificate</title>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Arizonia&family=Monsieur+La+Doulaise&display=swap');

            body{
                display: grid;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
                padding: 0;
            }
            
            #mainContainer{
                position: relative;
                width: 700px;
                height: 300px;
                margin: 0;
                padding: 0;
                display: grid;
                justify-content: center;
                align-items: center;
            }
            
            #main-box{
                width: 700px;
                height: 300px;
                margin: 0;
                padding: 0;
            }
            
            #outer-large{
                position: absolute;
                border: 10px solid rgb(27, 13, 49);
                width: 690px;
                height: 290px;
                margin: 0;
                padding: 0;
            }
            
            #outer-small{
                position: absolute;
                border: 5px solid #e52e71;
                width: 690px;
                height: 290px;
                margin: 5px 0px 0px 5px ;
                padding: 0;
            }
            
            #top-heading-section{
                position: absolute;
                width: 100%;
                padding: 0;
                margin-top: -150px;
                display: flex;
                justify-content: space-around;
                /* align-items: center; */
            }
            
            #icon{
                width: 90px;
                height: 90px;
                border-radius: 100%;
                background-color: rgb(238, 147, 74);
            }
            #main-heading{
                width: 290px;
                margin-top: 15px;
                text-align: center;
            }
            
            #main-heading>h1{
                font-size: 1.6rem;
            }
            
            #mid-section{
            
                position: absolute;
                width: 100%;
                display: grid;
                justify-content: space-around;
                margin-top: 20px;
            }
            
            #background-text{
                background-color: rgb(151, 55, 6);
                color: white;
                font-size: 1rem;
                padding: 5px 10px;
                border-radius: 10px;
                text-align: center;
            }
            
            .receiverName{
                display: grid;
                justify-content: center;
                border-bottom: 1px solid black;
                text-align: start;
            }
            
            .receiverName>p{
                font-size: 2.3rem;
                font-family: "Arizonia", cursive;
                margin: 10px 0 0 0;
                padding: 0;
                color: #ff8a00;
            }
            
            #bottom-section{
                position: absolute;
                /* border: 1px solid red; */
                background-color: transparent;
                width: 100%;
                display: grid;
                justify-content: center;
                margin: 190px 0 0 0;
                padding: 0;
            }
            
            #bottom-heading{
                text-align: center;
                font-size: 1.5rem;
                font-weight: 550;
            }
            #bottom-heading>p{
                padding: 0;
                margin: 0;
            }
            #bottom-text{
                text-align: center;
            }
            #bottom-text>p{
                margin: 10px 0 0 0;
                padding: 0;
                font-size: 1.2rem;
                font-weight: 550;
            }
            </style>
        </head>
        <body>
            ${mainContainer}

            <script src="./script.js"></script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}