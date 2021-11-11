import React from 'react';

import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';

import './App.css';

const App = () => {
    // const dispatch = useAppDispatch();
    // const { users, isLoading, error } = useAppSelector((state) => state.user);
    //
    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, []);

    return (
        <div className="App">
            {/*{isLoading && <h1>Loading...</h1>}*/}
            {/*{error && <h1>{error}</h1>}*/}
            {/*{JSON.stringify(users, null, 2)}*/}
            <div style={{ display: 'flex' }}>
                <PostContainer />
                <PostContainer2 />
            </div>
        </div>
    );
};

export default App;
