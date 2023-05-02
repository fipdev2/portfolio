import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className='bg-[url("../assets/Fundo.svg")] w-screen h-screen bg-no-repeat bg-cover'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
