import {
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  CardActionArea,
  Button,
} from "@mui/material";
import { React } from "react";
import Card from "@mui/material/Card";
import "./styles.css";
import selfimg from "../../images/johari.jpeg";
import stressimg from "../../images/stress.jpg";
import bookimg from "../../images/book.png";
function Home() {
  const user = JSON.parse(localStorage.getItem("userData"));
  console.log(user);

  return (
    <>
      <div
        className="Welcome"
        style={{
          padding: "10px",
          marginTop: "0.3em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div id="name">
          <Typography variant="h5"> Welcome, </Typography>
          <Typography variant="h4" fontWeight="bold">
            {user.name}
          </Typography>
        </div>
        <div
        onClick={event =>  window.location.href='/profile'}
          id="avatar"
          style={{
            height: "70px",
            width: "70px",
            borderRadius: "20px",
            background: "#ffffff",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
<img style={{height:"70px", width:"70px", borderRadius:"20px"}} src={user.pic} alt="new"/>
        </div>
      </div>
      <div className="quizes">
        <div className="quiz1" style={{ padding: "10px" }}>
          <Card
            style={{
              paddingTop: "0em",
              background: "#1f1f1f",
              color: "#ffffff",
              height: "10rem",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              height: "210px",
            }}
          >
            <CardContent style={{ display: "flex" }}>
              <CardMedia
                component="img"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "20px",
                  marginBottom: "auto",
                }}
                background="#0000FF"
                image={selfimg}
                alt="self"
              />
              <CardContent style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="left"
                  fontWeight="bold"
                  style={{ marginBottom: "0", marginTop: "0px" }}
                >
                  Johari Window
                </Typography>
                <Typography
                  variant="body2"
                  color="#ffffff"
                  style={{ textAlign: "left" }}
                >
                  To help you better understand your relationship with yourself
                  and others
                </Typography>
                <Button
                  style={{
                    marginLeft: "auto",
                    width: "fit-content",
                    marginTop: "1em",
                    color: "#ffffff",
                    fontWeight: "bold",
                    borderColor: "#ffffff",
                  }}
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={(event) => (window.location.href = "/quiz")}
                >
                  Take Quiz
                </Button>
              </CardContent>
            </CardContent>
          </Card>
        </div>

        <div className="quiz2" style={{ padding: "10px" }}>
          <Card
            style={{
              paddingTop: "0em",
              background: "#1f1f1f",
              color: "#ffffff",
              height: "10rem",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              height: "210px",
            }}
          >
            <CardContent style={{ display: "flex" }}>
              <CardMedia
                component="img"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "20px",
                }}
                background="#0000FF"
                image={stressimg}
                alt="self"
              />
              <CardContent style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight="bold"
                  component="div"
                  align="left"
                  style={{ marginBottom: "0", marginTop: "0px" }}
                >
                  Stress Control
                </Typography>
                <Typography
                  variant="body2"
                  color="#ffffff"
                  style={{ textAlign: "left" }}
                >
                  Is there too much stress in your life? To find out, take this
                  quiz
                </Typography>
                <Button
                  style={{
                    marginLeft: "auto",
                    width: "fit-content",
                    marginTop: "1em",
                    color: "#ffffff",
                    fontWeight: "bold",
                    borderColor: "#ffffff",
                  }}
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={(event) => (window.location.href = "/quiz2")}
                >
                  Take Quiz
                </Button>
              </CardContent>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="appointment">
        <div className="book" style={{ padding: "10px" }}>
          <Card
            style={{
              paddingTop: "0em",
              background: "#5f9ea0",
              color: "black",
              height: "10rem",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              height: "190px",
            }}
          >
            <CardContent style={{ display: "flex" }}>
              <CardContent style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight="bold"
                  component="div"
                  align="left"
                  style={{ marginBottom: "0", marginTop: "0px" }}
                >
                  Book Therapy
                </Typography>
                <Typography
                  variant="body2"
                  style={{ textAlign: "left", color: "#000000" }}
                >
                  Expert therapists offering a safe space online to help you with stress and other issues
                </Typography>
                <Button
                onClick={(event) => (window.location.href = "/booking")}
                  variant="contained"
                  style={{
                    width: "80%",
                    marginTop: "1em",
                    background: "#1f1f1f",
                  }}
                  size="small"
                  color="primary"
                >
                  Book Session
                </Button>
              </CardContent>
              <CardMedia
                component="img"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "20px",
                }}
                background="#0000FF"
                image={bookimg}
                alt="self"
              />
            </CardContent>
          </Card>
        </div>
      </div>
      
    </>
  );
}

export default Home;
