import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
