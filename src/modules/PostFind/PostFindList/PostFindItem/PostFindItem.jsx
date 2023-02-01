import PropTypes from 'prop-types';

import css from "./postFindItem.module.css";


function PostFindItem({webformatURL,tags}) {
  return (
    <>
        <img className={css.imgCard} src={webformatURL} alt={tags} />
    </>
    );
}

export default PostFindItem;

PostFindItem.propTypes = {
    friendName: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
};