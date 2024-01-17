document.addEventListener("DOMContentLoaded", (domevent) => {
    let email = document.getElementById('email-value');
    let datepicker1 = document.getElementById('datepicker1');
    let datepicker2 = document.getElementById('datepicker2');

    document.getElementById("formular").addEventListener('submit', (event) => {
        event.preventDefault();

        let date1 = new Date(datepicker1.value).getTime();
        let date2 = new Date(datepicker2.value).getTime();
        let goodToSend = true;
        let invalidEmail = false;
        let invalidDate = false;
        
        if ( (!document.getElementById("email-value").value.includes("@")) || (!document.getElementById("email-value").value.split("@")[1].includes("bzz.ch")) ){
            email.style.color = "red";
            goodToSend = false;
            invalidEmail = true;
        } else {
            email.style.color = "black";
            goodToSend = true;
            invalidEmail = false;
        }

        
        if (date1 <= date2){
            goodToSend = true;
            invalidDate = false;
        } else {
            goodToSend = false;
            invalidDate = true;
        }

        if (goodToSend){
            alert("Dispensationsgesuch abgesendet!")
            document.getElementById("formular").reset()
        } else {
            if (invalidEmail){
                alert("Eine falsche Email wurde eingegeben. Eine bzz.ch Email muss verwendet werden.")
            }
            if (invalidDate) {
                alert("Die Datums für das Dispensationsgesuch sind falsch.")
            }
        }
    })


    email.addEventListener('change', (event) => {
        if ( (!document.getElementById("email-value").value.includes("@")) || (!document.getElementById("email-value").value.split("@")[1].includes("bzz.ch")) ){
            // alert("Eine bzz.ch email muss verwendet werden!")
            email.style.color = "red";
        } else {
            email.style.color = "black";
        }
    })

    datepicker1.addEventListener('change', (event) => {
        let date1 = new Date(datepicker1.value).getTime();
        let date2 = new Date(datepicker2.value).getTime();
        if (date1 > date2){
            datepicker1.style.color = "red";
        } else {
            datepicker1.style.color = "black";
        }
    })
    datepicker2.addEventListener('change', (event) => {
        let date1 = new Date(datepicker1.value).getTime();
        let date2 = new Date(datepicker2.value).getTime();
        if (date1 > date2){
            datepicker2.style.color = "red";
        } else {
            datepicker2.style.color = "black";
        }
    })

})
