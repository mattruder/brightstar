import BrightStarNav from './brightstarnav.js'
import Contact from './contact.js'
import Schedule from './schedule.js'
import './enrollmentPage.css'

function EnrollmentPage({setPage}) {
    return (
        <div>
        <div className="nav">
            <BrightStarNav setPage={setPage} />
        </div>
        <div className="schedule-and-contact-area">
            <div className='schedule-card'>
            <Contact />
            </div>
            <div className='schedule-card'>
            <Schedule />
            </div>
        </div>
        </div>
    )
}

export default EnrollmentPage