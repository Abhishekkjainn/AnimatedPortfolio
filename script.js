function navigation() {
  var navbar = document.getElementById('headermaindiv');
  if (document.getElementById('checkcheckbox').checked == true) {
    navbar.style.left = '0';
  } else {
    navbar.style.transition = 'all 0.5s';
    navbar.style.left = '-100%';
  }
}
const dynamicText = document.querySelector('h1 span');
const words = [
  'Front End Developer',
  'UI UX Designer',
  'Freelancer',
  'API Integrator',
  'SEO Analyst',
];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add('stop-blinking');

  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    // If word is deleted then switch to the next word
    isDeleting = !isDeleting;
    dynamicText.classList.remove('stop-blinking');
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 800);
  }
};

typeEffect();

function bydefaultcheck() {
  let check = document.getElementById('toggle');
  check.checked = true;
}
bydefaultcheck();

function changenavcolor() {
  let navbar = document.getElementById('headermaindiv');
  let scrollvalue = window.scrollY;
  if (scrollvalue > 270) {
    navbar.classList.add('scrollcolor');
  }
  if (scrollvalue < 270) {
    navbar.classList.remove('scrollcolor');
  }
}
window.addEventListener('scroll', changenavcolor);

function tocontactform() {
  setTimeout(() => {
    window.location.assign('#page7');
  }, 1000);
}

function closeheader() {
  if (window.innerWidth <= 700) {
    var navbar = document.getElementById('headermaindiv');

    setTimeout(() => {
      navbar.style.left = '-100%';
    }, 700);

    let check = (document.getElementById('checkcheckbox').checked = false);
    check.checked = false;
  } else {
    return true;
  }

  // var navbar = document.getElementById('headermaindiv');

  // setTimeout(() => {
  //   navbar.style.left = '-100%';
  // }, 700);

  // let check = (document.getElementById('checkcheckbox').checked = false);
  // check.checked = false;
}

// enabling the dark mode

function darklightmode() {
  let navbarmain = document.getElementById('headermaindiv');
  let checkboxheader = document.getElementById('checkbox');
  let toggle = document.getElementById('toggle').checked;
  if (toggle == true) {
    document.getElementById('page1').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page2').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page3').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page4').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page5').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page6').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page7').style.backdropFilter = 'invert(0.98)';
    document.getElementById('page8').style.backdropFilter = 'invert(0.98)';
    document.getElementById('namepage1').style.color = 'white';
    document.getElementById('tophead').style.color = 'grey';
    document.getElementById('mouse').style.filter = 'invert(1)';
    document.getElementById('aboutuscontent').style.filter = 'invert(1)';
    document.getElementById('hlink1').style.color = 'white';
    document.getElementById('hlink2').style.color = 'white';
    document.getElementById('hlink3').style.color = 'white';
    document.getElementById('hlink4').style.color = 'white';
    document.getElementById('hlink5').style.color = 'white';
    document.getElementById('cardbutton1').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('cardbutton2').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('cardbutton3').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec1').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec2').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec3').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec4').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec5').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec6').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec7').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('mainsec8').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('desc1').style.color = 'white';
    document.getElementById('desc2').style.color = 'white';
    document.getElementById('desc3').style.color = 'white';
    document.getElementById('desc4').style.color = 'white';
    document.getElementById('desc5').style.color = 'white';
    document.getElementById('desc6').style.color = 'white';
    document.getElementById('desc7').style.color = 'white';
    document.getElementById('desc8').style.color = 'white';
    document.getElementById('projectcard1').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('projectcard2').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('projectcard3').style.backgroundColor =
      'rgb(26, 26, 26)';
    document.getElementById('projectcard4').style.backgroundColor =
      'rgb(26, 26, 26)';

    document.getElementById('input1').style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById('input2').style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById('input3').style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById('input4').style.backgroundColor = 'rgb(26, 26, 26)';

    document.getElementById('label1').style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById('label2').style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById('label3').style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementById('label4').style.backgroundColor = 'rgb(26, 26, 26)';
  }

  if (toggle == false) {
    document.getElementById('page1').style.backdropFilter = 'invert(0)';
    document.getElementById('page2').style.backdropFilter = 'invert(0)';
    document.getElementById('page3').style.backdropFilter = 'invert(0)';
    document.getElementById('page4').style.backdropFilter = 'invert(0)';
    document.getElementById('page5').style.backdropFilter = 'invert(0)';
    document.getElementById('page6').style.backdropFilter = 'invert(0)';
    document.getElementById('page7').style.backdropFilter = 'invert(0)';
    document.getElementById('page8').style.backdropFilter = 'invert(0)';
    document.getElementById('namepage1').style.color = '#6d6d6d';
    document.getElementById('tophead').style.color = 'black';
    document.getElementById('mouse').style.filter = 'invert(0)';
    document.getElementById('aboutuscontent').style.filter = 'invert(0)';
    document.getElementById('hlink1').style.color = 'black';
    document.getElementById('hlink2').style.color = 'black';
    document.getElementById('hlink3').style.color = 'black';
    document.getElementById('hlink4').style.color = 'black';
    document.getElementById('hlink5').style.color = 'black';
    document.getElementById('cardbutton1').style.backgroundColor = 'white';
    document.getElementById('cardbutton2').style.backgroundColor = 'white';
    document.getElementById('cardbutton3').style.backgroundColor = 'white';
    document.getElementById('mainsec1').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec2').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec3').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec4').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec5').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec6').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec7').style.backgroundColor = '#ECECEC';
    document.getElementById('mainsec8').style.backgroundColor = '#ECECEC';
    document.getElementById('desc1').style.color = 'black';
    document.getElementById('desc2').style.color = 'black';
    document.getElementById('desc3').style.color = 'black';
    document.getElementById('desc4').style.color = 'black';
    document.getElementById('desc5').style.color = 'black';
    document.getElementById('desc6').style.color = 'black';
    document.getElementById('desc7').style.color = 'black';
    document.getElementById('desc8').style.color = 'black';

    document.getElementById('projectcard1').style.backgroundColor = '#c6c6c6';
    document.getElementById('projectcard2').style.backgroundColor = '#c6c6c6';
    document.getElementById('projectcard3').style.backgroundColor = '#c6c6c6';
    document.getElementById('projectcard4').style.backgroundColor = '#c6c6c6';

    document.getElementById('input1').style.backgroundColor = 'white';
    document.getElementById('input2').style.backgroundColor = 'white';
    document.getElementById('input3').style.backgroundColor = 'white';
    document.getElementById('input4').style.backgroundColor = 'white';

    document.getElementById('label1').style.backgroundColor = 'white';
    document.getElementById('label2').style.backgroundColor = 'white';
    document.getElementById('label3').style.backgroundColor = 'white';
    document.getElementById('label4').style.backgroundColor = 'white';
  }
}

