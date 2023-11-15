var save_list;

function getText() {
  var text =
    "Действительно ли нужно непрерывно саморазвиваться? Саморазвитие в современном мире считается практически обязательным занятием, особенно среди миллениалов: в США они стали основными потребителями различных обучающих курсов и полезных приложений и тратят на них до 300 долларов⁣ (27 713р.) в месяц. В России саморазвитие тоже популярно и общественно одобряемо: о своей готовности посвящать свободное время совершенствованию навыков и получению новых знаний рассказали 89% участников опроса сервиса «Авито Работа». Почти половина россиян уже прошла хотя бы один образовательный онлайн-курс, а 13% участвовали в тренингах личностного роста или хотели бы это сделать. Известно, что саморазвитие действительно может приносить пользу. Так, одно небольшое исследование показало, что люди, настроенные на самосовершенствование, менее склонны к социальной, то есть вызванной сравнением себя с окружающими, тревожности. А польские ученые считают, что саморазвитие помогает избежать выгорания на работе.";
  //var gettext = document.getElementById("text");
  var text_list = text.split("");
  save_list = text_list;
  //gettext.innerHTML = text;
  console.log(text_list);
  interval();
}
var index = 0;
document.addEventListener("keydown", function (event) {
  if (event.key === save_list[0]) {
    index = index + 1;
    save_list.shift();
    console.log(event.code);
    var charElement = document.querySelector(".char" + index);
    if (charElement) {
      console.log(charElement);
      charElement.style.color = "white";
      score_letter.push(1);
      timeWord();
      console.log(score_letter.length);
    }
  }
});

var score_letter = [];
function interval() {
  let timeId = setTimeout(timeWord, 1000);
  setTimeout(() => {
    clearInterval(timeId);
    alert(confirm("Твой результат за минуту:" + " " + score_letter.length));
  }, 60000);
}

function timeWord() {
  var time = score_letter.length;
  var time_string = String(time);

  letter_per_min = document.getElementById("letter-per-min");
  letter_per_min.innerHTML = time_string;
}