import { useState } from "react";
import PropTypes from "prop-types";

// import initialState from "./initialState";

import css from "./postFindForm.module.css"

const PostFindForm = ({ onSubmit}) => {
    const [find, setFind] = useState("");

    const handleChange = ({target}) => {
        const {value} = target;
        setFind(value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(find);
    };
    
    return (
            <header className={css.findBar}>
                <form className={css.form} onSubmit={handleSubmit}>
                    <button type="submit" className={css.findFormBtn}>
                    <span className={css.labelText}>Search</span>
                    </button>

                <input
                    className={css.findFormInput}
                    name="find"
                    value={find}
                    onChange={handleChange}
                    type="text"
                        placeholder="Search photos"
                        required 
                />
                </form>
            </header>
            )
}

export default PostFindForm;

PostFindForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}