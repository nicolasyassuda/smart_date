import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import image from '../../public/imgs/imageIndex'
import PaginaInicio from '@/components/PaginaInicio'
import { useState } from 'react'
import PaginaRotinas from '@/components/PaginaRotinas'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [pagina,SetPagina] = useState(1);
  function definirPagina(numero:number){
    SetPagina(numero)
  }
  return (
    <div className="w-full bg-white">
      <Header definirPagina={definirPagina}></Header>
      {pagina==1&&<PaginaInicio></PaginaInicio>}
      {pagina==2&&<PaginaRotinas></PaginaRotinas>}
    </div>
  )
}
