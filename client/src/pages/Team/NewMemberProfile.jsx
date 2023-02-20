import React from 'react';

function Profile({mail, image, name, studie, position, linkedin}) {
	// const [mailVisible, setMailVisible] = useState(false)

	// const makeMailVisible = () => setMailVisible(true);
	const data = {'email' : mail, 'linkedin' : linkedin }
	return (
			<Card>
				<Image image={image} />
				<Content>
					<Name>{name}</Name>
					{
					studie 
						? <Studie>{studie}</Studie> 
						: null
					}
					<SocialMediaBar data = {data} />
					<Line />
					<Position>{position}</Position>
				</Content>
			</Card>
	)
}