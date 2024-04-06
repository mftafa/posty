import axios from 'axios';
import useContactForm from "../../hooks/useContactForm.js";
import Allert from "../../components/Shared/Allert.jsx";
import {useState} from "react";
export default function Contact() {

    const [allertMessageBox, setAllertMessageBox] = useState(false);
    const sendContactRequest = (inputs) => {
        axios.post('https://66063693d92166b2e3c36964.mockapi.io/api/react-posts/contact', inputs)
            .then(response => {
                setAllertMessageBox(true)
                setTimeout(() => {
                    setAllertMessageBox(false)
                }, 5000);
                console.log(response);
            })
            .catch(error => {
                // handle error
                console.error(error);
            });
    };

    const { inputs, handleInputChange, handleSubmit } = useContactForm(sendContactRequest);

    return (
        <>
            <div className="text-center my-12">
                <div className="relative mb-2">
                    <h2 className="text-gray-800 font-bold text-5xl z-0 uppercase">Contact Us</h2>
                    <i className="absolute w-64 h-4 bg-blue-800 bg-opacity-50 transform -translate-x-1/2 top-8 -z-50"></i>
                </div>
                <p className="font-normal text-lg text-gray-400">keep contact with us</p>
            </div>
            <form onSubmit={handleSubmit} className="w-1/2 mx-auto">
                {allertMessageBox &&
                    <Allert message="Created successfully." allertCloseHandler={() => setAllertMessageBox(false)}/>}
                <div className="mb-3">
                    <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleInputChange}
                        value={inputs.name || ''}
                        placeholder="Enter name"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleInputChange}
                        value={inputs.email || ''}
                        placeholder="Enter Email"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm text-gray-600"
                    >
                        Message
                    </label>
                    <input
                        type="text"
                        name="message"
                        id="message"
                        onChange={handleInputChange}
                        value={inputs.message || ''}
                        placeholder="Enter category"
                        required
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
                    />
                </div>
                <div className="mb-3">
                    <button
                        type="submit"
                        className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
                    >
                        Submit Contact
                    </button>
                </div>
            </form>
        </>
    )
}