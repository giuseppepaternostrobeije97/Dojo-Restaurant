import { StaticImageData } from "next/image"

export type menuCard = {
    image: StaticImageData | string;
    title: string;
    description: string;
    price: number | string
}