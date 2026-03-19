import React from "react";

const CardFood = () => {
  return (
    <div className="bg-primary">
      <div className="mx-auto text-white">
        <div className="grid grid-cols-3 gap-10 p-10">
          <div className="flex flex-col items-center justify-center gap-y-7">
            <img
              loading="lazy"
              src="/images/fnb/kingclam/carfood_kingclam.svg"
              className="w-15"
              alt=""
            />
            <p className="text-xl font-bold">The best table in town</p>
            <p className="text-center">
              Donec nunc nunc vitae vestibulum. Pulvinar turpis sed diam semper
              nisi ligula. Et imperdiet varius parturient at.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-7">
            <img
              loading="lazy"
              src="/images/fnb/kingclam/carfood_kingclam2.svg"
              className="w-15"
              alt=""
            />
            <p className="text-xl font-bold">The best table in town</p>
            <p className="text-center">
              Donec nunc nunc vitae vestibulum. Pulvinar turpis sed diam semper
              nisi ligula. Et imperdiet varius parturient at.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-7">
            <img
              loading="lazy"
              src="/images/fnb/kingclam/carfood_kingclam3.svg"
              className="h-[50px] w-15"
              alt=""
            />
            <p className="text-xl font-bold">The best table in town</p>
            <p className="text-center">
              Donec nunc nunc vitae vestibulum. Pulvinar turpis sed diam semper
              nisi ligula. Et imperdiet varius parturient at.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFood;
