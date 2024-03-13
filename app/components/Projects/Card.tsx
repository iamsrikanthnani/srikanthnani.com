"use client";
import { CardBody, CardContainer, CardItem } from "@/components";
import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Card = ({ card, index }: any) => {
  return (
    <div key={card.name}>
      {/* Container for the card */}
      <CardContainer className="inter-var">
        {/* Body of the card */}
        <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.3] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          {/* Title of the card */}
          <CardItem translateZ="50" className="text-xl font-bold text-white">
            {card?.name}
          </CardItem>
          {/* Description of the card */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-300 text-sm max-w-sm mt-2"
          >
            {card?.description}
          </CardItem>
          {/* Image of the card */}
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={card?.img}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          {/* Links/buttons section */}
          <div className="flex justify-end gap-3 items-center mt-7">
            {/* Link to external URL */}
            {card?.link && (
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs font-bold"
              >
                <Link href={card?.link} target="_blank">
                  <OpenInNewWindowIcon
                    width={18}
                    height={18}
                    color="#fff"
                    className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                  />
                </Link>
              </CardItem>
            )}
            {/* Link to GitHub repository */}
            {card?.git && (
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs font-bold"
              >
                <Link href={card?.git} target="_blank">
                  <GitHubLogoIcon width={18} height={18} color="#fff" />
                </Link>
              </CardItem>
            )}
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Card;
