import { useState } from "react";
import PropTypes from "prop-types";

import initialState from "./initialState";
// import useForm from "shared/hooks/useForm";

import css from "./postFindForm.module.css"

const PostFindForm = ({ onSubmit }) => {
    // const [state, handleChange, handleSubmit] = useForm({initialState, onSubmit });
        const [state, setState] = useState({ ...initialState });

const handleChange = ({target}) => {
    const { name, value } = target;
    setState(prevState => {
        return { ...prevState, [name]: value };
    })
}

        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit(find);
    };
        const { find } = state;
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