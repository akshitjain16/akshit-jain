/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
    {
        title: "WebVista",
        cardImage: "assets/images/project-page/WebVista.png", // Add correct image path here
        description: "A B2B Platform for Agency Management & Website Builder built using Next.js 14, Tailwind, Stripe, TypeScript, and Clerk for managing agencies and building websites.",
        tag: "B2B",
        Previewlink: "", // Add preview link if available
        Githublink: "https://github.com/akshitjain16/WebVista",
    },
    {
        title: "Chat-to-PDF App",
        cardImage: "assets/images/project-page/chatPDF.png", // Add correct image path here
        description: "An AI-powered application built with Next.js, Clerk, Stripe, Firebase, Tailwind, TypeScript, and Langchain that converts PDFs into chat conversations.",
        tag: "AI",
        Previewlink: "https://chat-with-pdf-lake-seven.vercel.app/", // Add preview link if available
        Githublink: "https://github.com/akshitjain16/chat-with-pdf",
    },
    {
        title: "Guesthouse Management System",
        cardImage: "assets/images/project-page/guesthouse.png", // Add correct image path here
        description: "An automated system to manage guesthouse operations, bookings, and payments efficiently.",
        tag: "Management",
        Previewlink: "", // Add preview link if available
        Githublink: "https://github.com/akshitjain16/guesthouse",
    },
    {
        title: "Object Detection Models",
        cardImage: "assets/images/project-page/objectDetection.png", // Add correct image path here
        description: "A machine learning-based model for detecting and classifying objects in real-time using OpenCV and Mask R-CNN.",
        tag: "AI/ML",
        Previewlink: "", // Add preview link if available
        Githublink: "https://github.com/akshitjain16/trained-models",
    },
    {
        title: "Attendance Management System",
        cardImage: "assets/images/project-page/attendance.png", // Add correct image path here
        description: "A web-based system to automate attendance tracking using facial recognition and reports generation.",
        tag: "Automation",
        Previewlink: "", // Add preview link if available
        Githublink: "https://github.com/akshitjain16/StudyPods-v4.0/tree/main/SP0408",
    },
    
];


const showCards = () => {
    let output = "";
    projects.forEach(
        ({ title, cardImage, tag, Previewlink, Githublink }) =>
        (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <div class="searchdiv"><button class="tagbutton">${tag}</button></div>
            <ul class="menu-content"><br>
              <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
              <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
    );
    projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


function myFunction() {
    // Declare variables
    var input, button, i, skillcard, card;
    input = document.getElementById('myInput').value;
    input = input.toUpperCase();
    skillcard = document.getElementsByClassName('skill-card')
    card = document.getElementsByClassName('card')
    button = document.getElementsByClassName('tagbutton');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < button.length; i++) {
        if (button[i].innerHTML.toUpperCase().includes(input)) {
            skillcard[i].style.display = "";
            card[i].style.display = "";
        } else {
            skillcard[i].style.display = "none";
            card[i].style.display = "none";
        }
    }
}
