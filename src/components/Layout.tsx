import { Outlet, Link } from 'react-router-dom';
import { Layout as AntLayout } from 'antd';

const { Header, Footer, Content } = AntLayout;



export const CustomLayout = () => {
  return (
    <AntLayout>
      <Header>
        <div>
          <Link to="/data"> Data </Link>
          <Link to="/suggestions"> Suggestions </Link>
          <Link to="/home"> Home </Link>
        </div>
      </Header>
      <Content>
        <div className="container">
          <Outlet /> {/* Renderiza las rutas secundarias */}
          
        </div>
      </Content>
      <Footer>Este es el Footer</Footer>
    </AntLayout>
  );
};
