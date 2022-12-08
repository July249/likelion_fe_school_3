import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  Outlet,
} from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <p>저희 홈페이지를 방문해주셔서 감사합니다.</p>
    </div>
  );
}
function Product() {
  const { id } = useParams();

  return (
    <div>
      <p>{id}번 상품의 상세정보를 제공합니다.</p>
    </div>
  );
}
function ProductNotice() {
  const { id } = useParams();

  return (
    <div>
      <p>{id}번 상품의 알림창입니다.</p>
    </div>
  );
}
function Cart() {
  return (
    <div>
      <p>장바구니 페이지 입니다.</p>
    </div>
  );
}
function User() {
  return (
    <div>
      <p>사용자 페이지 입니다.</p>
    </div>
  );
}
function UserCoupon() {
  return (
    <div>
      <p>사용자의 쿠폰 내역입니다</p>
    </div>
  );
}
function UserQuestion() {
  return (
    <div>
      <p>사용자의 질의응답 내용이 담긴 페이지 입니다</p>
    </div>
  );
}
function UserNotice() {
  return (
    <div>
      <p>사용자 알림창입니다</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/:id/*" element={<Outlet />}>
          <Route path="notice/" element={<ProductNotice />} />
        </Route>
        {/* <Route path="/products/:id/notice" element={<ProductNotice />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/*" element={<Outlet />}>
          <Route path="coupon/" element={<UserCoupon />} />
          <Route path="question/" element={<UserQuestion />} />
          <Route path="notice/" element={<UserNotice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