darklightmode();

// project page script
function fromprojecttoautomate() {
  window.location.assign('https://automatevellore.vercel.app');
}

function toprojectpage() {
  setTimeout(() => {
    window.location.assign('projects.html');
  }, 800);
}

function automateextractor() {
  let mainback = 'automateimg.png';
  localStorage.setItem('back', mainback);
  let subt = document.getElementById('subtitle1').innerText;
  localStorage.setItem('subtitle', subt);
  let maintitle = document.getElementById('cardtitle1').innerText;
  localStorage.setItem('title', maintitle);
  let maincontent =
    'Welcome to AutomateVellore, your premier online autorickshaw booking platform tailored exclusively for VIT Vellore. Experience the power to personalize your commute as you select your preferred driver from a curated list, fostering a sense of familiarity and comfort. Seamlessly connect with your chosen driver to coordinate rides effortlessly. Our intuitive interface also offers a location-based categorization system, enabling swift choices for various destinations like mountains, restaurants, and more. Elevate your travel within VIT Vellore with AutomateVellore - where convenience meets customization, all at your fingertips.';
  localStorage.setItem('maindesc', maincontent);
  let sitelink = 'https://automatevellore.vercel.app';
  localStorage.setItem('link', sitelink);
  let headtitle = 'AutomateVellore Project | Abhishek Jain';
  localStorage.setItem('headtitle', headtitle);
}

function karigariextractor() {
  let mainback = 'karigariimg.png';
  localStorage.setItem('back', mainback);
  let subt = document.getElementById('subtitle2').innerText;
  localStorage.setItem('subtitle', subt);
  let maintitle = document.getElementById('cardtitle2').innerText;
  localStorage.setItem('title', maintitle);
  let maincontent =
    'Welcome to Karigari Furnitures, your gateway to a world of timeless elegance. Discover a treasure trove of vintage and antique pieces that exude the charm of bygone eras. As an esteemed online antique furniture shop, we curate a diverse collection that transcends time, offering exquisite options for every discerning connoisseur. Our thoughtfully categorized content ensures a seamless journey, allowing you to explore and interact effortlessly. From opulent Victorian pieces to rustic farmhouse finds, Karigari Furnitures invites you to transform spaces with the allure of the past, making every room a canvas of history and artistry.';
  localStorage.setItem('maindesc', maincontent);
  let sitelink = 'https://karigarii.vercel.app';
  localStorage.setItem('link', sitelink);
  let headtitle = 'Karigari Project | Abhishek Jain';
  localStorage.setItem('headtitle', headtitle);
}

function calltaxiextractor() {
  let mainback = 'calltaxiimg.png';
  localStorage.setItem('back', mainback);
  let subt = document.getElementById('subtitle3').innerText;
  localStorage.setItem('subtitle', subt);
  let maintitle = document.getElementById('cardtitle3').innerText;
  localStorage.setItem('title', maintitle);
  let maincontent =
    'Welcome to i5 Call Taxi, your ultimate solution for Vellore-to-outstation travel. Our freelance project introduces a seamless online platform, revolutionizing taxi bookings. With i5, experience an effortless booking process, an array of vehicle choices, and transparent pricing. Enjoy route optimization and real-time tracking, ensuring a smooth journey. Driver reviews, 24/7 support, and booking history enhance your confidence. Secure payments and customizable packages cater to your needs. Whether its leisure or business, i5 Call Taxi guarantees reliable, comfortable, and secure outstation travel. Say goodbye to travel woes - embrace stress-free journeys with i5 Call Taxi today!';
  localStorage.setItem('maindesc', maincontent);
  let sitelink = 'https://i5calltaxi.vercel.app';
  localStorage.setItem('link', sitelink);
  let headtitle = 'i5 Call Taxi Project | Abhishek Jain';
  localStorage.setItem('headtitle', headtitle);
}

