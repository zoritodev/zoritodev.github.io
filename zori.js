// highlight navbar when scrolling through sections
const sections = document.querySelectorAll("section");
console.log(sections);
//  const observer = new IntersectionObserver(callback, options);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      const sectionId = entry.target.id;
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);
      console.log('the href connected to section id is: #', navLink);
    if(entry.isIntersecting){      
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
}, {
  // rootMargin: '-10% 0px -10% 0px',
  rootMargin: '0px',
  threshold: 0.6
});

sections.forEach(link => observer.observe(link));

// make text appear to be typed
// const text = "This text will appear as if it's being typed!";
// const typedText = document.getElementById('typed-text');
const heroText = document.querySelector('.hero-text p');
const typedText = 'Hi! My name is Zori and I am a web developer.';
console.log('hero text: ', heroText.innerText);
let index = 0;

function type() {
  if (index < typedText.length) {
    heroText.innerHTML += typedText.charAt(index);
    index++;
    setTimeout(type, 70); // Adjust timing here (in milliseconds)
  }
}

type(); // Start the typing effect