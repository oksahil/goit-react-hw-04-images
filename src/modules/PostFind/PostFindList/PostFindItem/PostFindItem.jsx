import PropTypes from 'prop-types';

import css from "./postFindItem.module.css";


function PostFindItem({webformatURL, id, onClick, tags}) {
  return (
        <>
          <li key={id} onClick={onClick} className={css.item}>
          <img className={css.imgCard} src={webformatURL} alt={tags} />
           </li>
        </>
    );
}

export default PostFindItem;

PostFindItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};