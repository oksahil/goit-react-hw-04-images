import PropTypes from "prop-types";

import css from "./massage.module.css";

const Message = ({ message }) => {
    return(
  <h3 className={css.title}>{message}</h3>
    )
}

export default Message;

Message.propTypes = {
    message: PropTypes.string.isRequired,
}