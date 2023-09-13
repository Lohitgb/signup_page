import About from './About';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

const pages = [
  {
    path: '',
    element: <Home />,
    title: 'home',
  },
  {
    path: 'about',
    element: <About />,
    title: 'about',
  },
  {
  path:'login',
  element:<Login/>,
  title:'login'
  },
  {
    path:'signup',
    element:<Signup/>,
    title:'signup',
  },
  {
    path:'forgot-password',
    element:<ForgotPassword/>,
    title:'forgot-password'
  },

];

export default pages;
