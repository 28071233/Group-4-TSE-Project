function welcomeText() {
    document.getElementById("coverimg").setAttribute("src", "assets\\img\\index\\computerscience.jpg"); 
    document.getElementById("topicDefinition").innerHTML = "Computer Science is the study of computers and their funcionality. This includes the hardware and software aspects of computers and their ability to process, generate and share infomation.";
    document.getElementById("pageText").innerHTML = "Hover over the Computer Science topics on the sidebar to find out more about them!";
}

function aiText() {
    document.getElementById("coverimg").setAttribute("src", "assets\\img\\index\\ai.png"); 
    document.getElementById("topicDefinition").innerHTML = "Artificial Inteligence is defined as the ability for a machine, digital or physical, to replicate tasks typically done by humans. While in the modern day, AI is usually used to refer to Large Language Models like ChatGPT or Generative AI such as DALL-E 3, it can also used to refer to other things such as the ghosts in Pac-Man or a robotic vacuum cleaner! Another fact worth noting is that Robotic vacuum cleaners and ChatGPT are fundamentally different from a programming standpoint. Robotic vacuum cleaners work by using many conditional statements such as time passed since last clean or areas cleaned when making decisions whereas ChatGPT is formed from a highly complex neural network that mimic certain aspects of the human brain such as pattern recognition";
    document.getElementById("pageText").innerHTML = "This section of the application features a short quiz on AI, how much do you know about AI? ";
}

function algorithmsText() {
    document.getElementById("coverimg").setAttribute("src", "assets\\img\\index\\algorithms.jpg"); 
    document.getElementById("topicDefinition").innerHTML = "Algorithms are a sequence of instuctions used to solve a problem and is one of core concepts of Computer Science. Flowcharts are one of the best ways to visualise algorithms in action. It's very likely that you've unknowingly been using algorithms, for example, what do you have to do and in what order do you have to do them if you want to make a meal?";
    document.getElementById("pageText").innerHTML = "This section of the application showcases a the inner workings of a simple sorting algorithm.";
}

function architectureText() {
    document.getElementById("coverimg").setAttribute("src", "assets\\img\\index\\architecture.jpg");
    document.getElementById("topicDefinition").innerHTML = "Computer Architecture refers to the physical design of computer components and how they are connected together along with how they interact with one another.";
    document.getElementById("pageText").innerHTML = "This section of the application presents a short walkthrough for assembling your own computer.";
}

function cyberSecurityText() {
    document.getElementById("coverimg").setAttribute("src", "assets\\img\\index\\security.jpg");
    document.getElementById("topicDefinition").innerHTML = "Cyber Security is about protecting people's personal data from unauthorised access. This can take the form of protecting your physical device from viruses using firewalls and antivirus software, protecting your online accounts such as instagram from people who wish to gain access to your private infomation by avoiding clicking on sketchy links, or companies protecting their private records by training their employees to spot signs of social engineering.";
    document.getElementById("pageText").innerHTML = "This section of the application tests your ability to spot fake and real emails.";
}

function programmingText() {
    document.getElementById("coverimg").setAttribute("src", "assets\\img\\index\\programming.jpg");
    document.getElementById("topicDefinition").innerHTML = "Programming Fundamentals is about establishing the foundations of coding. There are several core concepts that must be understood in order produce a program. Some of the core concepts include gaining an understanding of variables, data types and algorithms";
    document.getElementById("pageText").innerHTML = "This section of the website challenges you to fill in the blanks of the provided code.";
}

function networkingText() {
    document.getElementById("coverimg").setAttribute("src", "assets\\img\\index\\networking.jpg");
    document.getElementById("topicDefinition").innerHTML = "Networking refers to the protocals and connections established in order for one or more devices to send and recieve data from one another. The layout of an computer network can vary greatly from the devices used, such as switches and buses, to the protocols used to transmit data like HTTP or SMTP for example.";
    document.getElementById("pageText").innerHTML = "This section of the website shows a visual step by step example on how data may be sent from one computer to another.";
}