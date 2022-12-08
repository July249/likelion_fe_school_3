describe('텍스트 매니저 테스트입니다.', () => {
  // 클래스를 확인하기 위하여 인스턴스 생성
  const textManager = new TextManager();

  it('텍스트 값을 전달합니다.', () => {
    const initValue = textManager.getValue();

    expect(textManager.getValue()).toBe(initValue);
  });

  it('텍스트 값을 수정합니다.', () => {
    const testValue = { data: 'Hello, Zebrass!' };
    textManager.setValue(testValue);
    expect(textManager.getValue()).toBe(testValue.data);
  });
});
