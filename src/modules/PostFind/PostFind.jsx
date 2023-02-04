import { useState, useEffect } from "react";

import Modal from "shared/components/Modal/Modal";
import {searchPosts} from '../../shared/services/postsApi';
import PostFindForm from "./PostFindForm/PostFindForm";
import PostFindList from "./PostFindList/PostFindList";
import Button from "shared/components/Button/Button";
import PostDetailes from "./PostDetailes/PostDetailes";
import Loader from "shared/components/Loader/Loader";
import Message from "shared/components/Message/Message";

import css from "./postFind.module.css";

const PostFind = () => {
    const [find, setFind] = useState("");
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [postDetailes, setPostDetailes] = useState(null);

    useEffect(() => {

        if (find) {
        const fetchPost = async() => {
            try {
                setLoading(true);
            const hits = await searchPosts(find, page);
            setItems((prevItems) => ([...prevItems, ...hits]))
                }
            catch (error) {
                setError(error.message);
                }
            finally {
                setLoading(false);
                }    
            }  
            fetchPost();
        }
    
},[find, page, setLoading, setItems, setError])

const onSearchPost = ({ prevFind, find}) => {
    if (prevFind !== find) {
        setFind(find);
        setItems([]);
        setPage(1);
        }
    }   
    
const showPost = ({id, largeImageURL }) => {
    setPostDetailes({ id, largeImageURL });
    setShowModal(true);
}

const loadMore = () => {
    setPage((prevPage) => (prevPage + 1));
}

const closeModal = () => {
    setShowModal(false);
    setPostDetailes(null);
}
    
    return (
        <>
            <PostFindForm onSubmit={onSearchPost} />
            {(!find || items.length === 0) && <Message message="Please enter a valid keyword to search for photos." />}
            {error && <Message message="Sorry... No results were found for this query! 
                                            Perhaps you are sending an empty request. Please enter a keyword to search." />}
            {loading && <Loader className={css.loader} />}
            <PostFindList showPost={showPost} items={items} />
            {Boolean(items.length) && <Button onClick={loadMore}>Load more...</Button>}
            {showModal && <Modal close={closeModal}><PostDetailes {...postDetailes} /></Modal>}
        </>
    )    
}
    
export default PostFind;