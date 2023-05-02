import { api } from "@/api/api";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { TiChevronRight } from 'react-icons/ti'
import Repositorio from "../components/Repositorio"
import dayjs from "dayjs";
import { Toaster, toast } from 'react-hot-toast'


interface repoProps {
    name: string
    created_at: Date
    updated_at: Date
    svn_url: string
    clone_url: string
    ssh_url: string
}

export default function Projetos() {
    const [repos, setRepos] = useState<repoProps[]>([])


    useEffect(() => {
        api.get('/users/fipdev2/repos').then(res => {
            setRepos(res.data)
        })
    }, [])

    console.log(repos)

    function notify() {
        toast.success('Link copiado para área de transferência', {
            style: {
                border: '2px solid #5F4772',
                width:'15%',
                padding: '16px',
                color: '#fff',
                background:'rgba(95, 71, 114, 0.3)',
                backdropFilter:'blur(4px)',
                borderRadius:12,
                textAlign:'center'
                
                
            },
            iconTheme: {
                primary: 'green',
                secondary: '#FFFAEE',
            },
        });
    }


    return (
        <>

            <main className='w-screen h-screen flex flex-col items-center justify-center'>

                <Toaster />
                <div className="max-w-screen-lg w-full flex flex-wrap gap-8 justify-between mb-4">
                    {repos.map((repo, index) => (
                        <Repositorio
                            key={`repo_${repo.name}`}
                            repoName={repo.name}
                            created_at={dayjs(repo.created_at).format('DD/MM/YYYY')}
                            updated_at={dayjs(repo.updated_at).format('DD/MM/YYYY')}
                            url={repo.svn_url}
                            cloneHttps={repo.clone_url}
                            cloneSsh={repo.ssh_url}
                            toast={() => notify()}
                        />
                    )

                    )}
                </div>

                <Footer />
            </main>
        </>
    )
}