import React from 'react';
import SocialMediaBar from './SocialMediaBar';
import { MdMailOutline } from 'react-icons/md'
import defaultImage from '../../assets/icon/worker_small.png';
import '../../styles/pageStyles/Team/NewMemberProfile.css'

function Profile({mail, image, name, studie, position, linkedin}) {
	// const [mailVisible, setMailVisible] = useState(false)

	// const makeMailVisible = () => setMailVisible(true);
	const data = {'email' : mail, 'linkedin' : linkedin }
	return (
		<div>

			<div id="memberPictureBox">
	
				<img src={image} id="memberImage" image={image} />
		
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
	)
}

export default Profile;