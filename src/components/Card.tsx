import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { MdLocationOn } from "react-icons/md";

interface Props {
  venueName: string;
  imgSrc: string;
  onRatingChange?: Function;
  location?: string;
}

export default function Card({
  venueName,
  imgSrc,
  onRatingChange,
  location,
}: Props) {
  const robotId = `${venueName} Rating`;
  return (
    <InteractiveCard>
      <div className="w-full rounded-t-lg overflow-hidden relative aspect-[3/2] group">
        <Image
          src={imgSrc}
          alt={`${venueName} image`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5 flex-col flex gap-3">
        <h2 className="font-anuphan font-bold text-lg text-gray-800">
          {venueName}
        </h2>
        {location && (
          <div className="flex items-center text-gray-500 text-sm">
            <MdLocationOn className="mr-1" />
            <span>{location}</span>
          </div>
        )}
        <Rating
          id={robotId}
          name={robotId}
          data-testid={robotId}
          defaultValue={0}
          precision={1}
          size="small"
          onClick={onRatingChange && ((event) => event.stopPropagation())}
          onChange={
            onRatingChange && ((_, value) => onRatingChange(venueName, value))
          }
          sx={{ color: "#f59e0b" }}
        />
      </div>
    </InteractiveCard>
  );
}
