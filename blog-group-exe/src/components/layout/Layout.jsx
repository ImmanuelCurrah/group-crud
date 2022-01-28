// Laura
import "./Layout.module.css";
import NavBar from "../../UI/navbar/NavBar";

const Layout = (props) => {
  return (
    <div className="layout">
      <NavBar />
      <div className="layout-children">{props.children}</div>
    </div>
  );
};

export default Layout;
