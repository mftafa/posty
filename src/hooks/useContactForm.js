import { useState } from 'react';

const useContactForm = (callback) => {

    const initialState = {
        name: '',
        email: '',
        message: ''
    };

    const [inputs, setInputs] = useState(initialState);

    const handleSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        await callback(inputs);
        setInputs(initialState); // Reset the form inputs after the POST request
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
