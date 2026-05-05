// Get id of data being dragged and store it into "text"
function dragstartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
    ev.preventDefault();
}

function dropHandler(ev) {

    ev.preventDefault();

    // Store ID of "text" into data variable
    const data = ev.dataTransfer.getData("text");

    if (data == "img1") {
        ev.target.appendChild(document.getElementById(data));
    }

}

step = 1;
// Contains all info relation to each step of the buiold
function updateStep(step) {

    switch(step) {
        // CPU (pre loaded)
        // RAM
        case 2:
            // Hide border from previous component location in the case the user needed help
            document.getElementById("div1").style.border = "0px solid #ff0000";

            // Make next components to be installed draggable
            document.getElementById("ram1").setAttribute("draggable", "true")
            document.getElementById("ram2").setAttribute("draggable", "true")

            // Update instructions
            document.getElementById("stepnumber").innerHTML = "Step 2";
            document.getElementById("stepinstruction").innerHTML = "Next we install the RAM, in this example we have two sticks of RAM to install. The first part of this step is accessing the RAM sockets, to do this we need to open the clips found on the side of the RAM sockets to gain access to them. Next we allign the notch on the RAM with the notch on the sockets and then push the RAM into the socket, this can take some force. you'll know if you've done it correctly if you hear a small click and the clips have closed by themselves";     
            break;
        // M.2 SSD
        case 3:
            // Hide border from previous component location in the case the user needed help
            document.getElementById("div2").style.border = "0px solid #ff0000";
            document.getElementById("div3").style.border = "0px solid #ff0000";

            // Make next components to be installed draggable
            document.getElementById("m2ssd").setAttribute("draggable", "true")

            // Update instructions
            document.getElementById("stepnumber").innerHTML = "Step 3";
            document.getElementById("stepinstruction").innerHTML = "After installing the ram we\'ll install our M.2 SSD. To do this we allign the notch in the M.2 SSD to the notch in the connector on the motherboard and slot it in. At this point the SSD will be slanted upwards. To finish installing the SSD we gently push down the SSD and add a screw at the opposite end.";
            break;
        // CPU Fan
        case 4:
            // Hide border from previous component location in the case the user needed help
            document.getElementById("div4").style.border = "0px solid #ff0000";

            // Make next components to be installed draggable
            document.getElementById("cpufan").setAttribute("draggable", "true")

            // Update instructions
            document.getElementById("stepnumber").innerHTML = "Step 4";
            document.getElementById("stepinstruction").innerHTML = "The last thing we add to the Motherboard before installing it into the case is the CPU cooler. For this PC, our CPU Fan comes bundled with the CPU. Before we place it onto the CPU we peel the plastic sheet on the bottom of the cooler to expose the pre-applied thermal paste; if the cooler doesn't have any thermal paste on we can add some to top of the CPU. Once we place the cooler on we secure it with either screws or clips (This depends heavily on the cooler and motherboard) before finally attaching the cable to the slot on the motherboard labeled \"CPU_FAN\"";

            // Load component installation location
            document.getElementById("div5").style.display = "block";
            break;
        // GPU
        case 5:
            // Hide border from previous component location in the case the user needed help
            document.getElementById("div4").style.border = "0px solid #ff0000";

            // Make next components to be installed draggable
            document.getElementById("gpu").setAttribute("draggable", "true")

            // Update instructions and display case
            document.getElementById("stepnumber").innerHTML = "Step 5";
            document.getElementById("stepinstruction").innerHTML = "Now that we've placed our IO Shield into the back of the case and secured our Motherboard using 9 screws, we can begin installing our GPU. To do this, we need to remove the top two or three metal brackets at the back of the case so we can secure the Graphics card once it's installed into the motherboard. Afterwards, the GPU is placed into the slot just below the M.2 SSD and then secured to the case using screws at the place where we removed the metal brackets";
            document.getElementById("case").style.display = "inline";

            // Change motherboard image to the mostly complete one we just made and insert it into the case
            document.getElementById("motherboard").setAttribute("src", "assets\\img\\architecture\\motherboardassembled.png");
            document.getElementById("motherboard").style.left = "21%";
            document.getElementById("motherboard").style.top = "19%";
            document.getElementById("motherboard").style.width = "19%";
            document.getElementById("motherboard").style.height = "48%";

            // Remove all previous components as they're now in the updated motherboard image
            document.getElementById("div1").style.display = "none";
            document.getElementById("div2").style.display = "none";
            document.getElementById("div3").style.display = "none";
            document.getElementById("div4").style.display = "none";
            document.getElementById("div5").style.display = "none";

            // Load component installation location
            document.getElementById("div6").style.display = "block";
            break;
        // PSU
        case 6:
            // Hide border from previous component location in the case the user needed help
            document.getElementById("div6").style.border = "0px solid #ff0000";

            // Make next components to be installed draggable
            document.getElementById("psu").setAttribute("draggable", "true")

            // Update instructions
            document.getElementById("stepnumber").innerHTML = "Step 6";
            document.getElementById("stepinstruction").innerHTML = "The final component to install is the power supply which is stored at the back of the case. This PSU is non-modular meaning that cables cannot be added or removed but we have all the essential cables already installed. The Power supply is inserted through the square hole at the back cables first and then screwed into place at each corner of the power supply";

            // Load component installation location
            document.getElementById("div7").style.display = "block";
            break;
        // Cabling
        case 7: 
            // Hide border from previous component location in the case the user needed help
            document.getElementById("div7").style.border = "0px solid #ff0000";

            // Update instructions
            document.getElementById("stepnumber").innerHTML = "Step 7";
            document.getElementById("stepinstruction").innerHTML = "The final step is connecting everything together. we need to provide power to the computer using three cables from the power supply, one for the motherboard, cpu and gpu. usually another cable would be used to give power to any SSD's or HDD we may have but in this build we used an M.2 SSD which recieved all the power it needs from the motherboard. finally the the power button and other IO devices from the front of the PC need to be connected to the motherboard. this can vary greatly based on the case and motherboard so in real life you'll have to pay extra close attention to the guide provided to you with the case and motherboard";

    }
}

