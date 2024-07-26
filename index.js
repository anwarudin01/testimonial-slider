const testimonials = [
  {
    name: "Micheal G",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I am beyond impressed with Anwarudin's website service. Their attention to detail and great UI design have truly made a difference for my online presence. I highly recommend Anwarudin for anyone looking to enhance their website!",
  },
  {
    name: "Emily Thompson",
    photoUrl:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I highly recommend Anwarudin for their exceptional website services. The price was unbeatable and the quality of their work exceeded my expectations. Working with Anwarudin was a seamless experience. Thank you for helping me establish a strong online presence.",
  },
  {
    name: "Julia Daniels",
    photoUrl:
      "https://images.unsplash.com/photo-1599483988133-3d49552d90f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Anwarudin's innovative websites exceeded all my expectations. Their attention to detail and creativity truly set them apart. I am thrilled with the end result and highly recommend their services.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
}
