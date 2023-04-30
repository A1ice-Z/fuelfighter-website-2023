import React from 'react';
import SocialMediaBar from './SocialMediaBar';
import quadratic_default_image from '../../assets/icon/whiteMember.png';
import mid_default_image from '../../assets/icon/default_worker_mid.png';
import long_default_image from '../../assets/icon/default_worker_long.png';
import '../../styles/pageStyles/Team/MemberProfile.css'

function Profile({mail, image, name, studie, position, linkedin,year}) {
	// const [mailVisible, setMailVisible] = useState(false)

	// const makeMailVisible = () => setMailVisible(true);
	if(image === undefined || image == null){
		switch(year){
			case "2020":
				image = quadratic_default_image;
				break;
			case "2021": 
				image = mid_default_image;
				break;
			case "2022":
				image = mid_default_image;
				break;
			case "2023":
				image = long_default_image;
				break;
			default:
				image = mid_default_image;
		}


	}
	const data = {'email' : mail, 'linkedin' : linkedin }
	return (
		<div>

			<div id="memberPictureBox">
	
				<img src={image} id="memberImage" image={image} alt={name}/>
				<div id = "memberInfo"> 

				<div id="nameline">{name}</div>
				<div id="profileborder"></div>
				<div id="position">{position}</div>
				<div id="socialMediaBar">
				</div>
				<div class="overlay">
					<div id="contactMemberNameOverlay" >
						Contact:					
					</div>
					<SocialMediaBar data = {data} />
				</div>
				</div>
			</div>
					

		</div>
	)
}

export default Profile;