import DiaryList from "./DiaryList";
import { Diaryform } from "./Diaryform";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import styles from "./Home.module.css";

export default function Home() {
  const { user } = useAuthContext();
  // 현재 로그인한 userId가 일치하는지 확인하는 작업을 배열로 useCollection에 추가함
  const { documents, error } = useCollection("my-dia-lee", [
    "uid",
    "==",
    user.uid,
  ]);

  return (
    <main className={styles.cont}>
      <aside className={styles.side_menu}>
        <Diaryform uid={user.uid} />
      </aside>
      <ul className={styles.content_list}>
        {error && <strong>{error}</strong>}
        {documents && <DiaryList diaries={documents} />}
      </ul>
    </main>
  );
}
