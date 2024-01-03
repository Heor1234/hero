var confirm1 = confirm("please give access of device");

async function getdelay() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 2000)
    })
}
if (confirm1){
   
    const p1 = getdelay();
    p1.then(() => {
        document.querySelector(".a2").innerHTML = "hack is loaded";
    }).then(async () => {
        // Additional action after the first one
        await getdelay(); // Introducing a delay before the next action
        document.querySelector(".a2").innerHTML+ "username access not found";
        await getdelay();
        document.querySelector(".a2").innerHTML += "<br>" + "username access not found";
        await getdelay();
        document.querySelector(".a2").innerHTML += "<br>" + "username access  found";
        await getdelay();
        document.querySelector(".a2").innerHTML += "<br>" + "username not found";
        await getdelay();
        document.querySelector(".a2").innerHTML += "<br>" + "username name  found";
        await getdelay();
        document.querySelector(".a2").innerHTML += "<br>" + "password cracked";


    }).catch(error => {
        console.error("Error:", error);
    });
    setInterval(() => {
        let last=document.body.lastElementChild;
        if(last.innerHTML.endsWith("..."))
        {
            last.innerHTML=last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else
        {
            last.innerHTML=last.innerHTML+".";
        }
    },700);
}
else {
    alert("bhai dar mat")
}
