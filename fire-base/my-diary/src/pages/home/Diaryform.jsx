import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";

// uid 는 Home.js 에서 props로 전달받는 유저 아이디입니다.
export const Diaryform = ({ uid }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  // collection의 이름은 사용자 편의대로 작성하면 됨
  const { addDocument, response } = useFirestore("my-dia-lee");

  const handleData = (e) => {
    if (e.target.id === "tit") {
      setTitle(e.target.value);
    } else if (e.target.id === "txt") {
      setText(e.target.value);
    }
  };

  useEffect(() => {
    if (response.success) {
      setTitle("");
      setText("");
    }
  }, [response.success]); // response.success가 바뀔 때만 effect를 재실행합니다.

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, text);
    /* uid : 
    작성한 유저의 아이디입니다. 
    지금 당장 사용하지않지만 나중에 누가 쓴 일기인지 구분할 수 있도록 auth정보로부터 받아와 Home.js 에서 props 로 전달받도록 만들겠습니다.
    */
    addDocument({
      title,
      text,
      uid,
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>일기쓰기</legend>

          <label htmlFor="tit">일기 제목 :</label>
          <input
            id="tit"
            type="text"
            required
            value={title}
            onChange={handleData}
          />

          <label htmlFor="txt">일기 내용 :</label>
          <textarea
            name=""
            id="txt"
            required
            value={text}
            onChange={handleData}
          ></textarea>

          <button>저장하기</button>
        </fieldset>
      </form>
    </>
  );
};
