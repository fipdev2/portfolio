interface CardItem {
    exp?: Experience;
    edu?: Education;
    bg: string;
}
interface Experience {
    titulo: string;
    empresa: string;
    periodo: string;
    descricao: string;
}
interface Education {
    nivel: string;
    curso: string;
    instituicao: string;
}

function ExperienceCard({ bg, exp }: CardItem) {

    return (
        <>
            <li className={`flex flex-1 bg-${bg}`}>
                <div className="p-6 shadow-md flex flex-col items-start">
                    <h3 className="flex items-center text-green-400 font-semibold uppercase text-sm">
                        <span className="w-2 h-6 bg-green-400 mr-2"></span>
                        {exp?.titulo}
                    </h3>
                    <h4 className="text-xl font-bold my-2">{exp?.empresa}</h4>
                    <p className="text-gray-400 text-sm mb-4 ${university}">{exp?.periodo}</p>
                    <p className="text-white">{exp?.descricao}</p>
                </div>
            </li>


        </>
    );
}

function EducationCard({ bg, edu }: CardItem) {
    return (
        <li className={`flex flex-1 bg-${bg}`}>
            <div
                className="p-6 shadow-md flex flex-col items-start"
            >
                <h3 className="flex items-center text-green-400 font-semibold uppercase text-sm">
                    <span className="w-2 h-6 bg-green-400 mr-2"></span>
                    {edu?.nivel}
                </h3>

                <h4 className="text-xl font-bold my-2">{edu?.curso}</h4>
                <p className="text-gray-400">{edu?.instituicao}</p>
            </div>
        </li>
    )
}

export { ExperienceCard, EducationCard };
