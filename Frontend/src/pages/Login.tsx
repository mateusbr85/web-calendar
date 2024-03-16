import { Button } from "../components/formFields/Button"
import { Input } from "../components/formFields/Input";
import Logo from "../assets/logo.png"
import { Link, useLocation } from "react-router-dom";

export const LoginSignUp = () => {
    const location = useLocation();

    return (
        <div
            className=""
        >
            <body className="bg-background_light max-h-screen
                px-8 p-32  flex flex-col justify-center
                lg:px-20 lg:min-h-screen
                dark:bg-background_dark "
            >
                <div
                    className="gap-10 flex flex-col container mx-auto 
                        lg:max-w-[25rem] lg:border-2 lg:border-background_dark/20 lg:rounded-md lg:py-20 lg:px-10 
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
                            >Criar Conta</h1>
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
                        className="flex flex-col gap-3 border-t-2 pt-10 border-background_dark/10"
                    >
                        {location.pathname.includes('signup') ? (
                            <>
                                <Input
                                    label="Nome Completo"
                                    placeholder="Insira seu nome"
                                />
                                <Input
                                    label="E-mail"
                                    placeholder="Insira seu endereço de email"
                                />
                                <Input
                                    label="Senha"
                                    placeholder="Sua senha...."
                                    type="password"
                                />
                                <p
                                    className="text-xs text-text_light/50"
                                >
                                    Use o e-mail que foi cadastrado
                                </p>
                                <Button

                                >
                                    Criar Conta
                                </Button>

                                <span>
                                    Já tem uma conta? <Link className="text-accent_dark" to='/login'>Acessar</Link>
                                </span>
                            </>

                        ) : (
                            <>
                                <Input
                                    label="E-mail"
                                    placeholder="Insira seu endereço de email"
                                />
                                <Input
                                    label="Senha"
                                    placeholder="Sua senha...."
                                    type="password"
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
                            </>

                        )}
                    </div>
                </div>
            </body>
        </div>
    )
}