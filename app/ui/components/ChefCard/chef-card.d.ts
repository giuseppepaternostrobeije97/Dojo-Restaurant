// -- NEXT
import { StaticImageData } from "next/image"

export type chefCardProps = {
    profilePic: string | StaticImageData;
    name:string;
    surname: string;
    role:string;
    social1?:string;
    social2?:string;
    social3?:string;
    key?:number;
}