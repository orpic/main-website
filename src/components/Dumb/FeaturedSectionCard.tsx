import { useState } from "react";
import { images } from "../../assets/images";
import { LoadingSpinner } from "..";
import { FeaturedSectionCardProps } from "../../types";

const FeaturedSectionCard: React.FC<FeaturedSectionCardProps> = ({
  src,
  description,
  link,
  linkText,
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <div className=" bg-neutral-900 mx-2 lg:mx-6 mb-6 rounded-lg flex flex-col">
      <div className="h-40 lg:h-48 m-2  rounded-t-md rounded-b-sm flex items-center justify-center">
        {imageLoading && <LoadingSpinner height="h-8" />}
        <img
          onLoad={() => {
            setImageLoading(false);
          }}
          src={src}
          alt=""
          className="rounded-t-md rounded-b-sm h-full  object-cover"
        />
      </div>
      <p className="px-4 pb-4 pt-2">{description}</p>
      <div className="rounded-b-lg ">
        <div className="mx-2 py-2 mb-2 rounded-sm pl-2 bg-neutral-800 text-xl font-semibold ">
          <a
            rel="noreferrer"
            target="_blank"
            href={link}
            className="border-b-[1px] w-fit flex items-center gap-x-2"
          >
            {`${linkText} `}
            <img src={images.openInNewTab} alt="" className="h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSectionCard;
