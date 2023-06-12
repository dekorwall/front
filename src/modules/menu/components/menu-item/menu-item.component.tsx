import { FC } from "react";

interface MenuItemProps {
  imagePath: string;
  weight: number;
  title: string;
  description: string;
  price: number;
};

export const MenuItem: FC<MenuItemProps> = ({
    imagePath,
    weight,
    title,
    description,
    price,
}) => {
    return (
        <div className="w-96 shadow-xl rounded-2xl">
            <div className="relative mb-8">
                <img
                    src={imagePath}
                    alt="dekor"
                    className="object-cover object-center w-full rounded-t-2xl"
                />
                <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
                    {weight}л
                </span>
            </div>
            <div className="p-8">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="mb-8">
                    {description}
                </p>
                <span className="text-xl font-semibold">{price}грн</span>
            </div>
        </div>
    )
};