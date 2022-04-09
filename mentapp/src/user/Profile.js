import "./Profile.css";
import { useAuthValue } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import { Button , Card,CardContent,Typography,CardMedia} from "@mui/material";

function openTab(setIsActive, setThisFalse) {
	setIsActive(true);
	setThisFalse(false);
}

function Profile() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const { currentUser } = useAuthValue();
  // console.log(useAuthValue());
  const [isActiveProfile, setIsActiveProfile] = useState(true);
	const [isActiveBooking, setIsActiveBooking] = useState(false);

  return (
    <div style={{paddingTop:"2em", padding:"1em"}}>
   
      <Card
            style={{
              background: "#1f1f1f",
              color: "#ffffff",
              height: "10rem",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              height: "fit-content",
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
                image={user.pic}
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
                  {user.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="#ffffff"
                  style={{ textAlign: "left" }}
                >
                 {user.email}
                </Typography>
                <Button
                  style={{

                    marginRight:"auto",
                    width: "fit-content",
                    marginTop: "1em",
                    color: "#ffffff",
                    fontWeight: "bold",
                    borderColor: "#ffffff",
                  }}
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={() => {
                    signOut(auth);
                    localStorage.removeItem("userData");
                  }}
                >
                  Sign Out
                </Button>
              </CardContent>
            </CardContent>
          </Card>
      <div className="App">
			<div className="container">
	

				<div>&nbsp;</div>
<>

</>
				<div className="tab">
					<button className={isActiveProfile ? "tablinks active" : "tablinks"} onClick={() => openTab(setIsActiveProfile, setIsActiveBooking)} style={{fontWeight:"bold", color:"#000000"}} id="def_Profile">Profile</button>
					<button className={isActiveBooking ? "tablinks active" : "tablinks"} onClick={() => openTab(setIsActiveBooking, setIsActiveProfile)}style={{fontWeight:"bold",color:"#000000"}} id="def_Bookings">Bookings</button>
				</div>

				<div id="Profile" className="tabcontent" style={isActiveProfile ? { display: "block" } : { display: "none" }} >
					<div className="contentPara">
						<div className="list">
							<p className="title">Name</p>
							<p>{user.name}</p>
						</div>
						<div className="list">
							<p className="title">Email Address</p>
							<p>{user.email}</p>
						</div>
						<div className="list">
							<p className="title">Age</p>
							<p>{user.age}</p>
						</div>
						<div className="list">
							<p className="title">Contact Number</p>
							<p>{user.phone}</p>
						</div>
					</div>
				</div>

				<div id="Bookings" className="tabcontent" style={isActiveBooking ? { display: "block" } : { display: "none" }} >
					<div className="book_container">
						<dd className="main_list_container">
							<ul className="list_container">

								<li className="book_list">
									<div className="dr_name_date">
										<div className="dr_name">
											<p className="title">Dr. John Doe</p>
										</div>
										<div>&nbsp;</div>
										<div className="dr_date">
											<p>10/04/2022</p>
										</div>
									</div>
								</li>

								<div>&nbsp;</div>

								<li className="book_list">
									<div className="dr_name_date">
										<div className="dr_name">
											<p className="title">Dr. Joe Cook</p>
										</div>
										<div>&nbsp;</div>
										<div className="dr_date">
											<p>17/04/2022</p>
										</div>
									</div>
								</li>

								<div>&nbsp;</div>

								<li className="book_list">
									<div className="dr_name_date">
										<div className="dr_name">
											<p className="title">Dr. Weiler</p>
										</div>
										<div>&nbsp;</div>
										<div className="dr_date">
											<p>24/04/2022</p>
										</div>
									</div>
								</li>

								<div>&nbsp;</div>

								<li className="book_list">
									<div className="dr_name_date">
										<div className="dr_name">
											<p className="title">Dr. Joe Tama</p>
										</div>
										<div>&nbsp;</div>
										<div className="dr_date">
											<p>01/05/2022</p>
										</div>
									</div>
								</li>

							</ul>
						</dd>
					</div>
				</div>
			</div>

		
		</div>
    </div>
  );
}

export default Profile;
