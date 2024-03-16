import { Button } from "../components/formFields/Button"
import { Input } from "../components/formFields/Input";
import Logo from "../assets/logo.png"

export const Login = () => {


    return (
        <div
            className=""
        >
            <body className="bg-background_light max-h-screen
                px-8 p-32 container mx-auto
                lg:px-20 lg:max-w-[32rem]
                dark:bg-background_dark "
            >
                <div
                    className="gap-10 flex flex-col
                    "
                >
                    <div
                        className="flex flex-col gap-5"
                    >
                        <div
                            className="flex flex-col justify-center items-center gap-2"
                        >
                            <img 
                                className="w-16 h-16"
                                src={Logo}
                            />
                            <h1
                                className="text-3xl font-semibold"
                            >Fazer Login</h1>
                        </div>
                        <div
                            className="text-center"
                        >
                        </div>
                        <div>
                            <Button
                                variant="outline"
                            >
                                <i className="fab fa-google-plus-square"></i> Continuar com Google
                            </Button>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-3 border-t-2 border-background_dark/10"
                    >
                        <Input 
                            label="E-mail"
                            placeholder="Insira seu endereço de email"
                        />
                        <Input 
                            label="Senha"
                            placeholder="Sua senha...."
                        />
                        <p
                            className="text-xs text-text_light/50"
                        >
                            Use o e-mail que foi cadastrado
                        </p>
                        <Button
    
                        >
                            Continuar
                        </Button>
                    </div>
                </div>
            </body>
        </div>
    )
}