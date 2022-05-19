const guests = [
  {
    img: 'Guest/guest1.jpg',
    alt: 'Daniel Asante Boamah',
    name: 'Daniel Asante Boamah',
    job: 'PhD Candiddate - Queens University Canada',
    moreInfo: 'Researches on environmental policies and interested in youth mentoring',
  },
  {
    img: 'Guest/guest2.jpg',
    alt: 'Ellen Asare Bediako',
    name: 'Ellen Asare Bediako',
    job: 'Medical doctor and homemaker',
    moreInfo: 'Interested in education and in matters ofyouths and adolescents',
  },
  {
    img: 'Guest/guest3.jpg',
    alt: 'Michael Okyere Asante',
    name: 'Michael Okyere Asante',
    job: 'PhD student, Stellenvosch University - South Africa',
    moreInfo: 'Provides guidance relating to education and career. Loves to blog and write',
  },
  {
    img: 'Guest/guest4.jpg',
    alt: 'Roger Aidoo',
    name: 'Roger Aidoo',
    job: 'Research and Development Manager at BAYN EUROPE AB, Sweden',
    moreInfo: 'Interested in the Sciences especially biological science, food science engineering sciences',
  },
  {
    img: 'Guest/guest5.jpg',
    alt: 'Patience Okyere Asante',
    name: 'Patience Okyere Asante',
    job: 'PhD Candidate, Institute of Statistical, Social and Economic Research (ISSER) - University of Ghana',
    moreInfo: 'Studies and researches about gender, health, cancer and family life',
  },
  {
    img: 'Guest/guest6.jpg',
    alt: 'Dominic Agyei',
    name: 'Dominic Agyei',
    job: 'Food Scientist and Lecturer at University of Otago, New Zealand',
    moreInfo: 'Helps in career planning and counsels on relationship issues. Interested in living a Christian life',
  },
];

const featuredGuest1 = document.getElementsByClassName('guests');
const featuredGuest = featuredGuest1[0];
const featuredGuestHeader = document.createElement('h3');
const featuredGuestList = document.createElement('ul');
featuredGuestList.classList.add('guest-speakers');

guests.forEach((el, index) => {
  featuredGuestList.innerHTML += `
  <li class="guest-speakers ${index > 1 ? 'hiding' : ''}">
    <div>
        <img src="${el.img}" alt="${el.alt}">
        <div>
          <h3>${el.name}</h3>
          <p class="job">${el.job}</p>
          <p class="more-info">${el.moreInfo}</p>
        </div>
    </div>
  </li>
  `;
});

featuredGuestHeader.innerText = 'Guest Speakers';
featuredGuest.prepend(featuredGuestList);
featuredGuest.prepend(featuredGuestHeader);

let show = document.querySelectorAll('.showing');
let hide = document.querySelectorAll('.hiding');
const hideMore = document.querySelector('.less');
const showMore = document.querySelector('.more');

showMore.addEventListener('click', () => {
  hide.forEach((el) => {
    el.classList.add('showing');
    el.classList.remove('hiding');
    showMore.classList.add('hiding');
    showMore.classList.remove('showing');
    show = document.querySelectorAll('.showing');
  });
});

hideMore.addEventListener('click', () => {
  show.forEach((el) => {
    el.classList.add('hiding');
    el.classList.remove('showing');
    showMore.classList.add('showing');
    showMore.classList.remove('hiding');
    hide = document.querySelectorAll('.hiding');
  });
});

const header = document.querySelector('.mainMenu');

const menuButton = document.querySelector('.mobile.menu');

menuButton.addEventListener('click', () => {
  header.classList.toggle('menu-open');
});

const closeMenu = document.querySelector('.close');

closeMenu.addEventListener('click', () => {
  header.classList.remove('menu-open');
});

const menuLink = document.querySelectorAll('.menu ul li a');

menuLink.forEach((el) => {
  el.addEventListener('click', () => {
    header.classList.remove('menu-open');
  });
});
