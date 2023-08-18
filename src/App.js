import { Route, Routes } from 'react-router-dom';
import CustomerInputTest from './page/CustomerInputTest/CustomerInputTest';
import InputTest from './page/InputTest/InputTest';
import Main from './page/Main/Main';
import Mypage from './page/Mypage/Mypage';
import MypageT from './page/Mypage/MypageT'

function App() {
  return (
    <>
      {/* <Main /> */}
      {/* <InputTest /> */}
      {/* <CustomerInputTest /> */}
      {/* <Mypage /> */}
      {/* <MypageT /> */}

      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/customerinputtest" elemnet={<CustomerInputTest /> } /> 
        <Route path="/inputtest" element={<InputTest/>} /> 
        <Route path="/mypage" element={<MypageT />} /> 
      </Routes>
    </>
  );
}

export default App;
