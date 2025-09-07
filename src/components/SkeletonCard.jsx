export const SkeletonCard = () => {
  return (
    <div className="flex flex-col max-w-xs rounded overflow-hidden shadow-lg animate-pulse">
      <div className="relative overflow-hidden group">
        <span className="w-full h-64 bg-gray-400 block"></span>
        <div className="absolute z-10 inset-0">
          <span className="absolute left-0 bottom-0 z-30 p-1 bg-gray-400 w-30 h-12"></span>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-6 py-4 w-full">
        <span className="w-[60%] h-3 bg-gray-400 rounded-full"></span>{" "}
        <span className="w-[60%] h-3 bg-gray-400 rounded-full"></span>{" "}
        <span className="w-[60%] h-3 bg-gray-400 rounded-full"></span>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-300 rounded-full py-3 px-5 mr-2"></span>
          <span className="inline-block bg-gray-300 rounded-full py-3 px-5 mr-2"></span>
          <span className="inline-block bg-gray-300 rounded-full py-3 px-5 mr-2"></span>
          <span className="inline-block bg-gray-300 rounded-full py-3 px-5 mr-2"></span>
        </div>
      </div>
    </div>
  );
};
