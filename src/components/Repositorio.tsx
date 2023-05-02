import * as Popover from "@radix-ui/react-popover";
import { TiChevronRight } from "react-icons/ti";
import { VscCopy } from 'react-icons/vsc'
interface repoProps {
    repoName: string
    created_at: string
    updated_at: string
    url: string
    cloneHttps: string
    cloneSsh: string
    toast: () => void
}
export default function Repositorio({ repoName, created_at, updated_at, url, cloneHttps, cloneSsh, toast }: repoProps) {

    function copyToClipboard(text: string) {

        navigator.clipboard.writeText(text)
            .then(() => {
                console.log(`Texto '${text}' copiado para a área de transferência.`);
            })
            .catch((err) => {
                console.error(`Erro ao copiar texto: ${err}`);
            });
    }

    return (
        <Popover.Root>
            <div className=" grid grid-flow-row grid-rows-1 bg-purple-gray max-w-md bg-opacity-50 rounded-xl border-light-purple border-2 h-24 px-4 py-4 backdrop-blur-md w-full">
                <div className="flex items-center justify-between">
                    <strong>{repoName}</strong>
                    <Popover.Trigger className="hover:cursor-pointer">
                        <TiChevronRight />
                    </Popover.Trigger>
                </div>
                <div className="flex justify-between">
                    <p>criado em: {created_at}</p>
                    <p>atualizado em: {updated_at}</p>
                </div>
            </div>
            <Popover.Portal>
                <Popover.Content className="flex flex-col bg-light-purple bg-opacity-30 rounded-xl border-2 border-light-purple backdrop-blur-md p-4 gap-2">
                    <div className="flex items-center w-full justify-between">
                        ir para repositório
                        <a href={url} className="hover:cursor-pointer">
                            <TiChevronRight size={20} />
                        </a>
                    </div>
                    <div className="flex items-center w-full justify-between">
                        clonar via https
                        <a onClick={() => { copyToClipboard(cloneHttps); toast() }} className="hover:cursor-pointer">
                            <VscCopy size={20} />
                        </a>
                    </div>
                    <div className="flex items-center w-full justify-between" >
                        clonar via ssh
                        <a onClick={() => { copyToClipboard(cloneSsh); toast() }} className="hover:cursor-pointer">
                            <VscCopy size={20} />
                        </a>
                    </div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}