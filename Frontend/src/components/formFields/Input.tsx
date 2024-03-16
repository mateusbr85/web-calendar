import { FC, InputHTMLAttributes,  } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    
}



export const Input: FC<InputProps> = ({label, ...props}) => {
    // const inputRef = useRef(null)

    return(
        <div
            className="flex flex-col gap-1 text-sm lg:text-lg md:text-md"
        >
            <label
            >
                {label}
            </label>
            <input 
                {...props}
                className="w-full h-9 p-2 rounded-lg border-2 border-background_dark/20 focus:outline-none focus:ring-2 focus:ring-accent_light/20
                dark:border-text_dark dark:focus:ring-accent_dark/20
                "
            />
        </div>
    )
}