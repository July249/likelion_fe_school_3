class ViewManager {
  constructor(textManager, options) {
    // 예외처리

    // textManager가 TextManager의 인스턴스인지 확인하는 작업이 필요
    if (textManager.constructor !== TextManager) {
      throw Error('textManager 객체를 전달해야합니다.');
    }

    if (!options.viewerEl || !options.btnEl || !options.inpTxt) {
      throw Error('필요한 요소 중에 비어 있는 값이 존재합니다.');
    }

    this.viewerEl = options.viewerEl;
    this.inpTxt = options.inpTxt;
    this.textManager = textManager;

    options.btnEl.addEventListener('click', () => {
      this.changeValue();
    });
  }

  changeValue() {
    this.textManager.setValue({ data: this.inpTxt.value });
    this.updateView();
  }

  updateView() {
    this.viewerEl.textContent = this.textManager.getValue();
  }
}
