import About from './About';
import Home from './Home';
import Login from './Login';

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

];

export default pages;
