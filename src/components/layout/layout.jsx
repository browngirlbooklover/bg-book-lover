// import Alert from './alert'
// import Footer from './footer'
// import Meta from './meta'

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <strong>Test</strong>
      </header>
      <main>{children}</main>
      <footer>© 2020 Starter Next</footer>
    </>
  );
};

export default Layout;
