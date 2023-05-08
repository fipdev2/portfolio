import { api } from '@/api/api'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'
import { ToastContainer } from 'react-toastify'

export default function Home() {
  const [avatar, setAvatar] = useState<string>('')
  const [repos, setRepos] = useState<string>('')
  const [repoArray, setRepoArray] = useState<any[]>([])
  const [commits, setCommits] = useState<number[]>([])
  const [numberOfCommits, setNumberOfCommits] = useState<number>(0)

  const repoName = repoArray.map(repo => repo.name)

  useEffect(() => {
    api.get('/users/fipdev2').then(res => {
      setAvatar(res.data.avatar_url)
      setRepos(res.data.public_repos)

    })
    api.get('/users/fipdev2/repos').then(res => {
      setRepoArray(res.data)
    }
    )

  }, [])


  return (
    <>

      <main className='w-screen h-screen flex flex-col items-center justify-center xl:p-4'>
        <div className='flex justify-between md:flex-col md:items-center bg-purple-gray max-w-[1024px] bg-opacity-50 rounded-3xl border-light-purple border-2 px-16 py-16 xl:p-8 backdrop-blur-md 2xl:max-w-[calc(100%-70px)]'>
          <div className='flex flex-col'>
            <img src={avatar} alt={'Foto de fipdev2'} className='rounded-full border-light-purple border-2 w-80 xl:w-72 mb-2' />
            <p className='md:text-center'><strong>Username: </strong> fipdev2</p>
            <p className='md:text-center'><strong>Repositórios: </strong> {repos}</p>
          </div>

          <div className='w-1/2 flex flex-col justify-between md:w-full'>
            <div className='md:text-center'>
              <strong >Sobre</strong>
              <p className='mb-8'>Meu nome é Filipe, sou graduando
                em ciência da computação,
                tenho experiência em liderança
                de projetos e desenvolvimento fullstack
              </p>
            </div>

            <div className='md:text-center'>
              <strong>Fatos Curiosos</strong>
              <p className='mb-8'>Adoro assistir anime, jogar e ir para academia 💪</p>
            </div>

            <div className='md:text-center '>
              <strong>Principais tecnologias</strong>
              <div className='flex gap-2 mt-2 md:justify-center md:flex-wrap'>
                <img alt="JavaScript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                <img alt="TypeScript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
                <img alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" />
                <img alt="MySql" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" />
                <img alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                <img alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                <img alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
              </div>
            </div>
          </div>

        </div>

        <Footer />

      </main>
    </>
  )
}
