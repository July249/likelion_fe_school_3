import Header from './Header';
import Form from './Form';
import Result from './Result';
import LoadingScreen from './LoadingScreen';
import Copyright from './Copyright';

const Main = () => {
  // const field = '프로그래밍';
  // const time = 5;
  // const calcDays = parseInt(10000 / 5);

  return (
    <>
      <main id="main">
        <Header />
        <Form />
        <LoadingScreen />
        <Result field="프로그래밍" calcDays={2000} />
        <Copyright />
      </main>
    </>
  );
};

export default Main;
