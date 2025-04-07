import {
  IconDashboard,
} from '@tabler/icons';


// constant
const icons = {
  IconDashboard,
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const vendor = {
  id: 'vendor-dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard6',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },

  ]
};



const VendorMenu = {
  vendor,
};

export default VendorMenu;
