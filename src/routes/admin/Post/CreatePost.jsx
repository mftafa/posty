import { useState } from "react";
import Allert from "../../../components/Shared/Allert.jsx";
import axios from "axios";
import useContactForm from "../../../hooks/useContactForm.js";

export default function CreatePost() {

  const [allertMessageBox, setAllertMessageBox] = useState(false);
  const sendContactRequest = (inputs) => {
    axios.post('https://66063693d92166b2e3c36964.mockapi.io/api/react-posts/posts', inputs)
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
      <div className="text-center my-8">
        <div className="relative mb-2">
          <h2 className="text-gray-800 font-bold text-5xl z-0 uppercase">
            Create a post
          </h2>
          <i className="absolute w-64 h-4 bg-blue-800 bg-opacity-50 transform -translate-x-1/2 top-8 -z-50"></i>
        </div>
        <p className="font-normal text-lg text-gray-400">
          here you can create your post
        </p>
      </div>
      <div className="w-1/2 mx-auto">
        {allertMessageBox && <Allert message="Created successfully." allertCloseHandler={()=>setAllertMessageBox(false)} />}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="block mb-2 text-sm text-gray-600">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleInputChange}
              value={inputs.title || ''}
              placeholder="Enter title"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="block mb-2 text-sm text-gray-600">
              Image
            </label>
            <input
              type="text"
              name="image"
              id="image"
              onChange={handleInputChange}
              value={inputs.image || ''}
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="category"
              className="block mb-2 text-sm text-gray-600"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              onChange={handleInputChange}
              value={inputs.category || ''}
              placeholder="Enter category"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="description"
              className="block mb-2 text-sm text-gray-600"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              onChange={handleInputChange}
              value={inputs.description || ''}
              placeholder="Enter description"
              required
              className="w-full h-24 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="block mb-2 text-sm text-gray-600">
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              onChange={handleInputChange}
              value={inputs.author || ''}
              placeholder="Enter author"
              required
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="authorDescription" className="block mb-2 text-sm text-gray-600">
              Author Description
            </label>
            <input
                type="text"
                name="authorDescription"
                id="authorDescription"
                onChange={handleInputChange}
                value={inputs.authorDescription || ''}
                placeholder="Enter author description"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="block mb-2 text-sm text-gray-600">
              Time
            </label>
            <input
                type="date"
                name="time"
                id="time"
                onChange={handleInputChange}
                value={inputs.time || ''}
                placeholder="Enter time"
                required
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-100"
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
