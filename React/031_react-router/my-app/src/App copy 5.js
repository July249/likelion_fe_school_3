import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return (
    <main>
      <h1>We are Weniv!</h1>
      <h2>위니브에 오신 것을 환영합니다.</h2>
      <ul>
        <li>
          <Link to="/product">상품 구경하기</Link>
        </li>
        <li>
          <Link to="/cart">장바구니 확인하기</Link>
        </li>
        <li>
          <Link to="/buy">상품 결제하기</Link>
        </li>
      </ul>
    </main>
  );
}

async function requests() {
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  const data = await response.json();
  return data;
}

function Cart() {
  return <h1>위니브 장바구니 정보 페이지 입니다.</h1>;
}

function Buy() {
  return <h1>위니브 상품 결제 페이지 입니다.</h1>;
}

function Product() {
  const [productListData, setProductListData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);

  if (dataLoadSwitch) {
    requests().then((productData) => {
      setProductListData(productData);
      setDataLoadSwitch(false);
    });
  }

  return (
    <>
      <h1>위니브 쇼핑몰에 오신 것을 환영합니다!</h1>
      <ul>
        {productListData.map((item, idx) => {
          return (
            <li>
              <Link to={`/product/${idx}`}>{item.productName}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function ProductDetails() {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname);
  console.log(location.pathname.slice(-1));
  console.log(location.pathname.split('/'));
  const path = location.pathname.split('/')[2];
  const imgUrl = `http://test.api.weniv.co.kr/asset/img/${path}/thumbnailImg.jpg`;
  console.log(imgUrl);
  return (
    <>
      <h1>상품 {path}번 상세 정보 페이지 입니다.</h1>
      <img src={imgUrl} alt="" />
    </>
  );
}

export default App;
