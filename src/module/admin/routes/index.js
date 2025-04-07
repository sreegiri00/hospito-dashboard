
import MainLayout from 'layout/MainLayout';
import Auth from 'utils/auth';


const CustomerRoutes = {
  path: '/',
  element: (
    <>
      <Auth>
        <MainLayout />
      </Auth>
    </>
  ),

};

export default CustomerRoutes;
