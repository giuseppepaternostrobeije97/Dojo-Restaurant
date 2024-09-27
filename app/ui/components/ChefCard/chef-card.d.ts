// -- NEXT
import { StaticImageData } from "next/image"
// -- TYPE
import { social } from "@/app/lib/definitions";

export type chefCardProps = {
    profilePic: string | StaticImageData;
    name:string;
    surname: string;
    role:string;
    social:social[];
    key?:number;
}