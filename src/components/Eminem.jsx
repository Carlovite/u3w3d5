import { Col, Card } from "react-bootstrap";

const Eminem = (albumData) => {
  return (
    <Col className="col-12 col-md-4">
      <Card>
        <Card.Img
          variant="top"
          src={albumData.albumData.album.cover_xl}
          className=""
        />
        <Card.Body>
          <Card.Title>{albumData.albumData.title}</Card.Title>
          {/* {console.log(albumData.albumData)} */}
          {/* <Card.Text>{albumData.date}</Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Eminem;
