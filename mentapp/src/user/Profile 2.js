import './Profile.css';
import { useState } from 'react';
import hotline from './Assets/Avatars/hotline.jpg';
import userImage from './Assets/Avatars/user.jpg';

function openTab(setIsActive, setThisFalse) {
	setIsActive(true);
	setThisFalse(false);
}

function App() {
	const [isActiveProfile, setIsActiveProfile] = useState(true);
	const [isActiveBooking, setIsActiveBooking] = useState(false);

	return (
		<div className="App">
			<div className="container">
				<div className="card" style={{ height: "120px" }}>
					<div className="img-1"><img src={userImage} alt="Avatar" style={{ height: "100%" }} /></div>
					<div className="container">
						<h1 className="header">Tom Cook</h1>
						<p>tomcook@example.com</p>
					</div>
				</div>

				<div>&nbsp;</div>

				<div className="tab">
					<button className={isActiveProfile ? "tablinks active" : "tablinks"} onClick={() => openTab(setIsActiveProfile, setIsActiveBooking)} id="def_Profile">Profile</button>
					<button className={isActiveBooking ? "tablinks active" : "tablinks"} onClick={() => openTab(setIsActiveBooking, setIsActiveProfile)} id="def_Bookings">Bookings</button>
				</div>

				<div id="Profile" className="tabcontent" style={isActiveProfile ? { display: "block" } : { display: "none" }} >
					<div className="contentPara">
						<div className="list">
							<p className="title">Name</p>
							<p>Tom Cook</p>
						</div>
						<div className="list">
							<p className="title">Email Address</p>
							<p>tomcook@gmail.com</p>
						</div>
						<div className="list">
							<p className="title">Date of Birth</p>
							<p>01/01/1970</p>
						</div>
						<div className="list">
							<p className="title">Contact Number</p>
							<p>123 456 7890</p>
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

			<figure className="snip1527 hover">
				<div className="image"><img src={hotline} alt="call_us" /></div>
				<figcaption>
					<div className="date">
						<span className="month">Call</span>
						<span className="day">Now</span>
					</div>
					<h3>Call Us</h3>
					<p>
						Sometimes the surest sign that one needs help is when the voices inside come alive. Get instant help
						from trained professionals.
					</p>
				</figcaption>
			</figure>
		</div>
	);
}

export default App;
