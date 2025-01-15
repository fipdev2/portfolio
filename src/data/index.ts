import sanstone from '@/assets/sanstone.png'
import agetransp from '@/assets/agetransp.png'
import faeterj from '@/assets/faeterj.png'

const projetos = [
    {
        id: 1,
        nome: "Projeto Agetransp",
        descricao: "Site desenvolvido para gestão de transportes e rodovias.",
        imagem: agetransp,
        link: "http://www.agetransp.rj.gov.br",
    },
    {
        id: 2,
        nome: "Projeto Sanstone",
        descricao: "Plataforma para soluções de saneamento sustentável.",
        imagem: sanstone,
        link: "https://projeto.sanstone.com",
    },
    {
        id: 3,
        nome: "Site FAETERJ",
        descricao:
            "Ferramenta para gestão de negócios de microempreendedoras.",
        imagem: faeterj,
        link: "https://faeterj-rio.vercel.app",
    },
];
const formacoes = [
    {
        nivel: "Tecnólogo",
        curso: "Análise e Desenvolvimento de Sistemas",
        instituicao: "FAETERJ-Rio",
    }
];

const experiencias = [
    {
        titulo: "Desenvolvedor Fullstack",
        empresa: "AGETRANSP",
        periodo: "Abril 2024 - Atual",
        descricao: ["Criação do website institucional com acesso a notícias e relatórios",
            "Desenvolvimento de uma plataforma interna para gerenciamento de publicações no website, administração de tarefas internas.",
        ],
    },
    {
        titulo: "Estagiário de TI",
        empresa: "Domino's Pizza Brazil",
        periodo: "Janeiro 2021 - Dezembro 2021",
        descricao: "Desenvolvimento de sistemas internos com PHP e MySQL para otimizar processos administrativos.",
    },
    {
        titulo: "Desenvolvedor Fullstack Voluntário",
        empresa: "EJCM",
        periodo: "Abril 2022 - Maio 2023",
        descricao: "Desenvolvimento de aplicativos e sites sob demanda, utilizando tecnologias modernas como Next.js e Node.js.",
    },
];

export {projetos, experiencias, formacoes};