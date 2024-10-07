//main container as where we should add the data
var aboutContainer = document.querySelector('.about-myself')
    //array containing objects with details to be shown
var aboutCards = [{
        icon: 'fa fa-4x fa-cogs',
        title: 'Skills',
        link: 'skill.html',
        desc: ''
    },
    {
        icon: 'fa fa-4x fa-code',
        title: 'Projects',
        link: 'projects.html',
        desc: ''
    },
    {
        icon: 'fas fa-4x fa-book',
        title: 'Experience',
        link: 'experience.html',
        desc: ''
    },
    {
        icon: 'fa fa-4x fa-graduation-cap',
        title: 'Education',
        link: 'education.html',
        desc: ''
    }
]

//function to display cards on the home page
function displayCards() {
    console.log('ok');
    let output = ""
    aboutCards.forEach(({ icon, title, desc, link }) => {
            output += `<div class="col">
            <a href="${link}"><div class="card">
                    <div style="width:90px;height:90px" class="card-img mx-auto mt-5 d-flex justify-content-center align-items-center rounded-circle">
                        <i class="${icon}"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="font-weight-bold">${title}</h5>
                        <p>${desc}</p>
                    </div>
                </div></a>
            </div>`
        })
        //ading contents to the container
    aboutContainer.innerHTML = output
}

document.addEventListener("DOMContentLoaded", displayCards);
