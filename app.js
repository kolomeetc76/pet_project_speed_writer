var save_list;

function getText() {
  interval();
  nextLetterDecorration();
  start();
}

function showText() {
  var text =
    ' Действительно ли нужно непрерывно саморазвиваться? Саморазвитие в современном мире считается практически обязательным занятием, особенно среди миллениалов: в США они стали основными потребителями различных обучающих курсов и полезных приложений и тратят на них до 300 долларов в месяц. В России саморазвитие тоже популярно и общественно одобряемо: о своей готовности посвящать свободное время совершенствованию навыков и получению новых знаний рассказали 89% участников опроса сервиса "Авито Работа". Почти половина россиян уже прошла хотя бы один образовательный онлайн-курс, а 13% участвовали в тренингах личностного роста или хотели бы это сделать. Известно, что саморазвитие действительно может приносить пользу. Так, одно небольшое исследование показало, что люди, настроенные на самосовершенствование, менее склонны к социальной, то есть вызванной сравнением себя с окружающими, тревожности. А польские ученые считают, что саморазвитие помогает избежать выгорания на работе.';
  var gettext = document.getElementById("text");
  var text_list = text.split("");
  save_list = text_list;

  text_list.forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    span.classList.add(`char${index + 1}`);
    gettext.appendChild(span);
  });
}

var index = 1;
var index_letter = 0;
document.addEventListener("keydown", function (event) {
  var charElement = document.querySelector(".char" + index);
  if (event.key === save_list[index_letter]) {
    index = index + 1;
    index_letter = index_letter + 1;
    console.log(event.code);

    if (charElement) {
      score_letter.push(1);
      timeWord();
      nextLetterDecorration();
      clearDecoration();
    }
  } else {
    charElement.style.color = "red";
  }
});

var next_letter_decoration_index = 1;
function nextLetterDecorration() {
  nextLetterDecor = document.querySelector(
    ".char" + next_letter_decoration_index
  );
  next_letter_decoration_index = next_letter_decoration_index + 1;
  nextLetterDecor.setAttribute(
    "style",
    "text-decoration: underline #FF3028;text-underline-offset: 10px;"
  );
}

var clear_index = 1;
function clearDecoration() {
  charElementClear = document.querySelector(".char" + clear_index);
  clear_index = clear_index + 1;
  charElementClear.setAttribute(
    "style",
    "color:white; text-decoration: none;text-underline-offset: 10px;"
  );
}

var score_letter = [];
function interval() {
  let timeId = setTimeout(timeWord, 1000);
  setTimeout(() => {
    clearInterval(timeId);
    alert(confirm("Твой результат за минуту:" + " " + score_letter.length));
  }, 600000);
}

function timeWord() {
  var time = score_letter.length;
  var time_string = String(time);

  letter_per_min = document.getElementById("letter-per-min");
  letter_per_min.innerHTML = time_string;
}

var count = 1;
started = false;
function start() {
  if (started) {
    return;
  }

  var start_time = new Date();
  var stop_time = start_time.setMinutes(start_time.getMinutes() + count);

  var countdown = setInterval(function () {
    var now = new Date().getTime();
    var remain = stop_time - now;
    var min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((remain % (1000 * 60)) / 1000);
    sec = sec < 10 ? "0" + sec : sec;
    document.getElementById("timer").innerHTML = min + ":" + sec;

    if (remain < 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "Всё!";
    }
  }, 1000);
  started = true;
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
  }
});
