import { useEffect, useState, lazy } from "react";
import { SkeletonCard } from "./SkeletonCard";
import { withSuspense } from "./withSuspense";


const Card = lazy(() => import("./Card").then(({ Card }) => ({ default: Card })));
const CardWithSuspense = withSuspense(Card, <SkeletonCard />);

export const CardsGrid = ({ term = "random" }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API}&q=${term}&image_type=photo&pretty=true`
        );

        if (!res.ok) throw new Error("Failed to fetch images");

        const data = await res.json();
        setImages(data.hits || []);
        console.log(data)
      } catch (err) {
        console.error(err);
        setError("Failed to load images");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [term]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (images.length === 0) {
    return <p className="text-center text-gray-500">No images found</p>;
  }

  return (
    <div className="mx-auto container p-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <CardWithSuspense key={img.id } image={img} />
        ))}
      </div>
    </div>
  );
};
