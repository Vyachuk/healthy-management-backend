const nameRegexp = /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64}$/;
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegexp = /^0\d{9}$/;

const commentRegexp = /^.{0,500}$/;

const serviceVaild = [
  "Менторство та консультації",
  "Діагностика",
  "Стратегії",
  "Навчання",
  "Інше",
];

module.exports = {
  nameRegexp,
  emailRegexp,
  phoneRegexp,
  commentRegexp,
  serviceVaild,
};
