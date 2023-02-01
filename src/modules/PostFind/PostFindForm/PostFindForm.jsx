import { Component } from "react";
import PropTypes from "prop-types";

import css from "./postFindForm.module.css"

class PostFindForm extends Component {
    state = {
        find: "",
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        this.reset()
    }

    reset(){
        this.setState({
            find: "",
        })
    }


    render() {
        const {find} = this.state;
        const {handleChange, handleSubmit} = this;
        return (
            // <form className={css.form} onSubmit={handleSubmit}>
            //     <div className={css.findBar}>
            //         <label className={css.labelText} htmlFor="">find</label>
            //         <input
            //             name="find"
            //             value={find}
            //             onChange={handleChange}
            //             placeholder="find"
            //             required />
            //     </div>
            // </form>
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
    />
  </form>
</header>
        )
    }
}

export default PostFindForm;

PostFindForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}