import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Badge } from "@mui/material";
import "./App.css";
import avatar from "./assets/avatar.png";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState(null);
  const [votes, setVotes] = useState({ like: 0, dislike: 0 });
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(false);

  const getData = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.value);
        setLoading(false);
        setSelected(false);
      });
  };

  const getDataWithAxios = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        setJoke(res.data.value);
        setLoading(false);
        setSelected(false);
      })
      .catch((err) => console.log(err));
  };

  const voteJokeLike = (e) => {
    setVotes({ ...votes, like: votes.like + 1 });
    setSelected(true);
  };

  const voteJokeDislike = (e) => {
    setVotes({ ...votes, dislike: votes.dislike + 1 });
    setSelected(true);
  };

  useEffect(() => {
    getDataWithAxios();
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <CssBaseline />
      <Container
        maxWidth="sm"
        pt={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            position: "relative",
            overflow: "visible",
            paddingTop: "30px",
          }}
          elevation={5}
        >
          <Box sx={{ position: "absolute", right: "6px", top: "6px" }}>
            <Badge
              badgeContent={votes.like}
              color="success"
              sx={{ marginRight: "7px" }}
            >
              <ThumbUpIcon color="action" />
            </Badge>
            <Badge badgeContent={votes.dislike} color="error">
              <ThumbDownIcon color="action" />
            </Badge>
          </Box>
          <img
            style={{ position: "absolute", top: "-25%", left: "25%" }}
            src={avatar}
            height="100px"
            alt="chuck"
          />

          <CardContent sx={{ paddingTop: "20px" }}>
            <Typography gutterBottom variant="h5" component="div">
              Ejercicio 19, 20 y 21: Chistes Chuck Norris
            </Typography>
            <Typography
              sx={{ padding: "10px 0" }}
              variant="body2"
              color="text.secondary"
            >
              {loading ? <span className="loader"></span> : joke}
            </Typography>
            <Button
              variant="outlined"
              startIcon={<AutorenewIcon />}
              onClick={getDataWithAxios}
            >
              Actualizar
            </Button>
          </CardContent>
        </Card>
        <div style={{ marginTop: "100px" }}>
          {selected ? (
            <Typography
              sx={{ padding: "10px 0", color: "white" }}
              variant="body2"
            >
              Gracias por votar
            </Typography>
          ) : (
            <>
              <IconButton
                aria-label="fingerprint"
                color="secondary"
                onClick={voteJokeLike}
              >
                <ThumbUpIcon
                  sx={{
                    color: "green",
                    marginRight: "10px",
                    fontSize: "40px",
                    cursor: "pointer",
                  }}
                />
              </IconButton>
              <IconButton
                aria-label="fingerprint"
                color="secondary"
                onClick={voteJokeDislike}
              >
                <ThumbDownIcon
                  sx={{ color: "red", fontSize: "40px", cursor: "pointer" }}
                />
              </IconButton>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
