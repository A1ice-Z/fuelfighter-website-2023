import React from "react";


// function SponsorsIcon({name, image, sponsorType}) {
export default function SponsorsIcon({image}) {

	const imageUrl = image
	return (
			<sponsorsCard>
				<sponsorsImage image={image} />
			</sponsorsCard>
	)
}
