import { Button } from "../components/formFields/Button"
import { Input } from "../components/formFields/Input";
import Logo from "../assets/logo.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Axios } from "../utils/axios";
import { toast, ToastContainer } from 'react-toastify';
import { userStore } from "../store/UserStore";

export const LoginSignUp = () => {
    const location = useLocation();
    const userSet = userStore((state) => state.setUser);
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState(
        {
            user_text_name: '',
            user_email: '',
            user_password: ''
        }
    )
    const [loading, setLoading] = useState(false)

    const setFormValuesLogin = ({ field, value }: { field: string, value: any }) => {
        return setFormValues({ ...formValues, [`${field}`]: value })
    }

    const createUser = () => {
        setLoading(true)
        Axios.post('/api/auth/signup', { data: formValues })
            .then((response) => {
                toast.success(
                    response.data.message,
                    {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        theme: 'colored'
                    }
                )

                localStorage.setItem('token', response.data.response.token)
                userSet(response.data.response.user)

                setTimeout(() => {
                    navigate('/calendar')
                }, 2500)
            })
            .catch((err) => {
                toast.error(err.response.data.message, {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    theme: 'colored'
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const loginUser = () => {
        setLoading(true)
        Axios.post('/api/auth/authenticated', { data: formValues })
            .then((response) => {
                toast.success(
                    response.data.message,
                    {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        theme: 'colored'
                    }
                )

                localStorage.setItem('token', response.data.response.token)
                userSet(response.data.response.user)

                navigate('/calendar')
                setTimeout(() => {
                    setLoading(false)
                }, 2500)
            })
            .catch((err) => {
                toast.error(err.response.data.message, {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    theme: 'colored'
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div
            className=""
        >
            <ToastContainer />
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
                                    onBlur={(event) => setFormValuesLogin({ field: 'user_text_name', value: event.target.value })}
                                />
                                <Input
                                    label="E-mail"
                                    placeholder="Insira seu endereço de email"
                                    type="email"
                                    onBlur={(event) => setFormValuesLogin({ field: 'user_email', value: event.target.value })}
                                />
                                <Input
                                    label="Senha"
                                    placeholder="Sua senha...."
                                    type="password"
                                    onBlur={(event) => setFormValuesLogin({ field: 'user_password', value: event.target.value })}
                                />
                                <p
                                    className="text-xs text-text_light/50"
                                >
                                    Use o e-mail que foi cadastrado
                                </p>
                                <Button
                                    onClick={createUser}
                                    isLoading={loading}
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
                                    onBlur={(event) => setFormValuesLogin({ field: 'user_email', value: event.target.value })}
                                />
                                <Input
                                    label="Senha"
                                    placeholder="Sua senha...."
                                    type="password"
                                    onBlur={(event) => setFormValuesLogin({ field: 'user_password', value: event.target.value })}
                                />
                                <p
                                    className="text-xs text-text_light/50"
                                >
                                    Use o e-mail que foi cadastrado
                                </p>
                                <Button
                                    isLoading={loading}
                                    onClick={loginUser}
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