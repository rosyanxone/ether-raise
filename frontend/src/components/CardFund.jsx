import React from "react";
import { Link } from "react-router-dom";

export const CardFund = ({
  title,
  slug,
  description,
  amountCollected,
  target,
}) => {
  return (
    <div className="rounded-2xl border border-light-300 bg-light-200 sm:max-w-[360px]">
      <div className="relative overflow-hidden rounded-2xl">
        <span className="absolute m-4 rounded-lg border border-light-300 bg-black bg-opacity-20 px-4 py-2 text-light-300">
          Headphones
        </span>
        <img
          className="h-40 w-full object-cover"
          src="./img/headphone-full.png"
          alt="Headphone"
        />
      </div>
      <div className="flex flex-col gap-8 px-4 py-6">
        <div className="flex flex-col gap-5">
          <h5 className="text-h5-semi line-clamp-1 text-ashes-100">{title}</h5>
          <p className="text-body-regular line-clamp-2 text-pretty text-ashes-200">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-body-semi flex items-baseline gap-1 text-ashes-100">
              {amountCollected}
              <p className="text-caption-regular">(Terkumpul)</p>
            </span>
            <span className="text-body-semi text-ashes-100">{target}</span>
          </div>
          <div className="flex justify-between gap-3 align-baseline">
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-[#956CF6]"
                style={{ width: "75%" }}
              ></div>
            </div>
            <span className="text-caption-medium text-dark">70%</span>
          </div>
        </div>
        <div className="pt-2 text-center">
          <Link
            to={`/detail/${slug}`}
            className="text-button lexend-deca text-primary"
          >
            Donasi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardFund;
