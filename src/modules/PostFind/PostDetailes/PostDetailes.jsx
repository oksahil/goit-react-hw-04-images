import PropTypes from 'prop-types';

const PostDetailes = ({ id, largeImageURL }) => {
    return (
        <div>
            <img id={id}  src={largeImageURL} alt=""/>
        </div>
    )
}

export default PostDetailes;

PostDetailes.propTypes = {
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
};