import { Route, Routes, useNavigate } from 'react-router-dom';
import Data from './Pages/Data';
import Suggestions from './Pages/Suggestions';
import { LayoutComponent } from './Components/LayoutComponent';
import { Menu } from 'antd';
import { LineChartOutlined, QuestionCircleOutlined } from '@ant-design/icons';

function App(): JSX.Element {
  return (
    <div style={{  
      margin: 0, 
      padding: 0, 
      display: 'flex', 
      flexDirection: 'column',
      flex:1,
      height: '100vh',
      }}>
      <Header />
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column' }}>
      <SideMenu />
      <Content />
      <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div style={{ 
      height: 80, 
      backgroundColor: 'black', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems:'center', 
      width: '100%', 
      fontSize: 40
      }}>

      Header
    </div>
  );
}

function Footer() {
  return( 
  <div style={{ 
    height: 60, 
    backgroundColor: 'gray', 
    color: 'white', 
    textAlign: 'center', 
    fontSize: 20,
    justifyContent:'center', 
    alignItems:'center',
    paddingTop: 30, 
    width: '100%',
    margin: 0
    }}>
      
    Footer Botencio-Corp.
  </div>
  );
}

function SideMenu(): JSX.Element {
  const navigate = useNavigate();
  return (
    <Menu style={{ width: 200 }} onClick={({ key }) => navigate(key)}>
      <Menu.Item key="data" icon={<LineChartOutlined />}>
        Data
      </Menu.Item>
      <Menu.Item key="suggestions" icon={<QuestionCircleOutlined />}>
        Suggestions
      </Menu.Item>
    </Menu>
  );
}

function Content() {
  return (
    <div style={{ 
      flex: 1, 
      padding: '16px' 
      }}>
      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route path='data' element={<Data />} />
          <Route path='suggestions' element={<Suggestions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
