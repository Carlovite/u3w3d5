import MainSection from "./MainSection";
import NavbarBottom from "./NavbarBottom";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col } from "react-bootstrap";
import SpotifyCard from "./SpotifyCard";
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar></Sidebar>
          <Col className="col-10">
            <Container className="my-3 w-50">
              <Row className="g-3">
                <SpotifyCard></SpotifyCard>
              </Row>
            </Container>
          </Col>
        </div>
      </div>
      <NavbarBottom></NavbarBottom>
    </>
  );
};
export default Home;
