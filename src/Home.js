import BlogList from './BlogList';
import useFetch from './useFetch';
import { apiEndpoint } from './endpoints';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch(`${apiEndpoint}/blogs`);

    return (
        <div className="home">
            {error && <p>{ error }</p>}
            {isPending && <p>Loading...</p>}
            {blogs && <BlogList blogs={ blogs } title="All Blogs!" />}
        </div>
    );
}

export default Home;
