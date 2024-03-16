import PerfilImage from '../../../assets/image-perfil.jpg'
import { Button } from '../../formFields/Button'

export const SectionHome = () => {

    return (
        <section
            id='home'
            className='min-h-screen flex items-center text-center
                    container mx-auto gap-12
                    '
        >
            <div className='flex h-90 w-110 '>
                <img
                    className='rounded-full shadow-2xl shadow-primary_light object-cover'
                    src={PerfilImage}
                />
            </div>
            <div className='flex flex-col h-80 text-start gap-5
                        dark:text-background_light
                    '>
                <p
                    className='text-5xl font-bold w-full'
                >
                    Auxiliando empresas na construção <span className='text-accent_light'>de produtos digitais</span>  modernos e de alta qualidade.
                </p>
                <p>
                    Combinando habilidades em Design, Desenvolvimento Frontend/Backend e expertise profissional para destacar seu produto no mercado.
                </p>
                <div
                    className='flex flex-wrap flex-row gap-3'
                >
                    <Button
                        colorButton='primary'
                    >
                        Aprenda Node Comigo
                    </Button>
                    <Button
                        colorButton='secundary'
                    >
                        Tire sua ideia do Papel
                    </Button>
                    <Button
                        colorButton='secundary'
                    >
                        Quem sou Eu
                    </Button>
                </div>
            </div>
        </section>
    )
}