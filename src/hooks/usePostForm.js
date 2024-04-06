import { useState } from 'react';

const useContactForm = (callback) => {

    const initialState = {
        title: '',
        image: '',
        category: '',
        description: '',
        author: '',
        authorDescription: '',
        time: ''
    };

    const [inputs, setInputs] = useState(initialState);

    const handleSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        await callback(inputs);
        setInputs(initialState);
    };

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
};

export default useContactForm;
