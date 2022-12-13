document.querySelector("#home-button").addEventListener("click", () => {
  document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
})

document.querySelector("#about-button").addEventListener("click", () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
})

document.querySelector("#testimonials-button").addEventListener("click", () => {
  document.querySelector('#testimonials').scrollIntoView({ behavior: 'smooth' });
})

document.querySelector("#contact-button").addEventListener("click", () => {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
})

const testimonials = [
  {
    name:"Ayobami Akinyele",
    title: "Software Engineer",
    content: "I love coming to Meri's Cafe for my morning coffee. The staff is always friendly and the coffee is always top-notch. Highly recommend!",
    image: "images/ayobami-akinyele.jpg"
  },
  {
    name: "Jane Smith",
    title: "Marketing Manager",
    content: "I've been a regular at Meri's Cafe for a few months now and I am consistently impressed by the level of service. The staff is always eager to help and goes above and beyond to make sure I have a great experience. I highly recommend this cafe to anyone looking for a friendly, welcoming spot to enjoy a cup of coffee.",
    image: "images/jane-smith.jpg"
  },
  {
    name: "Brooke Thompson",
    title: "Coffee Enthusiast",
    content: "As a self-proclaimed coffee connoisseur, I've tried just about every cafe in town. In my opinion, Meri's Cafe has the best coffee by far. The beans are always fresh and perfectly roasted, and the drinks are consistently delicious. I especially love their seasonal specials - they never disappoint!",
    image: "images/brooke-thompson.jpg"
  }
];

document.querySelector("#testimonial-next").addEventListener("click", (e) => {
  let currentIndex = parseInt(e.target.getAttribute("current"))
  console.log(currentIndex)
  let newIndex = currentIndex + 1
  if (newIndex >= testimonials.length) {
    newIndex = 0
  }
  document.querySelector("#testimonial-name").innerText = testimonials[newIndex]["name"]
  document.querySelector("#testimonial-title").innerText = testimonials[newIndex]["title"]
  document.querySelector("#testimonial-content").innerText = testimonials[newIndex]["content"]
  document.querySelector("#testimonial-image").src = testimonials[newIndex]["image"]
  e.target.setAttribute("current", newIndex)
})
