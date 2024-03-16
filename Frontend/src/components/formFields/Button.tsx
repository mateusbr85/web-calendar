import { ButtonHTMLAttributes, useEffect, useState } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    width?: string,
    heigth?: string,
    // colorButton?: string
    variant?: 'primary' | 'secondary' | 'outline',
    hrefButton?: string
}

export const Button: React.FC<ButtonProps> = ({ children, hrefButton = '', variant = 'primary', ...props }) => {
    const [variantButton, setVariantButton] = useState(
        {
            text_color: 'text-background_light',
            bg_color: 'bg-accent_light',
            outline: ''
        }
    )

    const choseColor = (variant: string) => {
        if (variant === 'secondary') {
            setVariantButton(
                {
                    bg_color: 'bg-background_light',
                    text_color: 'text-text_light',
                    outline: ''
                }
            )
        }
        if (variant === 'outline') {
            setVariantButton(
                {
                    bg_color: 'bg-white',
                    text_color: 'text-text_light',
                    outline: 'ring-2 ring-text_light/10'
                }
            )
        }
    }

    useEffect(() => {
        if (variant !== 'primary') {
            choseColor(variant)
        }
    }, [children, variant])

    return (
        <a href={hrefButton}>
            <button
                {...props}
                className={`
                    max-w-screen-md max-h-screen ${variantButton.bg_color} ${variantButton.text_color} ${variantButton.outline} rounded-md
                    dark:bg-primary_dark dark:text-background_light
                    flex
                    items-center
                    justify-center
                    container mx-auto
                    p-2
                    drop-shadow-md
                `}
            >
                <div
                    className='text-sm
                            lg:text-md
                        '
                >
                    {children}
                </div>
            </button>
        </a>
    )
}