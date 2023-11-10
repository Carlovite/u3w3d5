import MainSection from "./MainSection";
import NavbarBottom from "./NavbarBottom";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar></Sidebar>
          <MainSection></MainSection>
        </div>
      </div>
      ;<NavbarBottom></NavbarBottom>
    </>
  );
};
export default Home;