// Reveals installation location of current component
function helpuser(step) {
    switch (step) {
        // CPU
        case 1:
            document.getElementById("div1").style.border = "3px solid #ff0000";
            break;
        // RAM
        case 2:
            document.getElementById("div2").style.border = "3px solid #ff0000";
            document.getElementById("div3").style.border = "3px solid #ff0000";
            break;
        // M.2 SSD
        case 3:
            document.getElementById("div4").style.border = "3px solid #ff0000";
            break;
        // CPU Fan
        case 4:
            document.getElementById("div5").style.border = "3px solid #ff0000";
            break;
        // GPU
        case 5:
            document.getElementById("div6").style.border = "3px solid #ff0000";
            break;
        // PSU
        case 6:
            document.getElementById("div7").style.border = "3px solid #ff0000";
            break;
    }
}

function dropHandlerCPU(ev) {

    ev.preventDefault();

    // Store ID of "text" into data variable
    const data = ev.dataTransfer.getData("text");

    if (data == "cpu") {
        ev.target.appendChild(document.getElementById(data));
        document.getElementById(data).setAttribute("draggable", "false");

        step += 1;
        updateStep(step);
    }

}

function dropHandlerRAM(ev) {

    ev.preventDefault();

    // Store ID of "text" into data variable
    const data = ev.dataTransfer.getData("text");

    if (data == "ram1" || data == "ram2") {
        ev.target.appendChild(document.getElementById(data));
        document.getElementById(data).setAttribute("draggable", "false"); 
        document.getElementById(data).setAttribute("src", "assets\\img\\architecture\\ramtop.png"); 

        document.getElementById(data).setAttribute("height", "200");
        document.getElementById(data).setAttribute("width", "20");
        
        const installedRAM1 = document.getElementById("ram1").getAttribute("draggable")
        const installedRAM2 = document.getElementById("ram2").getAttribute("draggable")

        if (installedRAM1 == "false" && installedRAM2 == "false") {
            step += 1;
            updateStep(step)
        }
    }


}

function dropHandlerM2SSD(ev) {

    ev.preventDefault();

    // Store ID of "text" into data variable
    const data = ev.dataTransfer.getData("text");

    if (data == "m2ssd") {
        ev.target.appendChild(document.getElementById(data));
        document.getElementById(data).setAttribute("draggable", "false"); 

        step += 1;
        updateStep(step);
    }

}

function dropHandlerCPUFan(ev) {

    ev.preventDefault();

    // Store ID of "text" into data variable
    const data = ev.dataTransfer.getData("text");

    if (data == "cpufan") {
        ev.target.appendChild(document.getElementById(data));
        document.getElementById(data).setAttribute("draggable", "false"); 

        step += 1;
        updateStep(step);
    }

}

function dropHandlerGPU(ev) {

    ev.preventDefault();

    // Store ID of "text" into data variable
    const data = ev.dataTransfer.getData("text");

    if (data == "gpu") {
        ev.target.appendChild(document.getElementById(data));
        document.getElementById(data).setAttribute("draggable", "false"); 
        document.getElementById(data).setAttribute("src", "assets\\img\\architecture\\gpuside.png"); 

        document.getElementById(data).setAttribute("height", "75");
        document.getElementById(data).setAttribute("width", "300");
        
        step += 1;
        updateStep(step);
    }
}

function dropHandlerPSU(ev) {

    ev.preventDefault();

    // Store ID of "text" into data variable
    const data = ev.dataTransfer.getData("text");

    if (data == "psu") {
        ev.target.appendChild(document.getElementById(data));
        document.getElementById(data).setAttribute("draggable", "false"); 
        document.getElementById(data).setAttribute("src", "assets\\img\\architecture\\psusidecropped.png"); 

        document.getElementById(data).setAttribute("height", "60");
        document.getElementById(data).setAttribute("width", "130");
        
        step += 1;
        updateStep(step);
    }
}
