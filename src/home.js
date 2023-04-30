import Button from 'react-bootstrap/Button';


function Home({setPage}) {
    return (
        <div className="homepage">
        <h1>Bright Star Spirits</h1>
        <div className="navlinks">
            <Button variant="outline-primary" onClick={() => setPage('about')}>about us / mission statement</Button>
            <Button variant="outline-primary" onClick={() => setPage('enrollment')}>summer schedule / enrollment</Button>
        </div>
        </div>
    )
}

export default Home;