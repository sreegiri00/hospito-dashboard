// // material-ui
// // import { useTheme } from '@mui/material/styles';

// /**
//  * if you want to use image instead of <svg> uncomment following.
//  *
//  * import logoDark from 'assets/images/logo-dark.svg';
//  *
//  */

// // ==============================|| LOGO SVG ||============================== //

// const Logo = () => {
//   // const theme = useTheme();

//   return (
//     /**
//      * if you want to use image instead of svg uncomment following, and comment out <svg> element.
//      *

//      *
//      */
//     // <svg width="92" height="32" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//     //  </svg>
//     <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0.367737 1.58067V2.71412H7.0605H13.7533V1.58067V0.447215H7.0605H0.367737V1.58067Z" fill="black"/>
// <path d="M15.9338 2.66014L15.9662 4.87307H8.17236H0.367737V6.00652V7.13998H9.27343H18.1791V3.79359V0.447212H17.0349H15.9014L15.9338 2.66014Z" fill="black"/>
// <path d="M20.446 4.92704V9.40688H10.4069H0.367737V10.5403V11.6738H11.5403H22.7129V6.0605V0.447209H21.5795H20.446V4.92704Z" fill="black"/>
// <path d="M24.9798 7.13997V13.8327H12.6738H0.367737V14.9662V16.0996H13.7533H27.1388V8.27342V0.447207H26.0593H24.9798V7.13997Z" fill="black"/>
// <path d="M29.4057 1.58067V2.71412H35.019H40.6323V1.58067V0.447215H35.019H29.4057V1.58067Z" fill="black"/>
// <path d="M29.4057 6.00652V7.13998H35.019H40.6431L40.6107 6.02811L40.5783 4.92705L34.9974 4.89466L29.4057 4.87307V6.00652Z" fill="black"/>
// <path d="M29.4057 10.5403V11.6738H35.019H40.6323V10.5403V9.40688H35.019H29.4057V10.5403Z" fill="black"/>
// <path d="M29.4057 14.9662V16.0996H35.019H40.6323V14.9662V13.8327H35.019H29.4057V14.9662Z" fill="black"/>
// <path d="M0.367737 19.5V20.6335L20.4784 20.6119L40.5783 20.5795L40.6107 19.4676L40.6431 18.3665H20.5H0.367737V19.5Z" fill="black"/>
// <path d="M0.367737 23.9259V25.0593H5.92705H11.4864V23.9259V22.7924H5.92705H0.367737V23.9259Z" fill="black"/>
// <path d="M13.7533 30.6186V38.4448H14.8867H16.0202V31.7521V25.0593H28.3262H40.6323V23.9259V22.7924H27.1928H13.7533V30.6186Z" fill="black"/>
// <path d="M0.367737 28.3517V29.4852H5.92705H11.4864V28.3517V27.2183H5.92705H0.367737V28.3517Z" fill="black"/>
// <path d="M18.2547 27.2938C18.2115 27.3262 18.1791 29.8522 18.1791 32.9071V38.4448H19.3126H20.446L20.4676 33.9866L20.5 29.5391L30.5715 29.5068L40.6431 29.4852L40.6107 28.3733L40.5783 27.2722L29.4489 27.2399C23.3282 27.2291 18.2871 27.2507 18.2547 27.2938Z" fill="black"/>
// <path d="M0.367737 32.8855V34.019H5.92705H11.4864V32.8855V31.7521H5.92705H0.367737V32.8855Z" fill="black"/>
// <path d="M22.7129 35.0985V38.4448H23.8464H24.9798V36.2319V34.019H32.8061H40.6323V32.8855V31.7521H31.6726H22.7129V35.0985Z" fill="black"/>
// <path d="M0.367737 37.3114V38.4448H5.92705H11.4864V37.3114V36.1779H5.92705H0.367737V37.3114Z" fill="black"/>
// <path d="M27.1388 37.3114V38.4448H33.8855H40.6431L40.6107 37.333L40.5783 36.2319L33.8639 36.1995L27.1388 36.1779V37.3114Z" fill="black"/>
// </svg>

//   );
// };

// export default Logo;

// material-ui
// import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

// material-ui
// import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

import logoDark from 'assets/images/logo.svg';

const Logo = () => {
  // const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     */
    <img src={logoDark} alt="Logo" style={{ width: '55px', height: '55px' }} />
  );
};

export default Logo;
