import { useState } from "react"
import { Box } from "../../formFields/Box"

export const SectionSkins = () => {
    const textToImages = [
        {
            id: 'tailwind',
            text: `
                Tailwind CSS é uma estrutura de design que simplifica o desenvolvimento web, fornecendo classes CSS de 
                baixo nível para criar estilos personalizados rapidamente. Com ênfase na flexibilidade e na escalabilidade, ele
                 mantém o HTML limpo e semântico, permitindo layouts e estilos consistentes sem a necessidade de CSS personalizado extensivo.
                  É uma escolha popular para equipes ágeis e projetos de todos os tamanhos.`
        },
        {
            id: 'react',
            text: `
            React é uma biblioteca JavaScript de código aberto utilizada para construir interfaces de usuário interativas e reativas em páginas 
            da web, facilitando a criação de componentes reutilizáveis e mantendo o estado da aplicação de forma eficiente.
            `
        },
        {
            id: 'css',
            text: `
                CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a apresentação e o layout de elementos HTML em páginas da web, 
                permitindo a personalização visual, incluindo cores, fontes, espaçamento e posicionamento, para criar uma experiência de usuário atraente e 
                consistente.
            `
        },
        {
            id: 'figma',
            text: `  
                Figma é uma poderosa ferramenta de design de interface do usuário (UI) baseada na web, que permite aos usuários criar, colaborar e prototipar 
                designs de forma eficiente. Com recursos de design vetorial, prototipagem interativa e colaboração em tempo real, o Figma é amplamente utilizado 
                por equipes de design para criar interfaces digitais visualmente impressionantes e funcionais.
            `
        },
        {
            id: 'html',
            text: `
                HTML (HyperText Markup Language) é a linguagem padrão para a criação e estruturação de conteúdo em páginas da web. Utilizando tags e elementos
                semânticos, o HTML permite definir a estrutura e o significado do conteúdo, como títulos, parágrafos, imagens e links, fornecendo a base para a 
                construção de websites acessíveis e bem organizados.
            `
        },
        {
            id: 'javascript',
            text: `
                JavaScript é uma linguagem de programação amplamente usada na web para adicionar interatividade às páginas. Com suporte em navegadores, ela permite 
                manipular elementos HTML, responder a eventos do usuário e criar animações, sendo essencial para o desenvolvimento web moderno.
            `
        },
        {
            id: 'sass',
            text: `
            Sass é uma extensão do CSS que simplifica e organiza o processo de estilização em páginas da web, oferecendo recursos como variáveis, aninhamento de seletores, 
            mixins e funções para criar estilos mais eficientes e modulares.`
        },
        {
            id: 'next',
            text: `Next.js é um framework React para desenvolvimento web que combina renderização do lado do servidor (SSR) e do lado do cliente (CSR), simplificando o 
            desenvolvimento de aplicativos web rápidos e escaláveis.`
        },
        {
            id: 'postgres',
            text: `O PostgreSQL é um banco de dados relacional de código aberto, altamente confiável e robusto, com suporte para consultas complexas, transações ACID e 
            extensibilidade. Amplamente utilizado em aplicativos web e empresariais, oferece recursos avançados para armazenamento e análise eficiente de dados.`
        },
        {
            id: 'typescript',
            text: `TypeScript é uma extensão do JavaScript que adiciona tipos estáticos opcionais, proporcionando detecção de erros em tempo de compilação e facilitando o
            desenvolvimento de aplicativos web robustos e escaláveis.`
        },
        {
            id: 'express',
            text: `
            Express.js é um framework minimalista para Node.js, utilizado para criar aplicativos web e APIs de forma eficiente. Com uma sintaxe simples e uma ampla variedade
             de recursos disponíveis, simplifica o desenvolvimento web, permitindo que os desenvolvedores se concentrem na criação de funcionalidades.`
        },
        {
            id: 'node',
            text: `
            Node.js é um ambiente de execução JavaScript de código aberto e orientado a eventos, projetado para construir aplicativos de rede escaláveis. Com seu modelo de E/S 
            não bloqueante e eficiente, é amplamente utilizado para desenvolver servidores web, APIs e aplicativos de linha de comando, oferecendo alta performance e facilidade 
            de desenvolvimento.`
        }
    ]
    const [text, setText] = useState('');

    const onMouseEnter = (event: any) => {
        if(window.innerWidth >= 1024) {
            for (const item of textToImages) {
                if (item.id === event.target?.firstChild.id) {
                    setText(item.text)
                }
            }
        }
    }

    return (
        <section
            id='skins'
            className='min-h-screen flex items-center text-center justify-center
            container mx-auto border-b-2 border-background_dark/10 py-10
            dark:border-text_dark/20
        '
        >
            <div
                id="skills"
                className="flex flex-col gap-6 min-h-96 bg-secundary_light p-10 rounded-lg drop-shadow-lg items-center
                    lg:grid grid-cols-2 md:justify-center
                    dark:bg-secundary_dark dark:text-text_dark dark:shadow-primary_dark dark:shadow-2xl
                "
            >
                <div
                    className="flex flex-col gap-3 items-start h-full
                    "
                >
                    <h2
                        className='text-4xl font-bold
                    dark:text-text_dark
                '
                    >
                        Conhecimentos.
                    </h2>
                    <span className="text-background_dark/70 dark:text-text_dark">*passe o cursor do mouse no card para ler*</span>
                    <p
                        className="text-start text-background_dark/60
                            dark:text-text_dark
                        "
                    >
                        {text}
                    </p>
                </div>
                <div
                    className='grid grid-cols-3 w-full flex-wrap gap-6 justify-center
                        lg:flex flex-row lg:gap-10
                    '
                >
                    <Box
                        onMouseEnter={(event: any) => onMouseEnter(event)}
                        onMouseLeave={() => setText('')}
                    >
                        <i id="react" className="fab fa-react fa-2x"></i>
                    </Box>
                    <Box
                        onMouseEnter={(event: any) => onMouseEnter(event)}
                        onMouseLeave={() => setText('')}
                    >
                        <i id="css" className="fab fa-css3-alt fa-2x"></i>
                    </Box>
                    <Box
                        onMouseEnter={(event: any) => onMouseEnter(event)}
                        onMouseLeave={() => setText('')}
                    >
                        <i  id="html" className="fab fa-html5 fa-2x"></i>
                    </Box>
                    <Box
                        onMouseEnter={(event: any) => onMouseEnter(event)}
                        onMouseLeave={() => setText('')}
                    >
                        <i id="javascript" className="fab fa-js-square fa-2x"></i>
                    </Box>
                    <Box
                        onMouseEnter={(event: any) => onMouseEnter(event)}
                        onMouseLeave={() => setText('')}
                    >
                        <i id="sass" className="fab fa-sass fa-2x"></i>
                    </Box>
                    <Box
                        onMouseEnter={(event: any) => onMouseEnter(event)}
                        onMouseLeave={() => setText('')}
                    >
                        <i id="figma" className="fab fa-figma fa-2x"></i>
                    </Box>
                    <Box
                        onMouseEnter={(event: any) => onMouseEnter(event)}
                        onMouseLeave={() => setText('')}
                    >
                        <img
                            id="next"
                            alt='icone do Next.js'
                            className='w-14 text-white'
                            src='/icons/nextjs.png'
                        />
                    </Box>
                    <Box
                        onMouseEnter={(event: any) => onMouseEnter(event)}
                        onMouseLeave={() => setText('')}
                    >
                        <img
                            id="tailwind"
                            alt='icone do tailwind'
                            className='w-14 '
                            src='/icons/tailwind.png'
                        />
                    </Box>
                    <Box
                        onMouseEnter={(event: any) => onMouseEnter(event)}
                        onMouseLeave={() => setText('')}
                    >
                        <img
                            id="postgres"
                            alt='Icone do Postgres'
                            className='w-14 '
                            src='/icons/postgres.png'
                        />
                    </Box>
                    <Box
                        onMouseEnter={(event: any) => onMouseEnter(event)}
                        onMouseLeave={() => setText('')}
                    >
                        <img
                            id="typescript"
                            alt='Icone do typescript'
                            className='w-14 '
                            src='/icons/typescript.png'
                        />
                    </Box>
                    <Box
                        onMouseEnter={(event: any) => onMouseEnter(event)}
                        onMouseLeave={() => setText('')}
                    >
                        <img
                            id="node"
                            alt='Icone do typescript'
                            className='w-14 '
                            src='/icons/node.png'
                        />
                    </Box>
                    <Box
                        onMouseEnter={(event: any) => onMouseEnter(event)}
                        onMouseLeave={() => setText('')}
                    >
                        <img
                            id="express"
                            alt='Icone do typescript'
                            className='w-14 '
                            src='/icons/express.png'
                        />
                    </Box>
                </div>
            </div>
        </section>
    )
}