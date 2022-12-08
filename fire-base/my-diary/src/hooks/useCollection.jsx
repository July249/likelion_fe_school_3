import { useState, useEffect } from "react";
import { appFireStore } from "../firebase/config";
import {
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";

export const useCollection = (transaction, myQuery) => {
  // 문서들의 데이터 관리
  const [documents, setDocuments] = useState(null);
  // 에러 상태를 관리
  const [error, setError] = useState(null);

  // collection에 변화가 생길 때마다 실행
  // 때문에 항상 최신의 collection 상태를 반환받을 수 있음
  useEffect(() => {
    // 유저에 따른 콘텐츠만 잘 불러오는 기능을 위해 추가됨
    let q;
    if (myQuery) {
      // q = query(collection(appFireStore, transaction), where(...myQuery));

      // 콘텐츠의 순서가 뒤죽박죽임을 알 수 있습니다. 만약 정렬을 시켜주고 싶다면 orderBy 함수를 사용할 수 있습니다.
      // 전개구문을 이용해 where("uid", "==", "user.uid") 을 작성하게 합니다.
      q = query(
        collection(appFireStore, transaction),
        where(...myQuery),
        orderBy("createdTime", "desc")
      );
      // 오름차순은 ASC
    }

    // onSnapshot 함수는 가장 최신의 collection 내용을 반환하는 함수
    // 함수는 데이터 수신을 중단하기 위한 unsubscribe 함수를 반환합니다. 더 이상 데이터를 수신 대기할 필요가 없을때 사용합니다.
    const unsubscribe = onSnapshot(
      // 유저에 따른 컨텐츠만 잘 불러오는 기능을 위해 추가됨
      myQuery ? q : collection(appFireStore, transaction),
      // 응답받은 컬랙션이 snapshot에 저장됩니다.
      (snapshot) => {
        let result = [];

        // docs 는 문서를 배열로 저장하고 있습니다.
        snapshot.docs.forEach((doc) => {
          // 전개구문을 이용해 문서의 데이터를 가져오는 data()함수의 반환값을 객체에 나열합니다. 그리고 나중에 사용할 수 있도록 문서 id 값을 추가합니다.
          result.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(result);
        setError(null);
      },
      (error) => {
        setError(error.message);
      }
    );
    // useEffect 훅의 return 값에 함수를 반환하면 clean-up 함수가 됩니다. 외부에서 데이터를 구독하는 경우 clean-up 함수는 useEffect훅을 사용하는 컴포넌트가 마운트 해제될때 실행되어 구독을 종료하게 됩니다.
    // 참고 : https://ko.reactjs.org/docs/hooks-effect.html#example-using-hooks-1

    return unsubscribe;
  }, [collection]);

  return { documents, error };
};
