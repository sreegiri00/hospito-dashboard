import {
    IconDashboard,
  } from '@tabler/icons';
  
  
  // constant
  const icons = {
    IconDashboard,
  };
  
  // ==============================|| DASHBOARD MENU ITEMS ||============================== //
  
  const doctor = {
    id: 'doctor-dashboard',
    type: 'group',
    children: [
      {
        id: 'doctor-dashboard1',
        title: 'Dashboard',
        type: 'item',
        url: '/doctor-dashboard',
        icon: icons.IconDashboard,
        breadcrumbs: false
      },
  
    ]
  };
  
  
  
  const doctorMenu = {
    doctor,
  };
  
  export default doctorMenu;
  