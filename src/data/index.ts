import sanstone from '@/assets/sanstone.png'
import agetransp from '@/assets/agetransp.png'
import faeterj from '@/assets/faeterj.png'

const projetos = [
    {
        id: 1,
        nome: "Website AGETRANSP",
        descricao: "Site desenvolvido para divulgação de informações sobre concessionárias e processos regulatórios",
        imagem: agetransp,
        link: "http://www.agetransp.rj.gov.br",
    },
    {
        id: 2,
        nome: "Sanstone",
        descricao: "Marmoraria digital",
        imagem: sanstone,
        link: "https://projeto.sanstone.com.br",
    },
    {
        id: 3,
        nome: "Site FAETERJ",
        descricao: "Site desenvolvido como trabalho na disciplina Construção de Aplicações Web",
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
        descricao: ["Criação do website institucional com acesso a notícias e relatórios.",
            "Desenvolvimento de uma plataforma interna para gerenciamento de publicações no website, administração de tarefas internas.",
        ],
    },
    {
        titulo: "Estagiário de TI",
        empresa: "Domino's Pizza Brazil",
        periodo: "Janeiro 2021 - Dezembro 2021",
        descricao: ["Manutenção de APIs SOAP e desenvolvimento de APIs REST para integração com aplicações internas e empresas colaboradoras.",
            "Manutenção de lojas no iFood."
        ]
    },
    {
        titulo: "Desenvolvedor Fullstack Voluntário",
        empresa: "EJCM",
        periodo: "Abril 2022 - Maio 2023",
        descricao: [
            "Desenvolvimento de aplicativos e sites sob demanda, utilizando tecnologias modernas como React e Node.js.",
            "Lecionamento de aulas de programação utilizando a stack da empresa para capacitar novos membros."
        ]
    },
];

export { projetos, experiencias, formacoes };