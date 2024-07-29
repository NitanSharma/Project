const header  = document.getElementById('header')
const title  = document.getElementById('title')
const excerpt  = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const namee  = document.getElementById('name')
const date  = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bd-text')
setTimeout(getData, 2500)

function getData() {
    header.innerHTML = ' <img src="https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""> ';
    title.innerHTML = ' Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt?';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    namee.innerHTML= 'Tyler Durden';
    date.innerHTML = 'July 25,2024';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}