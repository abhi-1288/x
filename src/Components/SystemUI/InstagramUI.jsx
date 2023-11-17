/* eslint-disable no-constant-condition */
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InstagramUI = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    comments: '',
  });

  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    document.title = 'META Feedback';
    const iconLink = document.querySelector("link[rel~='icon']");
    iconLink.href = 'icons8-meta-100.png';
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'category' && value === 'other' || 'feature' || 'bug') {
      // If "Other" is selected, show the comments section
      setShowComments(true);
    }else {
      // If a different category is selected, hide the comments section
      setShowComments(false);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('formData', JSON.stringify(formData));

    toast.success('Form submitted successfully!', {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="container md:mx-auto md:mt-8  mx-4 mt-10">
      <div className="flex justify-center">
        <img src="meta-insta2.png" alt="meta-logo" className="w-60" />
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
        <label className="block mb-2 text-lg text-gray-600">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        />

        <label className="block mb-2 text-lg text-gray-600">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        />

        <label className="block mb-2 text-lg text-gray-600">Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="md:w-full  px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select a category</option>
          <option value="bug">Bug Report</option>
          <option value="bug">Mischeif Report</option>
          <option value="feature" className='cursor-not-allowed'>Feature Request</option>
          <option value="other">Other</option>
        </select>

        {showComments && (
          <div>
            <label className="block mb-2 text-lg text-gray-600">Comments:</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default InstagramUI;
