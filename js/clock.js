(function(){ 
     
    const myNode = document.createElement("div");
    const digitalClock = document.getElementById("digitalClock")
    digitalClock.appendChild(myNode);
    const myDate =  new Date();
    console.dir(myDate)
    // show only hours, minutes and seconds
    myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { timeStyle: "medium" });

})();
