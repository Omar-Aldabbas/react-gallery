export const Card = ({ image }) => {
  return (
    <div className="flex flex-col max-w-xs rounded-lg overflow-hidden shadow-lg group">
      <div className="relative overflow-hidden">
        <img
          src={image?.webformatURL}
          alt={image?.tags || "Image"}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
          <h3 className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 text-white/80 font-semibold text-lg transition-all duration-300">
            Photo by {image?.user}
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-4 py-4">
        <ul className="list-none text-sm text-gray-700">
          <li>
            <strong>Views:</strong> {image?.views || 0}
          </li>
          <li>
            <strong>Downloads:</strong> {image?.downloads || 0}
          </li>
          <li>
            <strong>Likes:</strong> {image?.likes || 0}
          </li>
        </ul>

        <div className="mt-2">
          {image?.tags?.split(",").slice(0, 5).map((tag, idx) => (
            <span
              key={idx}
              className="inline-block bg-gray-200 rounded-full py-1 px-3 text-xs font-semibold text-gray-800 mr-1 mb-1"
            >
              #{tag.trim()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
