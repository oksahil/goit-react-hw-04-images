import PropTypes from 'prop-types';

import PostFindItem from "./PostFindItem/PostFindItem";

import css from "./postFindList.module.css"


const PostFindList = ({items, showPost}) => {

    const elements = items.map(({ id, webformatURL, largeImageURL, tags }) =>
        <PostFindItem
            webformatURL={webformatURL}
            key={id}
            tags={tags}
            onClick={() => showPost({ id, largeImageURL })}
        />
                            );
    
    return (
        <ul className={css.list}>
            {elements}
        </ul>
    )
}

export default PostFindList;

PostFindList.defaultProps = {
    items: []
}

PostFindList.propTypes = {
    showPost: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
   })) 
};