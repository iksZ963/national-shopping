/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

interface OgCard {
  ogImage: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
}

const OgCard = ({ ogImage, ogTitle, ogDescription, ogUrl }: OgCard) => {
  return (
    <div className="max-w-sm rounded overflow-hidden  border border-gray-200 bg-white">
      <div className="relative h-48 w-full">
        <img
          className="w-full h-full object-cover"
          src={ogImage}
          alt={ogTitle}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-md mb-2 border-b pb-2">{ogTitle}</div>
        <p className="text-gray-700 text-base">{ogDescription}</p>
      </div>
      {ogUrl && (
        <div className="px-6 pt-4 pb-2">
          <a
            href={ogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700"
          >
            Read more
          </a>
        </div>
      )}
    </div>
  );
};

export default OgCard;
