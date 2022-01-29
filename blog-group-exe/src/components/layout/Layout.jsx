// Laura
import "./Layout.module.css";
import NavBar from "../../UI/navbar/NavBar";
import Footer from "../../UI/footer/Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <NavBar />
      <div className="layout-children">{props.children}</div>
      <Footer />
      <div className={classes.layoutChildren}>{props.children}</div>
    </div>
  );
};

export default Layout;
