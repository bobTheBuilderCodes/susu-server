import { ChangeEvent, HTMLAttributes, ReactElement } from "react";


export interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
    disabled? : boolean
    title: string
    type: "submit" | "reset" | "button"
    
}


export interface IInputProps extends HTMLAttributes<HTMLInputElement>{
    label?: string
    value: string 
    name: string
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void
    isRequired?: boolean
    showLink?: boolean
    linkTitle?: string
    linkSlug?: string
    disabled?: boolean
    width?: number

} 