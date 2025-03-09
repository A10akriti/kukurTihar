import { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');

  const handleDonate = () => {
    if (amount && name) {
      alert(`Thank you for your Donate of $${amount}, ${name}!`);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Donate to Kukur Tihar Festival</h1>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">Your Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-600">Donate Amount ($)</label>
          <input
            type="number"
            id="amount"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter Donate amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          onClick={handleDonate}
          className="w-full py-3 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600 transition duration-200"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Donate;
