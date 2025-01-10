import Image from "next/image"
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";
import NoraLight from "@/assets/NoraLight.png";
import SendmessageIcon from "@/components/lottie-ui/send-message";
const StationUI = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
        <div className="relative flex justify-between w-full h-full items-stretch flex-col">
          <div className="absolute h-[35%] sm:h-[40%] w-fit aspect-[169/83] xs:left-[2%] shadow-xl">
            <Image
              src={NoraLight}
              alt={"Station UI assets example"}
              fill
              style={{
                objectFit: "contain",
                borderRadius: "8px"
              }}
            />
          </div>
          <div className="absolute sm:h-[30%] xs:h-[20%] h-[15%] max-h-20 w-fit aspect-[339/119] overflow-hidden right-0 top-[40%] xs:top-[8%] shadow-xl">
            <Image
              src={NoraLight}
              alt={"Station UI assets example"}
              fill
              style={{
                objectFit: "contain",
                borderRadius: "6px",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <div className="w-full flex gap-2 items-center">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              Nora Light
            </h1>
            <SendmessageIcon link="https://nora-light.vercel.app/" lottieName="NoraLight" />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              Front-end
            </Badge>
            <Badge variant="default" className="text-xs">
              Figma
            </Badge>
            <Badge variant="default" className="text-xs">
              React
            </Badge>
            <Badge variant="default" className="text-xs">
              SCSS
            </Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export default StationUI
