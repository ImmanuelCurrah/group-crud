// Laura
import "./Layout.module.css";
import NavBar from "../../UI/navbar/NavBar";
import Footer from "../../UI/footer/Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <NavBar />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
