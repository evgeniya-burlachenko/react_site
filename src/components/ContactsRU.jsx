import React from "react";
import { NavLink } from "react-router-dom";
import "./Contacts.css";
import BackgroundLine from "../assets/images/main_site_files/light_line.png";
import Form from "./Form";

export default function ContactsRU() {
	return (<div className='container-fluid main_footer' id="contacts">
			<div className='col-sm-12 contact_line_block'>
				<img className='contact_line' style={{width: "100%"}} src={BackgroundLine} alt={""} />
			</div>

			<div className='container justify-content-around footer_center'>
				<div className='row mt-5'>
					<div className="col-sm-12  footer_contact">
						<div className='col-sm-4 footer_left_item '>
							<div className='d-flex justify-content-end mr-3'>
								<a href='#home' className='nav-item nav_footer' >
									<h3>HOME</h3>
								</a>
							</div>
							<div className='d-flex justify-content-end mr-3'>
								<a href='#products' className='nav-item nav_footer'>
									<h3>PRODUCTS</h3>
								</a>
							</div>
							<div className='d-flex justify-content-end mr-3'>
								<a href='#' className='nav-item nav_footer'>
									<h3>NEWS</h3>
								</a>
							</div>
							<div className='d-flex justify-content-end mr-3'>
								<a href='#mission' className='nav-item nav_footer'>
									<h3>MISSION</h3>
								</a>
							</div>
							<div className='d-flex justify-content-end mr-3'>
								<a href='#values' className='nav-item nav_footer'>
									<h3>OUR VALUES</h3>
								</a>
							</div>
							<div className='d-flex justify-content-end mr-3'>
								<a href='#team' className='nav-item nav_footer'>
									<h3>OUR TEAM</h3>
								</a>
							</div>
							<div className='d-flex justify-content-end mr-3'>
								<a href='#contacts' className='nav-item nav_footer'>
									<h3>CONTACTS</h3>
								</a>
							</div>
						</div>
					<div className='col-sm-4 footer_center_item'>
							<div className='text-center'>
								<h3>GET IN TOUCH</h3>
							</div>
								<Form/>
					</div>
					<div className='col-sm-4 footer_right_item'>
						<div className='d-flex justify-content-start ml-3'>
							<h3>CONTACTS</h3>
						</div>
						<div className='mt-4 footer_head_item d-flex justify-content-start ml-3'>
							<h4>e-mail:</h4>
						</div>
						<div className='footer_text_item d-flex justify-content-start ml-3'>
							<h5>info@helmda-systems.com</h5>
						</div>
						<div className='mt-2 footer_head_item d-flex justify-content-start ml-3'>
							<h4>phone number:</h4>
						</div>
						<div className='footer_text_item d-flex justify-content-start ml-3'>
							<h5>+7 903 5544908</h5>
						</div>
						<div className='mt-2 footer_head_item d-flex justify-content-start ml-3'>
							<h4>our address:</h4>
						</div>
						<div className='footer_text_item d-flex justify-content-start ml-3'>
							<h5>
								Harju maakond, Tallinn, {"\n"}Kesklinna linnaosa, {"\n"}Narva mnt 5, 10117
							</h5>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}
