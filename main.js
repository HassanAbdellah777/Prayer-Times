let dateDay = document.querySelector(".date-sec .day span");
let dateHijri = document.querySelector(".hijri span");
let dateGeorgian = document.querySelector(".georgian span");
let countryName = document.querySelector(".country span");
let cityName = document.querySelector(".city span");
let fajr = document.querySelector(".fajr span");
let sunrise = document.querySelector(".sunrise span");
let duhr = document.querySelector(".duhr span");
let asr = document.querySelector(".asr span");
let maghrib = document.querySelector(".maghrib span");
let ishaa = document.querySelector(".ishaa span");
let selectedCity = document.getElementById("city");
let changeCityBtn = document.querySelector(".change-city");
console.log(selectedCity);
console.log(changeCityBtn);

changeCityBtn.addEventListener("click", () => {
  switch (selectedCity.selectedIndex) {
    case 0:
      setData("Cairo");
      break;
    case 1:
      setData("Alexandria");
      break;
    case 2:
      setData("Luxor");
      break;
    case 3:
      setData("Aswan");
      break;
  }
  console.log(selectedCity.selectedIndex);
  console.log(selectedCity.value);
});

function init() {
  setData("Cairo");
}

function setData(city) {
  axios
    .get(
      `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt&method=5`
    )
    .then(function (response) {
      // handle success

      console.log(response.data.data);

      //Date Georgian Numbers
      console.log(response.data.data.date.gregorian.date);
      //Full Date Month Readable
      console.log(response.data.data.date.readable);
      dateGeorgian.textContent = response.data.data.date.readable;
      //Date Day Hijri
      console.log(response.data.data.date.hijri.date);
      dateHijri.textContent =
        response.data.data.date.hijri.date +
        "  " +
        response.data.data.date.hijri.month.ar;
      //Day Hijri Arabic
      console.log(response.data.data.date.hijri.day);
      //Month Hijri Arabic
      console.log(response.data.data.date.hijri.month.ar);

      console.log(response.data.data.date.hijri.weekday.ar);

      //Week Day
      console.log(response.data.data.date.gregorian.weekday.en);
      dateDay.textContent =
        response.data.data.date.hijri.weekday.ar +
        "   " +
        response.data.data.date.gregorian.weekday.en;
      //Prayer Timings
      console.log("Fajr: ", response.data.data.timings.Fajr);
      fajr.textContent = response.data.data.timings.Fajr;
      console.log("Sunrise: ", response.data.data.timings.Sunrise);
      sunrise.textContent = response.data.data.timings.Sunrise;
      console.log("Dhuhr: ", response.data.data.timings.Dhuhr);
      duhr.textContent = response.data.data.timings.Dhuhr;
      console.log("Asr: ", response.data.data.timings.Asr);
      asr.textContent = response.data.data.timings.Asr;
      console.log("Maghrib: ", response.data.data.timings.Maghrib);
      maghrib.textContent = response.data.data.timings.Maghrib;
      console.log("Isha: ", response.data.data.timings.Isha);
      ishaa.textContent = response.data.data.timings.Isha;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

init();
