const sections = document.querySelectorAll('.section');
const sectbtns = document.querySelectorAll('.controls');
const sectbtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectbtn.length; i++){
        sectbtn[i].addEventListener('click', function () {
            let currentBtn =  document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            sectbtn[i].className += ' active-btn'
            
        })

    }

    // switching between sections
    allSections.addEventListener('click',(ev)=>{
        const id = ev.target.dataset.id;
        if (id) {
            //removing active on other current buttons
            sectbtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            ev.target.classList.add('active');

            // hide other sections

            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            // showing section corresponding to the btn id
            const element = document.getElementById(id);
            element.classList.add('active');
            
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    const toggleIcon = document.querySelector('#light-icon')
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
        toggleIcon.classList.toggle('fa-moon');

        
    })
}

//making the text animation 
const roles = [
  "Web and IoT Developer.",
  "Python Developer.",
  "Machine Learning Developer.",
  "AI and IoT Enthusiast.",
  "Software Developer.",
  "Database and API Developer.",
  "Tech and Innovation Student."
];
const typedSpan = document.querySelector(".typed-role");
  let roleIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (typing) {
      if (charIndex < currentRole.length) {
        typedSpan.textContent += currentRole.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        typing = false;
        setTimeout(typeEffect, 1500); // Pause before deleting
      }
    } else {
      if (charIndex > 0) {
        typedSpan.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, 100);
      } else {
        typing = true;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 300); // Pause before typing next
      }
}
}

// Initialize EmailJS with your Public Key
emailjs.init("xf_o_CH_COEltuAGw");

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_cjbt56p", "template_r444usm", this)
      .then(() => {
        alert("Message submitted successfully! I'll get back to you soon.");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Something went wrong. Please try again later.");
      });
  });
});

document.addEventListener("DOMContentLoaded", typeEffect);

PageTransitions();