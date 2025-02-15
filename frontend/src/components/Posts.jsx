import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useGetAllPost from '@/hooks/useGetAllPost';
import Post from './Post';

const Posts = () => {
    // Fetch posts when the component mounts
    useGetAllPost();

    // Access posts from the Redux store
    const { posts } = useSelector(store => store.post);

    return (
        <div>
            {
                posts && posts.length > 0 ? (
                    posts.map((post) => (
                        <Post key={post._id} post={post} />
                    ))
                ) : (
                    <p>No posts available</p>
                )
            }
        </div>
    );
};

export default Posts;