function spotifyextractor() {
  let mainback = 'spotifyimg.png';
  localStorage.setItem('back', mainback);
  let subt = document.getElementById('subtitle4').innerText;
  localStorage.setItem('subtitle', subt);
  let maintitle = document.getElementById('cardtitle4').innerText;
  localStorage.setItem('title', maintitle);
  let maincontent =
    'Dive into the world of music with our meticulously crafted Spotify Clone, a masterpiece born from honing advanced frontend skills. This project stands as a testament to the power of practice and dedication in the realm of web development. Immerse yourself in the exact replica of Spotifys iconic interface, meticulously reconstructed through frontend prowess. Explore the art of cloning, mastering HTML, CSS, and JavaScript intricacies while creating a seamless user experience. Unleash your creativity, learn responsive design, and elevate your skills to create stunning, functional clones. Unlock the gateway to frontend excellence with our immersive Spotify Clone, a journey from learner to master!';
  localStorage.setItem('maindesc', maincontent);
  let sitelink = 'https://spotifyclonebyabhishek.vercel.app';
  localStorage.setItem('link', sitelink);
  let headtitle = 'Spotify Clone | Abhishek Jain';
  localStorage.setItem('headtitle', headtitle);
}

// function updateproject() {
//   document.getElementById('projecthead').innerText =
//     localStorage.getItem('title');
//   document.getElementById('projecttype').innerText =
//     localStorage.getItem('subtitle');
//   document.getElementById('projectdesctext').innerText =
//     localStorage.getItem('maindesc');
//   document.getElementById('projectimageimg').style.backgroundImage = imageUrls(
//     localStorage.getItem('back')
//   );
// }

//gsap animations
let g = gsap;
let tl = gsap.timeline();
g.from(
  '#headermaindiv,#namepage1,.headerimagediv,#headerlinksdiv,#hlink1,#hlink2,#hlink3,#hlink4,#hlink5',
  {
    y: -100,
    duration: 1,
    stagger: 0.3,
  }
);

tl.from('#tophead', {
  x: -50,
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
});
tl.from('.typingdiv', {
  opacity: 0,
  x: -20,
});
tl.from('.buttonsdiv,#b1,#b2', {
  x: -50,
  opacity: 0,
  stagger: 0.3,
});
tl.from('.mouse,.scrollbar', {
  x: -50,
  opacity: 0,
  stagger: 0.5,
});

g.from('.abhiimage,.page3header,.abouttext', {
  x: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.8,
  scrollTrigger: {
    trigger: '.abhiimage,.page3header,.abouttext',
    scrub: 2,

    end: 'top 200px',
  },
});

g.from('.headerpage2,.exp3,.exp2,.exp1', {
  x: -150,
  duration: 1.5,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '.headerpage2,.exp3,.exp2,.exp1',
    scrub: 2,
  },
});

// g.from('', {
//   x: -150,
//   duration: 1.5,
//   opacity: 0,
// });

g.from('#hpg4,#r1,#r3', {
  x: -200,
  opacity: 0,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '#hpg4,#r1,#r3',
    scrub: 2,
  },
});
g.from('#r2,#r4', {
  x: 200,
  opacity: 0,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '#r2,#r4',
    scrub: 2,
  },
});

g.from('.headerpage5,#r21,#r23', {
  x: -150,
  opacity: 0,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '.headerpage5,#r21,#r23',
    scrub: 2,
  },
});

g.from('#r22,#r24', {
  x: 200,
  opacity: 0,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '#r22,#r24',
    scrub: 2,
  },
});

g.from('.headerpage6,.projectscards', {
  duration: 1,
  opacity: 0,
  x: -150,
  stagger: 1,
  scrollTrigger: {
    trigger: '.headerpage6,.projectscards',
    scrub: 2,

    end: 'top 200px',
  },
});

g.from('.headerpage7,.contactformimage', {
  x: -150,
  duration: 1.5,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: '.headerpage7,.contactformimage',
    scrub: 2,

    end: 'top 200px',
  },
});

g.from('#input1,#input2,#input3,#input4,.submitbuttonproject', {
  x: 200,
  opacity: 0,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '#input1,#input2,#input3,#input4,.submitbuttonproject',
    scrub: 2,

    end: 'top 200px',
  },
});

g.from('.headerpage8,.instagramSvg,.twitterSvg,.linkdinSvg,.whatsappSvg', {
  x: -150,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '.headerpage8,.instagramSvg,.twitterSvg,.linkdinSvg,.whatsappSvg',
    scrub: 2,

    end: 'top 450px',
  },
});
