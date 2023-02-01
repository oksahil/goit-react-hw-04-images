import { Component } from "react";

import Modal from "shared/components/Modal/Modal";
import {searchPosts} from '../../shared/services/postsApi';
import PostFindForm from "./PostFindForm/PostFindForm";
import PostFindList from "./PostFindList/PostFindList";
import Button from "shared/components/Button/Button";
import PostDetailes from "./PostDetailes/PostDetailes";
import Loader from "shared/components/Loader/Loader";
import Message from "shared/components/Message/Message";

import css from "./postFind.module.css";

class PostFind extends Component {
    state = {
        find: "",
        items: [],
        loading: false,
        error: null,
        page: 1,
        showModal: false,
        postDetailes: null,
    }

    
    componentDidUpdate(prevProps, prevState) {
        const { find, page } = this.state;
        if (prevState.find !== find || prevState.page !== page) {
            this.fetchPost();
        }
    }

    async fetchPost () {
        try {
        this.setState({loading: true})
        const { find, page } = this.state;
        const hits = await searchPosts(find, page);
        this.setState(({items}) => ({items: [...items, ...hits]}))
            }
        catch (error) {
            this.setState({ error: error.message })
            }
        finally {
            this.setState({loading: false})
            }    
}

    searchPost = ({ find}) => {
        this.setState({ find, items: [],  page: 1 });
    }
    
    loadMore = () => {
        this.setState(({page}) => ({page: page + 1}))
    }

    showPost = ({id, largeImageURL }) => {
        this.setState({
            postDetailes: {
                id,
                largeImageURL,
            },
            showModal: true,
    })
    }
    
    closeModal = () => {
        this.setState({
            showModal: false,
            postDetailes: null,
        })
    }

    render() {
        const { items, loading, error, showModal, postDetailes} = this.state;
        const { searchPost, loadMore, showPost, closeModal } = this;
        return (
            <>
                <PostFindForm onSubmit={searchPost} />
                {loading && <Loader className={css.loader} />}
                <PostFindList showPost={showPost} items={items} />
                {error && <Message className={css.errorMessage} message={error.message} />}
                
                {Boolean(items.length) && <Button onClick={loadMore}>Load more...</Button>}
                {showModal && <Modal close={closeModal}><PostDetailes {...postDetailes} /></Modal>}
            </>
        )
    }
}

export default PostFind;