import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry, not sorry</h2>
            <p>That page cannot be found!</p>
            <br/>
            <Link to='/'>Go back to homepage</Link>
        </div>
    );
}

export default PageNotFound;
