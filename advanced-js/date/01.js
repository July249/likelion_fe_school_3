const time = new Date();// 2022-11-06T02:10:33.003Z => GMT 기준시
console.log(time);
console.log(time.getFullYear()); // 2022
console.log(time.getYear()); // 122
console.log(time.getMonth()); // 10 (0부터 시작함)
console.log(time.getDate()); // 6
console.log(time.getDay()); // 0 (일요일부터 시작함)
console.log(time.getHours()); // 11
console.log(time.getMinutes()); // 23
console.log(time.getSeconds()); // 25

// 시간을 00 ~ 12 표기방법으로 하는 방법
const hour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
console.log(hour); // 11
// 시간을 오전 오후로 나누어 표기하는 방법
const ampm = time.getHours() > 12 ? `오후 ${time.getHours()}` : `오전 ${time.getHours()}`;
console.log(ampm); // AM 11

// 00 ~ 59 로 분을 2자리로 표기하는 방법
const minutes = time.getMinutes() > 10 ? time.getMinutes() : `0${time.getMinutes()}`;
console.log(minutes); // 29

const now = `지금은 ${ampm}시 ${minutes}분 입니다.`;
console.log(now);

console.log('/////////////////////////////////');

/* UTC (협정시)로 표기하는 방법 (=> 런던 시간으로 변환하여 사용) */
console.log(time.getUTCFullYear()); // 2022
console.log(time.getUTCMonth()); // 10
console.log(time.getUTCDate()); // 6
console.log(time.getUTCDay()); // 0
console.log(time.getUTCHours()); // 2
console.log(time.getUTCMinutes()); // 39
console.log(time.getUTCSeconds()); // 25


