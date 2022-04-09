import React, { useEffect, useState } from "react";
// Material UI
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import "./Booking.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { MobileDatePicker } from "@mui/lab";

const theme = createTheme({
	status: {
		danger: '#e53e3e',
	},
	palette: {
		primary: {
			main: '#0971f1',
			darker: '#053e85',
		},
		neutral: {
			main: '#64748B',
			contrastText: '#fff',
		},
		dark: {
			main: '#000',
			contrastText: '#fafafa'
		}
	},
});

function Booking() {

	const user = JSON.parse(localStorage.getItem("userData"));

	const [isBooked, setIsBooked] = useState(false);

	const [doc, setDoc] = useState("Doc A");
	const [value, setValue] = useState("");
	const [timeSlot, setTimeSlot] = useState('');
	const [date, setDate] = useState(new Date().toDateString());

	const handleTimeChange = (event) => {
		setTimeSlot(event.target.value);

	};

	const handleDocChange = (docInfo) => {
		setDoc(docInfo);
		console.log("doc info updated", doc);
	};

	const handleDateChange = (date) => {
		let newDate = date.toString();
		let result = newDate.substring(0, 16);
		setDate(result);
	};
	

	const doBooking = (doc, date, time,setIsBooked) => {
		let bookingDetails = {
			docId: doc,
			bookedDate: date,
			bookedTime: time,

		};
		setIsBooked(true);
		console.log("booked!", bookingDetails);
		const axios = require('axios').default;
		const qs = require('qs')
		async function sendAPI() {
		await(axios.post("https://api.twilio.com/2010-04-01/Accounts/" + "AC1cc1efc857fa3514d808c9b8a139dab9" + "/Messages.json", qs.stringify({
		Body: `Name: ${user.name}\nAge: ${user.age} \nPhone:${user.phone} \nAddress:${user.address} \nDoctor: ${bookingDetails.docId} \nAppointment Date: ${bookingDetails.bookedDate}\nAppointment Time: ${bookingDetails.bookedTime}`,
		From: "whatsapp:+14155238886",
		To: `whatsapp:+91${user.phone}`
		}), {
	  auth: {
		username: "AC1cc1efc857fa3514d808c9b8a139dab9"
		,
		password: "a126e1d46145eadc027fe10e7dfdfcc2"
	  }
	}));
	
		};
		console.log("booked!");
		console.log(doc);
		console.log(value);
		sendAPI();
	};
	return (
		<div className="App">
			<div className="doctor-selection">
				
					<Paper elevation={3} style={{display:"flex", flexDirection:"column",padding:"20px",paddingTop:"40px", alignItems:"center", height:"100vh"}}>
						<h2>Select Doctor</h2>
						<div style={{  paddingTop:"3em", paddingBottom:"3em"}}>
						<p className="form__answer">
							<input
								type="radio"
								name="match"
								id="match_1"
								value="Doc A"
								onChange={() => handleDocChange(value)}
								checked ={doc === "Doc A"? true:false}
							/>
							<label htmlFor="match_1" onClick={() => handleDocChange("Doc A")}>
								<svg
									version="1.0"
									xmlns="http://www.w3.org/2000/svg"
									width="500.000000pt"
									height="500.000000pt"
									viewBox="0 0 1136.000000 1280.000000"
									preserveAspectRatio="xMidYMid meet"
								>
									<g
										transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
										fill="#000000"
										stroke="none"
									>
										<path
											d="M5480 11873 c-251 -25 -548 -115 -756 -228 -578 -315 -957 -851
-1060 -1500 -22 -135 -24 -437 -5 -575 85 -603 435 -1140 953 -1462 192 -119
432 -214 668 -263 154 -33 475 -45 637 -26 697 85 1293 511 1597 1142 270 559
270 1204 2 1764 -303 633 -911 1065 -1611 1145 -84 9 -345 11 -425 3z"
										/>
										<path
											d="M4196 7730 c-148 -57 -166 -69 -301 -205 -227 -228 -405 -518 -520
-845 -80 -231 -144 -567 -148 -784 l-2 -109 65 -13 c406 -84 746 -531 850
-1117 24 -136 42 -374 30 -397 -5 -9 -50 -51 -99 -94 -82 -70 -90 -79 -80 -98
18 -33 6 -130 -20 -166 -71 -100 -225 -92 -287 14 -61 104 5 243 121 255 17 2
51 0 77 -4 45 -8 49 -6 122 45 87 60 83 46 66 233 -57 608 -365 1086 -765
1190 -71 18 -218 21 -295 4 -72 -15 -204 -76 -271 -126 -129 -96 -269 -275
-349 -446 -103 -220 -170 -514 -170 -741 l0 -65 74 -50 c40 -28 76 -48 79 -45
11 12 107 5 134 -10 70 -36 110 -118 93 -190 -11 -51 -38 -86 -86 -113 -138
-79 -297 62 -239 213 9 25 16 46 14 47 -11 7 -155 134 -162 142 -11 14 0 218
19 340 86 557 375 1002 744 1144 44 17 84 31 89 31 5 0 12 42 16 93 48 667
239 1182 588 1590 27 31 46 57 42 57 -17 0 -222 -122 -358 -213 -970 -647
-1609 -1689 -1787 -2912 -31 -217 -33 -205 61 -337 118 -164 249 -316 401
-464 414 -401 913 -695 1538 -905 520 -174 1059 -271 1714 -310 261 -15 980
-6 1206 15 576 55 1016 142 1465 291 657 218 1153 514 1585 945 168 167 263
279 384 449 78 111 77 104 41 334 -158 1010 -659 1906 -1441 2578 -222 190
-526 398 -754 514 -34 18 -34 18 -20 -2 8 -11 52 -65 98 -119 245 -291 428
-652 530 -1044 l27 -104 73 -17 c218 -49 387 -199 470 -417 24 -61 26 -80 26
-207 0 -127 -2 -146 -26 -207 -62 -164 -171 -289 -310 -357 -121 -59 -189 -74
-322 -69 -126 5 -204 27 -298 85 -313 189 -407 593 -209 895 74 113 175 196
304 249 59 23 59 23 53 60 -20 125 -105 360 -201 554 -186 377 -483 724 -814
953 l-54 37 -16 -24 c-9 -14 -313 -551 -677 -1195 -399 -708 -666 -1171 -675
-1171 -8 0 -257 454 -651 1190 -351 655 -643 1191 -650 1192 -7 1 -71 -20
-142 -47z m2794 -2879 c6 -12 10 -98 10 -210 l0 -191 198 0 c141 0 201 -3 210
-12 8 -8 12 -62 12 -178 0 -116 -4 -170 -12 -178 -9 -9 -69 -12 -210 -12
l-198 0 0 -187 c0 -104 -3 -198 -6 -211 -6 -22 -7 -22 -188 -20 l-181 3 -5
205 -5 205 -200 3 c-174 2 -202 4 -212 19 -16 21 -18 315 -3 344 10 18 23 19
215 19 l205 0 0 203 c0 112 3 207 7 210 3 4 84 7 179 7 161 0 174 -1 184 -19z"
										/>
										<path
											d="M8129 5967 c-165 -56 -267 -188 -277 -357 -10 -175 75 -317 237 -394
60 -28 75 -31 166 -31 92 0 106 3 167 32 241 114 311 414 145 623 -103 130
-280 181 -438 127z"
										/>
									</g>
								</svg>
								<p>Doc A</p>
							</label>
						</p>
						<p className="form__answer" style={{padding:"10px"}}>
							<input
								type="radio"
								name="match"
								id="match_2"
								value="Doc B"
								onChange={() => handleDocChange(value)}
								checked ={doc === "Doc B"? true:false}
							/>
							<label htmlFor="match_2" onClick={() => handleDocChange("Doc B")}>
								<svg
									version="1.0"
									xmlns="http://www.w3.org/2000/svg"
									width="500.000000pt"
									height="500.000000pt"
									viewBox="0 0 1136.000000 1280.000000"
									preserveAspectRatio="xMidYMid meet"
								>
									<g
										transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
										fill="#000000"
										stroke="none"
									>
										<path
											d="M5480 11873 c-251 -25 -548 -115 -756 -228 -578 -315 -957 -851
-1060 -1500 -22 -135 -24 -437 -5 -575 85 -603 435 -1140 953 -1462 192 -119
432 -214 668 -263 154 -33 475 -45 637 -26 697 85 1293 511 1597 1142 270 559
270 1204 2 1764 -303 633 -911 1065 -1611 1145 -84 9 -345 11 -425 3z"
										/>
										<path
											d="M4196 7730 c-148 -57 -166 -69 -301 -205 -227 -228 -405 -518 -520
-845 -80 -231 -144 -567 -148 -784 l-2 -109 65 -13 c406 -84 746 -531 850
-1117 24 -136 42 -374 30 -397 -5 -9 -50 -51 -99 -94 -82 -70 -90 -79 -80 -98
18 -33 6 -130 -20 -166 -71 -100 -225 -92 -287 14 -61 104 5 243 121 255 17 2
51 0 77 -4 45 -8 49 -6 122 45 87 60 83 46 66 233 -57 608 -365 1086 -765
1190 -71 18 -218 21 -295 4 -72 -15 -204 -76 -271 -126 -129 -96 -269 -275
-349 -446 -103 -220 -170 -514 -170 -741 l0 -65 74 -50 c40 -28 76 -48 79 -45
11 12 107 5 134 -10 70 -36 110 -118 93 -190 -11 -51 -38 -86 -86 -113 -138
-79 -297 62 -239 213 9 25 16 46 14 47 -11 7 -155 134 -162 142 -11 14 0 218
19 340 86 557 375 1002 744 1144 44 17 84 31 89 31 5 0 12 42 16 93 48 667
239 1182 588 1590 27 31 46 57 42 57 -17 0 -222 -122 -358 -213 -970 -647
-1609 -1689 -1787 -2912 -31 -217 -33 -205 61 -337 118 -164 249 -316 401
-464 414 -401 913 -695 1538 -905 520 -174 1059 -271 1714 -310 261 -15 980
-6 1206 15 576 55 1016 142 1465 291 657 218 1153 514 1585 945 168 167 263
279 384 449 78 111 77 104 41 334 -158 1010 -659 1906 -1441 2578 -222 190
-526 398 -754 514 -34 18 -34 18 -20 -2 8 -11 52 -65 98 -119 245 -291 428
-652 530 -1044 l27 -104 73 -17 c218 -49 387 -199 470 -417 24 -61 26 -80 26
-207 0 -127 -2 -146 -26 -207 -62 -164 -171 -289 -310 -357 -121 -59 -189 -74
-322 -69 -126 5 -204 27 -298 85 -313 189 -407 593 -209 895 74 113 175 196
304 249 59 23 59 23 53 60 -20 125 -105 360 -201 554 -186 377 -483 724 -814
953 l-54 37 -16 -24 c-9 -14 -313 -551 -677 -1195 -399 -708 -666 -1171 -675
-1171 -8 0 -257 454 -651 1190 -351 655 -643 1191 -650 1192 -7 1 -71 -20
-142 -47z m2794 -2879 c6 -12 10 -98 10 -210 l0 -191 198 0 c141 0 201 -3 210
-12 8 -8 12 -62 12 -178 0 -116 -4 -170 -12 -178 -9 -9 -69 -12 -210 -12
l-198 0 0 -187 c0 -104 -3 -198 -6 -211 -6 -22 -7 -22 -188 -20 l-181 3 -5
205 -5 205 -200 3 c-174 2 -202 4 -212 19 -16 21 -18 315 -3 344 10 18 23 19
215 19 l205 0 0 203 c0 112 3 207 7 210 3 4 84 7 179 7 161 0 174 -1 184 -19z"
										/>
										<path
											d="M8129 5967 c-165 -56 -267 -188 -277 -357 -10 -175 75 -317 237 -394
60 -28 75 -31 166 -31 92 0 106 3 167 32 241 114 311 414 145 623 -103 130
-280 181 -438 127z"
										/>
									</g>
								</svg>
								<p>Doc B</p>
							</label>
						</p>
						</div>
						<div className="date-time-picker">
							<div className="date-picker" style={{paddingTop:"2em"}}>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<MobileDatePicker
										label="Date mobile"
										inputFormat="MM/dd/yyyy"
										value={date}
										onChange={handleDateChange}
										renderInput={(params) => <TextField {...params} />}
									/>

								</LocalizationProvider>
							</div>
							<div className="time-picker" style={{paddingTop:"2em"}}>
								<Box sx={{ minWidth: 120 }}>
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">Time Slot</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={timeSlot}
											label="Time Slot"
											onChange={handleTimeChange}
										>
											<MenuItem value={"10AM-11AM"}>10AM-11AM</MenuItem>
											<MenuItem value={"1PM-2PM"}>1PM-2PM</MenuItem>
											<MenuItem value={"5PM-7PM"}>5PM-7PM</MenuItem>
										</Select>
									</FormControl>
								</Box>
							</div>
						</div>
						<div className="book-button" style={{paddingTop:"2em"}}>
							<ThemeProvider theme={theme}>
								{
									!isBooked ? <Button
										sx={{
											display: 'flex',
											width: '235px'
										}}
										variant="contained" color="dark" onClick={() => doBooking(doc, date, timeSlot, setIsBooked)}>
										Book Now
									</Button> :
										<Button
											sx={{
												display: 'flex',
												width: '235px'
											}}
											variant="outlined" color="dark" >
											Booked
										</Button>
								}

							</ThemeProvider>
						</div>
					</Paper>

			</div>
		</div >
	);
}

export default Booking;
