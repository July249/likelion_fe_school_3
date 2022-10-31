// 최상위 부모 요소
const main = document.querySelector('.artcl_main');
// input요소
const userTask = main.querySelector('header input');
// input의 Button
const addBtn = main.querySelector('header button');
// ul요소
const listTodo = main.querySelector('.list_todo');

// 할일 추가 이벤트
addBtn.addEventListener('click', createListItem);

// 경고 메세지 생성
const message = document.createElement('strong');
message.style.display = 'none';
message.classList.add('txt_invalid');
main.appendChild(message);
userTask.addEventListener('input', () => {
  message.style.display = 'none';
});

// 다운로드 버튼 생성
const downloadBtn = document.createElement('button');
downloadBtn.classList.add('btn');
downloadBtn.textContent = '리스트 다운로드';
main.appendChild(downloadBtn);
downloadBtn.addEventListener('click', downloadFile);

// 투두를 저장할 배열
// 'tasklist'라는 키를 가진 localStroage에 저장된 값(문자열)을
// 객체로 불러온다.
// Note: JSON.stringify() 객체 => 문자열
//       JSON.parse()     문자열 => 객체
// 단축 평가를 이용함 (단, B는 항상 true === 값이 있음)
// - A && B => A가 false면 A && B를 false로 판단 => A를 반환
// - A || B => A가 false면 A || B를 true로 판단 => B를 반환
// 정리!
/* 
A        B           평가결과
true  || anything => true
false || anything => anything
true  && anything => anything
false && anything => false
*/
/* const a = undefined;
const b = 'hello world';
if (a && b) {
  arr.push(c);
} */
const tasks = JSON.parse(localStorage.getItem('tasklist')) || [];

// 초기 화면에서 저장되어있는 데이터를 가지고 목록을 생성합니다.
if (tasks.length > 0) {
  tasks.forEach((task) => {
    genItem(task.val, task.checked);
  });
  showDownload();
}

function createListItem() {
  // input에 입력된 값을 inpVal 변수에 저장한다.
  const inpVal = userTask.value;

  if (inpVal /* inpVal에 값이 있으면 */) {
    // 할일을 저장하는 객체를 생성합니다.
    const tempTask1 = {
      val: inpVal,
      checked: false, // default setting
    };

    // 할일 목록에 새로운 할일을 저장합니다.
    tasks.push(tempTask1);

    // 목록 요소를 생성합니다.
    genItem(inpVal, false);

    // 할일 데이터를 localStorage 에 저장합니다.
    saveTasks();

    // 다운로드 버튼 노출 함수
    showDownload();
    // li가 하나 이상 존재할 것이므로 다운로드 버튼의 display속성을 block으로 변경하여 웹 사이트에 표기하여 준다.
  } else {
    errorMsg('내용을 작성해주세요');
  }
}

// 목록 요소를 생성합니다.
function genItem(val, complete /*파라미터*/) {
  //li 요소 생성
  const li = document.createElement('li');
  li.textContent = val;
  listTodo.appendChild(li);

  // 인풋 입력값 초기화
  userTask.value = '';

  // 만약 수행한 일이라면 => '업데이트 아이템' 함수를 따로 정의해주는 것이 좋지 않을까?
  // if (complete) {
  //   li.classList.add('done');
  // } // 왜 들어갔을까? 다 잘 작동되는데... 코드 낭비??

  li.addEventListener('click', () => {
    li.classList.toggle('done');

    // 할일 데이터의 업데이트 함수
    buildTasks();
  });

  // 삭제버튼 만들기
  const btn = document.createElement('button');
  btn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  li.appendChild(btn);

  btn.addEventListener('click', () => {
    li.remove();

    // 할일 데이터의 업데이트 함수
    buildTasks();

    // 다운로드 버튼 노출 함수 (예외 처리용)
    showDownload();
    // 삭제 버튼을 눌러서 li가 사라짐
    // 만약에 삭제된 li가 마지막 하나 남은 것일 경우 (또는 하나만 있었던 경우에)
    // 삭제 버튼을 눌러서 남은 li가 없어지면, 다운로드 버튼을 display: none;으로 변경시키기 위해 넣었음
  });
}

// localStorage 에 할일 목록을 저장하는 함수
function saveTasks() {
  localStorage.setItem(
    'tasklist',
    JSON.stringify(tasks) /* task에 저장된 값들을 문자열로 변환 */
  );
  /* 변환된 문자열을 tasklist 키의 값으로 하여 localStroage에 저장 */
}

// 할일 정보를 업데이트 하는 함수입니다. 할일을 클릭했을 때, 혹은 할일을 제거했을 때.
function buildTasks() {
  //업데이트 하기 전에 기존에 저장된 tasks 배열의 데이터를 초기화(=== 빈배열로 만듦)합니다.
  //tasks.length = 0;
  tasks = []; // 왜 안써?
  const curList = listTodo.querySelectorAll('li');

  // 할일 정보 목록을 재생성합니다.
  // curList.filter((el) => !el.checked);
  // 이미 수행한 정보는 모두 사라지고, 아직 수행하지 못한 정보만 남아있게 됩니다.
  // filter 사용시 문제점 (요구사항에 따라서 문제가 될수도 있음)
  // - 삭제 버튼을 사용자가 누르지 않았는데, 단순히 done 클래스명이 들어갔다는 이유만으로 알아서 삭제가 되는 문제가 발생

  curList.forEach((el) => {
    const tempTask2 = {
      val: el.textContent,
      checked: false, // checked: el.checked, ??
    };

    if (el.classList.contains('done')) {
      tempTask2.checked = true;
    }

    tasks.push(tempTask2);
  });

  saveTasks();
}

// 다운로드 버튼의 노출을 판단하는 함수
function showDownload() {
  const curList = listTodo.querySelectorAll('li');

  if (curList.length > 0) {
    downloadBtn.style.display = 'block';
  } else {
    downloadBtn.style.display = 'none';
  }
}

// 경고 메세지 활성화 함수
function errorMsg(msg) {
  message.style.display = 'block';
  message.textContent = msg;
  userTask.focus();
}

function downloadFile() {
  let temp = '<나의 할일 목록>\n\n';

  const curList = listTodo.querySelectorAll('li');

  curList.forEach((el) => {
    if (el.classList.contains('done')) {
      temp += '완료 - ';
      // '완료 -'를 붙일지 말지 판단
    }
    temp += `${el.textContent}\n`;
    // li의 내용
  });
  /* 
    <나의 할일 목록>

    완료 - 미경님이랑 페어프로그래밍 하기
    선영님이랑 페어프로그래밍 하기
    완료 - 잠자기
    운동하기

  */

  /* 여기서의 element는 가상적으로 존재하는 것입니다. */
  let element = document.createElement('a');
  element.setAttribute('href', `data:text/plain; charset=utf-8,${temp}`);
  element.setAttribute('download', 'todoList.txt');

  // click() : 클릭 가능한 요소라면 클릭을 시뮬레이션 한다 (두뇌 GPU가 딸립니다...)
  element.click();

  // 메모리 상에서 a 태그를 제거한다
  element = null;
}
