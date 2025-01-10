import Image from "next/image"
import { Badge } from "../../shadcn/Badge";
import SendmessageIcon from "../../lottie-ui/send-message";
import CardWrapper from "../card-wrapper";
import TgMessImg from "@/assets/TelegramMessage.png";

const StationLanding = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
        <div className="relative flex justify-between w-full h-full items-stretch flex-col">
          <div className="absolute h-full w-full aspect-[578/433] shadow-2xl">
            <Image
              src={TgMessImg}
              alt={"Station landing page example"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "8px"
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <div className="w-full flex gap-2 items-center">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              Telegram Message
            </h1>
            <SendmessageIcon link="https://tg-message-sigma-eight.vercel.app/" lottieName="StationLandingIcon" />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              Front-end
            </Badge>
            <Badge variant="default" className="text-xs">
              Javascript
            </Badge>
            <Badge variant="default" className="text-xs">
              HTML
            </Badge>
            <Badge variant="default" className="text-xs">
              CSS
            </Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
}

export default StationLanding
