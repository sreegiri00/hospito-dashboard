import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import VendorRoutes from './VendorRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import LicenseeRoutes from './LicenseeRoutes';
import ProfileRouter from './ProfileRouter';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([AuthenticationRoutes, MainRoutes, VendorRoutes, LicenseeRoutes, ProfileRouter]);
}
