import { useState, useEffect } from "react";
import Eminem from "../components/Eminem";
import { Container, Row } from "react-bootstrap";
const SpotifyCard = () => {
  const [post, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem", {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    })
      .then((response) => {
        if (response.ok) {
          // fetch finita bene
          return response.json();
        } else {
          // fetch finita male
          throw new Error("Errore nel recupero prenotazioni!");
        }
      })
      .then((data) => {
        console.log("fetch completata, DATI RECUPERATI", data);

        setAlbums(data.data);
      })
      .catch((error) => {
        console.log("ERROR!", error);
      });
  }, []);

  return (
    <>
      {post.map((r) => (
        <Eminem albumData={r} key={r.id} />
      ))}
    </>
  );
};
export default SpotifyCard;
