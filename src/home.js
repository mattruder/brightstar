import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import './home.css'

function Home({setPage}) {
    return (
        <div className="homepage">
        <h1>Bright Star Spirits</h1>
        <div className="navlinks">

            <Link to="/about">
                <Button variant="outline-primary" onClick={() => setPage('about')}>about us / mission statement</Button>
            </Link>
            
            <Link to='enrollment'>
                <Button variant="outline-primary" onClick={() => setPage('enrollment')}>summer schedule / enrollment</Button>
            </Link>
            
        </div>
        </div>
    )
}

export default Home;