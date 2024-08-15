// Particles.js © 2015 Vincent Garreau
// Licensed under the MIT License (MIT)
fetch("particlesjs-config.json")
  .then((response) => response.json())
  .then((config) => {
    particlesJS("particles-js", config);
  })
  .catch((error) => {
    console.error("Error al cargar el archivo particles.json", error);
  });

//Horoscope
const message = [
  "Today, your energy will be contagious, inspiring those around you to take action.",
  "A new opportunity is on the horizon. Be ready to seize it with your usual determination.",
  "Patience will be your greatest ally today. Stay calm and grounded in the face of challenges.",
  "An unexpected change in your routine could bring a refreshing new perspective.",
  "Embrace your emotions today. They will guide you toward important insights.",
  "A loved one may need your support. Show them your nurturing side.",
  "Your natural charisma will draw people to you today. Use it to create positive connections.",
  "Take the lead in a situation that requires confidence and boldness.",
];

const signs = [
  {
    name: "Aries",
    date: "March 21 - April 19",
    symbol: "♈︎",
    image: "src/img/Aries.png",
  },
  {
    name: "Taurus",
    date: "April 20 - May 20",
    symbol: "♉︎",
    image: "src/img/Taurus.png",
  },
  {
    name: "Gemini",
    date: "May 21 - June 20",
    symbol: "♊︎",
    image: "src/img/Gemini.png",
  },
  {
    name: "Cancer",
    date: "June 21 - July 22",
    element: "Water",
    symbol: "♋︎",
    image: "src/img/Cancer.png",
  },
  {
    name: "Leo",
    date: "July 23 - August 22",
    symbol: "♌︎",
    image: "src/img/Leo.png",
  },
  {
    name: "Virgo",
    date: "August 23 - September 22",
    symbol: "♍︎",
    image: "src/img/Virgo.png",
  },
  {
    name: "Libra",
    date: "September 23 - October 22",
    symbol: "♎︎",
    image: "src/img/Libra.png",
  },
  {
    name: "Scorpio",
    date: "October 23 - November 21",
    symbol: "♏︎",
    image: "src/img/Scorpio.png",
  },
  {
    name: "Sagittarius",
    date: "November 22 - December 21",
    symbol: "♐︎ ",
    image: "src/img/Sagittarius.png",
  },
  {
    name: "Capricorn",
    date: "December 22 - January 19",
    symbol: "♑︎",
    image: "src/img/Capricorn.png",
  },
  {
    name: "Aquarius",
    date: "January 20 - February 18",
    symbol: "♒︎",
    image: "src/img/Aquarius.png",
  },
  {
    name: "Pisces",
    date: "February 19 - March 20",
    symbol: "♓︎",
    image: "src/img/Pisces.png",
  },
];

const divForm = document.getElementById("form");
const divInfo = document.getElementById("sign-info");
const imgSing = document.getElementById("sign-img");
const symbol = document.getElementById("symbol");
const nameSing = document.getElementById("name");
const date = document.getElementById("date-sign");
const messageHoroscope = document.getElementById("message");
const backBtn = document.getElementById("back-btn");

let sign = "";

function getSign() {
  sign = document.getElementById("sign").value;

  if (sign === "") {
    alert("Please select your sign.");
  } else {
    showMessage();
  }
}

function getDate() {
  const date = document.getElementById("date").value;

  if (date === "") {
    alert("Please select your birthday.");
  } else {
    const [year, month, day] = dateElement.split("-");
    determineSign(month, day);
    showMessage();
  }
}

function determineSign(month, day) {
  if ((month === "12" && day >= 22) || (month === "01" && day <= 19)) {
    sign = "Capricorn";
  } else if ((month === "01" && day >= 20) || (month === "02" && day <= 18)) {
    sign = "Aquarius";
  } else if ((month === "02" && day >= 19) || (month === "03" && day <= 20)) {
    sign = "Pisces";
  } else if ((month === "03" && day >= 21) || (month === "04" && day <= 19)) {
    sign = "Aries";
  } else if ((month === "04" && day >= 20) || (month === "05" && day <= 20)) {
    sign = "Taurus";
  } else if ((month === "05" && day >= 21) || (month === "06" && day <= 20)) {
    sign = "Gemini";
  } else if ((month === "06" && day >= 21) || (month === "07" && day <= 22)) {
    sign = "Cancer";
  } else if ((month === "07" && day >= 23) || (month === "08" && day <= 22)) {
    sign = "Leo";
  } else if ((month === "08" && day >= 23) || (month === "09" && day <= 22)) {
    sign = "Virgo";
  } else if ((month === "09" && day >= 23) || (month === "10" && day <= 22)) {
    sign = "Libra";
  } else if ((month === "10" && day >= 23) || (month === "11" && day <= 21)) {
    sign = "Scorpio";
  } else if ((month === "11" && day >= 22) || (month === "12" && day <= 21)) {
    sign = "Sagittarius";
  }

  showMessage();
}

function getSignInfo(sign, message) {
  imgSing.src = sign.image;
  symbol.textContent = sign.symbol;
  nameSing.textContent = sign.name;
  date.textContent = sign.date;
  messageHoroscope.textContent = message;

  backBtn.addEventListener("click", () => {
    divInfo.classList.add("fade-out");
    setTimeout(() => {
      divForm.style.display = "block";
      divForm.classList.remove("fade-out");
    }, 500);
  });
}

function showMessage() {
  if (sign !== "") {
    let randomIndex = Math.floor(Math.random() * message.length);
    let horoscope = message[randomIndex];

    let signInfo = signs.find((element) => element.name === sign);

    getSignInfo(signInfo, horoscope);

    divForm.classList.add("fade-out");

    setTimeout(() => {
      divForm.style.display = "none";
      divInfo.classList.add("fade-in");
      divInfo.classList.remove("fade-out");
    }, 500);
  }
}
