import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { apiEndpoint } from './endpoints';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);
        
        fetch(`${apiEndpoint}/blogs`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('New blog added!');
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Title</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
            </form>
        </div>
    );
}

export default Create;