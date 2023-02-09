import { useState } from "react";


const useForm = ({onSubmit, initialState}) => {
    const [find, setFind] = useState({ ...initialState });

const handleChange = ({target}) => {
    const { name, value } = target;
    setFind(prevState => {
        return { ...prevState, [name]: value };
    })
}

        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit(find);
    };
    return {find, setFind, handleChange, handleSubmit}
}

export default useForm;