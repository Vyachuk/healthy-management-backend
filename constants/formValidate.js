const nameRegexp =
  /^(?:[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32}(?:\s+[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,32})?|[a-zA-Zа-яА-ЯґҐєЄіІїЇ'-]{1,64})$/;
const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
const phoneRegexp = /^0\d{9}$/;

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
  serviceVaild,
};
