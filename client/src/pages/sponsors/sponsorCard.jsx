import '../../styles/pageStyles/Sponsors/card.css'

export default function SponsorCard({name, img}){
    return(
        <>
        {name ? 
            <div className="sponsorCard">
                <img src={img} alt={name+" img"} />
                
                <div className='sponsorName'>
                    <p>{name}</p>
                </div>
            </div>
        : 
            <></>
        }
        </>
    )
}