

import {
  IconBuildingBank,
  IconDashboard,
  IconSettings,
  IconTypography, IconPalette, IconShadow, IconWindmill,IconUser ,IconMedicalCross
 
} from '@tabler/icons';

// constant
const icons = {
  IconDashboard,
  IconSettings,
  IconBuildingBank,
  IconTypography, IconPalette, IconShadow, IconWindmill,IconUser ,IconMedicalCross
 
};



const admin = {
  id: 'admin-dashboard',
  type: 'group',
  children: [
    {
      id: 'admin-dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/admin-dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
  
  ]
};



const settings = {
  id: 'settings',
  type: 'group',
  children: [
    {
      id: 'icons',
      title: 'Settings',
      type: 'collapse',
      icon: icons.IconSettings,
      children: [
        {
          id: 'bank',
          title: 'Bank',
          type: 'item',
          url: '/Bank',
          icon: icons.IconBuildingBank,
          breadcrumbs: false
        },
    
      ]
    }
  ]
};


const editMember = {
  id: 'editMember',
  type: 'group',
  children: [
    {
      id: 'icons',
      title: 'editMember',
      type: 'collapse',
      icon: icons.IconUser,
      children: [
        {
          id: 'docter',
          title: 'docter',
          type: 'item',
          url: '/docter-list',
          icon: icons.IconBuildingBank,
          breadcrumbs: false
        },
        {
          id: 'nurse',
          title: 'nurse',
          type: 'item',
          url: '/nurse-list',
          icon: icons.IconBuildingBank,
          breadcrumbs: false
        },
        {
          id: 'parmascist',
          title: 'parmascist',
          type: 'item',
          url: '/parmascist-list',
          icon: icons.IconMedicalCross,
          breadcrumbs: false
        },
        {
          id: 'patient',
          title: 'patient',
          type: 'item',
          url: '/patient-list',
          icon: icons.IconUser,
          breadcrumbs: false
        },
    
      ]
    }
  ]
};

const adminMenu = {
  admin,
  settings,
  editMember,
};

export default adminMenu;
