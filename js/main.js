let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email");
  const name = document.querySelector("#name");
  const message = document.querySelector("#message");
  window.location.href = `mailto:candjcarranza12@gmail.com?subject=envioDesdeFormulario&body=name%3A${name}%0Aemail%3A${email}%0Amessage%3A${message}`;
});
//-----------------<schedules animation en navbar>-----------//
let schedulesClock = document.querySelector(".schedules_clock");
let schedulesCalendar = document.querySelector(".schedules_calendar");
let schedulesMap = document.querySelector(".schedules_map");
let schedulesPhone = document.querySelector(".schedules_phone");
let hour = document.querySelector(".hour");
let days = document.querySelector(".days");
let number = document.querySelector(".number");
let address = document.querySelector(".address");
const screen = window.screen;

let counter = 0;
var showSchedules = function () {
  counter++;
  if (counter === 17) {
    clearInterval(intervals);
  }
  //showCloseHours
  if (screen.width < 950) {
    if (counter === 3) {
      appear(hour);
    } else if (counter === 5) {
      disappear(hour);
    }
    //showCloseDays
    if (counter === 7) {
      appear(days);
    } else if (counter === 9) {
      disappear(days);
    }
    //showCloseNumber
    if (counter === 11) {
      appear(number);
    } else if (counter === 13) {
      disappear(number);
    }
    //showCloseAddress
    if (counter === 15) {
      appear(address);
    } else if (counter === 17) {
      disappear(address);
    }
    showSchedulesTow();
  }
};
let intervals = setInterval(showSchedules, 1000);

//function schedulesInfo() {}
function showSchedulesTow() {
  schedulesClock.addEventListener("click", () => {
    appear(hour);
    setTimeout(() => {
      hour.style.display = "none";
    }, 2000);
  });
  schedulesCalendar.addEventListener("click", () => {
    appear(days);
    setTimeout(() => {
      days.style.display = "none";
    }, 2000);
  });
  schedulesMap.addEventListener("click", () => {
    appear(address);
    setTimeout(() => {
      address.style.display = "none";
    }, 2000);
  });
  schedulesPhone.addEventListener("click", () => {
    appear(number);
    setTimeout(() => {
      number.style.display = "none";
    }, 2000);
  });
}

function appear(varNodo) {
  varNodo.style.display = "flex";
}
function disappear(varNodo) {
  varNodo.style.display = "none";
}
