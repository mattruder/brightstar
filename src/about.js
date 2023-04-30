import BrightStarNav from './brightstarnav.js'
import InfoCard from './infoCard.js'
import './about.css'

function About({setPage}) {
    return (
        <div>
        <div className="nav">
            <BrightStarNav setPage={setPage} />
        </div>
        <div className='full-about'>
            <InfoCard 
            cardTitle={'About Us'}
            cardText={"Here's a little bit about us!"}
            />
            <InfoCard 
            cardTitle={'Mission Statement'}
            cardText={"this is our mission statement"}
            />
        </div>
        </div>
    )
}

export default About