(function(){ 
     
    const myNode = document.createElement("div");
    const digitalClock = document.getElementById("digitalClock")
    const secondHand = document.getElementById("secondHand");
    const minHand = document.getElementById("minHand");
    const hrHand = document.getElementById("hrHand");
    digitalClock.appendChild(myNode);
    const updateTime = () => {
        console.info("tick tock");
        const myDate = new Date();
        myNode.innerHTML = myDate.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        const seconds = myDate.getSeconds();
        const rotSeconds = seconds * 6 - 90;
        secondHand.style.transform = `rotate(${rotSeconds}deg)`;
        const minutes = myDate.getMinutes();
        const rotMinutes =  minutes * 6 - 90;
        minuteHand.style.transform = `rotate(${rotMinutes}deg)`;
        let hours = myDate.getHours();
        hours = hours + minutes/60
        const rotHours = hours * 30 - 90;
        hourHand.style.transform = `rotate(${rotHours}deg)`;
      };
        
    setInterval(updateTime, 1000);
    updateTime();
})();