const finalColumn = document.querySelector("#comp");
const DECIDERARR = [
  {
    name: "stone",
    value: "✊",
    beats: "scissor",
  },
  {
    name: "paper",
    value: "🖐️",
    beats: "stone",
  },
  {
    name: "scissor",
    value: "✌️",
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
  let index = Math.floor(Math.random() * 3);
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
  const div = document.createElement("div");
  DECIDERARR.map((key) => {
    if (key.name === deci) {
      div.innerText = key.value;
      //   console.log(key.value);
    }
  });
  div.classList.add("history");
  if (winn) div.classList.add("winner");
  document.querySelector("#comp").after(div);
  //   finalColumn.after(div);
};

const scoreIncrementer = (scoreSpan) => {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
};
