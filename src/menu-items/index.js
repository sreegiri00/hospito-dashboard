import adminMenu from './dashboard';
import vendorMenu from './vendor';
import doctorMenu from './doctor'

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  admin: [adminMenu.admin, adminMenu.settings,adminMenu.editMember],
  vendor: [vendorMenu.vendor],
  doctor: [doctorMenu.doctor],
};

export default menuItems;
