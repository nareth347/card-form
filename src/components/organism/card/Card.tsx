"use client";
import React, { ReactNode, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: string;
  image: string;
  name: string;
  selectCard: string | null;
  onSelectCard: React.Dispatch<React.SetStateAction<string>>;
  onDeleteCard: React.Dispatch<React.SetStateAction<string>>;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  image,
  selectCard,
  onSelectCard,
  onDeleteCard,
}: CardProps) => {
  return (
    //Card
    <div
      onClick={() => {
        // Unselect Card
        if (selectCard === id) {
          onSelectCard("");
        } else {
          // Select Card
          onSelectCard(id);
        }
      }}
      className={
        selectCard === id
          ? "flex justify-between items-start w-[620px] bg-purple-200 text-white  m-auto mt-5 p-2 border border-[#d6c2e7] rounded-lg "
          : "flex justify-between items-start w-[620px]  m-auto mt-5 p-2 border border-[#d6c2e7] rounded-lg hover:bg-gray-200"
      }
    >
      <div className="flex flex-row justify-center gap-2">
        <div>
          <Image
            src={image}
            width={45}
            height={45}
            className="border rounded-full"
            alt="User's Photo"
          ></Image>
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-base text-[#33363F] font-sans ">{name}</p>

          <Link
            href={`/${name}`}
            className="text-xs text-[#00000] opacity-[60%] font-sans p-1 hover:bg-cyan-900 "
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded">
              Preveiw
            </button>
          </Link>
        </div>
      </div>
      <div>
        <button
          onClick={(e) => {
            onDeleteCard(id);
            e.stopPropagation();
          }}
        >
          <i>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="square"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 6L6 18M6 6l12 12"
              />
            </svg>
          </i>
        </button>
      </div>
    </div>
  );
};

export { Card };
