import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md p-8 rounded-lg w-96">
        <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border rounded-md"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="bg-black hover:bg-white hover:text-black text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
