(function(){ 
     
    const myNode = document.createElement("div");
    const digitalClock = document.getElementById("digitalClock")
    digitalClock.appendChild(myNode);
    const updateTime = () => {
        const myDate =  new Date();
        console.dir(myDate)
        myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { timeStyle: "medium" });
        console.info('tick tock');
        };
        
    setInterval(updateTime, 1000);
    updateTime();
})();