import CardWrapper from "./card-wrapper";
import Image from "next/image";
import Manzil from "../../../public/map.png";

const MapCard = () => {
  return (
    <CardWrapper>
      <Image
        className={"h-full w-full bg-center rounded-3xl object-cover"}
        src={Manzil}
        alt="map"
        width={300}
        height={300}
      />
    </CardWrapper>
  );
};

export default MapCard;
