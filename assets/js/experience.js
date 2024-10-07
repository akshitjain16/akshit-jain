//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Developer Intern",
    cardImage: "assets/images/education-page/ShreeLogo.png",
    place: "Shree Cement Ltd.",
    time: "(June 2024 - Aug 2024)",
    desp: "<li>Gained industry-level skills by automating CRM processes and utilizing low-code technologies.</li><li>Facilitated an efficient inventory management webpage that reduced manual tasks by nearly 90%.</li>",
    button: "Verify",
    link: "",
  },
  {
    title: "Marketing Team Member",
    cardImage: "assets/images/education-page/AIESEC.png",
    place: "AIESEC in India",
    time: "(Feb 2024 - Sept 2024)",
    desp: "<li>Conducted market research and led innovative on-ground campaigns to foster strategic partnerships.</li><li>Executed impactful projects promoting AIESEC's mission of developing youth leadership and facilitating cross-cultural exchanges.</li>",
    button: "Verify",
    link: "",
  },
  {
    title: "Embedded Systems and Robotics Trainee",
    cardImage: "assets/images/education-page/esrc.png",
    place: "MBM University, Jodhpur",
    time: "(June 2023 - Aug 2023)",
    desp: "<li>Worked on multiple projects involving MATLAB, Arduino Uno, and Raspberry Pi, demonstrating strong commitment and practical skills.</li><li>Honored with a certificate of excellence for outstanding performance among 200 students.</li>",
    button: "Verify",
    link: "",
  },
];

function showCards2() {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp, button, link }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
            <a href="${link}"><button class="button">${button}</button></a>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
}
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Student Counseling Mentor",
    cardImage: "assets/images/education-page/mbm.png",
    place: "MBM University, Jodhpur",
    time: "(2023)",
    desp: "<li>Guided a group of 80 freshmen during the Induction Program, enhancing their transition into university life.</li>",
    button: "Verify",
    link: "",
  },
  {
    title: "Coordinator",
    cardImage: "assets/images/education-page/mbm.png",
    place: "TechKriti'23",
    time: "(2023)",
    desp: "<li>Coordinated content and management teams for the annual TechFest, overseeing promotional materials and event logistics.</li><li>Increased community engagement and participation significantly through effective management.</li>",
    button: "Verify",
    link: "",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, place, time, desp, button, link }) =>
      (output += `        
        <ul>
        <li class="card card1">
          <img src="${cardImage}" class="featured-image"/>
          <article class="card-body">
            <header>
              <div class="title">
                <h3>${title}</h3>
              </div>
              <p class="meta">
                <span class="pre-heading">${place}</span><br>
                <span class="author">${time}</span>
              </p>
              <ol>
                ${desp}
              </ol>
              <a href="${link}"><button class="button">${button}</button></a>
            </header>
          </article>
        </li>
      </ul>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Mentorship Card

const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp }) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
