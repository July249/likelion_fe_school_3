// 공통되는 것들을 뽑아서 hook으로 커스터마이징 하였다.

import { useState } from 'react';

function useJibro(initState) {
  const [value, setValue] = useState(initState);
  function onChange(e) {
    setValue(e.target.value);
  }
  return [value, onChange];
}

export default useJibro;
