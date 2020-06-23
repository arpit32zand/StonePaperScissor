var temp = -1;
const DECIDERARR = [
  {
    name: "stone",
    value: "./Images/stone.png",
    alt: "✊",
    beats: "scissor",
  },
  {
    name: "paper",
    value: "./Images/paper.png",
    alt: "🖐️",
    beats: "stone",
  },
  {
    name: "scissor",
    value: "./Images/scissor.png",
    alt: "✌️",
    beats: "paper",
  },
];

const selector = (decider) => {
  let comp_decider = randomSelector();
  let result = resultCalc(decider, DECIDERARR[comp_decider].name);
  if (result === "1") {
    scoreIncrementer(document.querySelector("[your-score]"));
    announcer(DECIDERARR[comp_decider].name, 0);
    announcer(decider, 1);
  } else if (result === "0") {
    scoreIncrementer(document.querySelector("[comp-score]"));
    announcer(DECIDERARR[comp_decider].name, 1);
    announcer(decider, 0);
  } else {
    announcer(DECIDERARR[comp_decider].name, 0);
    announcer(decider, 0);
  }
};

const randomSelector = () => {
  do {
    var index = Math.floor(Math.random() * 3);
  } while (temp === index);
  temp = index;
  return index;
};

const resultCalc = (deci, comdeci) => {
  DECIDERARR.map((key) => {
    if (key.name === deci) {
      if (key.beats === comdeci) {
        res = "1";
      } else {
        if (key.name === comdeci) res = "-1";
        else res = "0";
      }
    }
  });
  return res;
};

const announcer = (deci, winn) => {
  const img = document.createElement("img");
  DECIDERARR.map((key) => {
    if (key.name === deci) {
      img.src = key.value;
      img.alt = key.alt;
    }
  });
  img.classList.add("history");
  if (winn) img.classList.add("winner");
  // const div = document.createElement("div");
  // // DECIDERARR.map((key) => {
  // //   if (key.name === deci) {
  // //     div.innerText = "<img scr={key.value} />";
  // //     console.log(key.value);
  // //   }
  // // });
  // // div.classList.add("history");
  // // if (winn) div.classList.add("winner");
  // div.innerHTML = img;
  document.querySelector("#comp").after(img);
  //   finalColumn.after(div);
};

const scoreIncrementer = (scoreSpan) => {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
};
