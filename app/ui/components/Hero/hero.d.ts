// -- TYPE TO DEFINE HERO
export type heroProps = {
    title:string;
    homeHero?:boolean;
    displayPath?:string;
    backgroundImage?:string |  { src: string };
}