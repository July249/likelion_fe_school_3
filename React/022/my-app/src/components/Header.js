/* 제목과 설명 */
const Header = () => {
  return (
    <>
      <h1 className="tit-law">
        <img src="../img/title.png" alt="1만 시간의 법칙" className="img-tit" />
      </h1>
      <img
        src=""
        alt="연습은 어제의 당신보다 당신을 더 낫게 만든다."
        className="img-txt"
      />
      <p className="txt-desc">
        <strong className="tit-desc">1만 시간의 법칙</strong>은<br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>
    </>
  );
};

export default Header;
