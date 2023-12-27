import React  from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1>Create Post</h1>
                <PostCreate />
                <hr/>
                <h3>Posts</h3>
                <PostList/>
                <h3>Posts.......</h3>
            </div>
        );
    }
}

export default App;