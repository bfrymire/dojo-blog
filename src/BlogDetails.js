import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';
import { apiEndpoint } from './endpoints';

const BlogDetails = () => {
    
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(`${apiEndpoint}/blogs/${id}`);
    const history = useHistory();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleClick = () => {
        setIsDeleting(true);
        fetch(`${apiEndpoint}/blogs/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setIsDeleting(false);
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2 className=''>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    { !isDeleting && <button onClick={handleClick}>Delete</button> }
                    { isDeleting && <button disabled>Deleting Blog...</button> }
                </article>
            )}
        </div>
    );
}

export default BlogDetails;
