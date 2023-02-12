import layoutStyles from "../styles/Layout.module.css";
import Nav from "@/components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
