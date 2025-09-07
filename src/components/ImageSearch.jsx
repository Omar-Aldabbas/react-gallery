import { useState } from "react";

export const ImageSearch = ({ setTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setTerm(inputValue);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-6 flex items-center gap-4 border-b-2 border-gray-300 py-4">
      <input
        type="text"
        placeholder="Search images..."
        className="flex-1 px-4 py-2 focus:outline-none  transition"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        // type="submit"
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-400 text-white font-semibold  hover:bg-blue-500 transition"
      >
        Search
      </button>
    </div>
  );
};
