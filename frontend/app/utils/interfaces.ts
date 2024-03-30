import { HTMLAttributes } from "react";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
    disabled? : boolean
    title: string
    type: "submit" | "reset" | "button"
    
}