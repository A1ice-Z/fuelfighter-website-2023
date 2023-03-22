import React from 'react';
import SocialMediaBar from './SocialMediaBar';
import defaultImage from '../../assets/icon/whiteMember.png';
import '../../styles/pageStyles/Team/NewMemberProfile.css'

function Profile({mail, image, name, studie, position, linkedin}) {
	// const [mailVisible, setMailVisible] = useState(false)

	// const makeMailVisible = () => setMailVisible(true);
	if(image === undefined || image == null){
		image = defaultImage;
	}
	const data = {'email' : mail, 'linkedin' : linkedin }
	return (
		<div>

			<div id="memberPictureBox">
	
				<img src={image} id="memberImage" image={image} />
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