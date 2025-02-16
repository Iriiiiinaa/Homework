document.addEventListener("mousemove", function(event) {
    let box1 = document.querySelector(".coordinates");

    if (box1) { 
        box1.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    } else {
        console.error();
    }
    
});