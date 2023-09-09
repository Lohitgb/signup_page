import About from './About';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

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

];

export default pages;
