// import Alert from './alert'
// import Footer from './footer'
// import Meta from './meta'

import Header from '../header/header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>© 2020 Starter Next</footer>
    </>
  );
};

export default Layout;
