import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('버튼이 제대로 동작하고 있나요?', () => {
  render(<App />);
  // button의 역할을 하는 요소를 검색하며, 요소 안의 텍스트는 'change to blue!'여야 합니다.
  const button = screen.getByRole('button', { name: 'change to blue!' });
  // 초기 button 요소의 배경색이 red 이기를 기대합니다
  expect(button).toHaveStyle({ backgroundColor: 'red' });

  // fireEvent : 가상 DOM과 상호작용이 가능하도록 하는 객체 모듈
  fireEvent.click(button); // 클릭 이벤트가 button에서 발생하였을 때!
  // button 요소의 배경색이 blue 이기를 기대합니다
  expect(button).toHaveStyle({ backgroundColor: 'blue' });
  // button 요소의 텍스트가 'change to red!'이기를 기대합니다
  expect(button.textContent).toBe('change to red!');
});
