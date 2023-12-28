import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const perks = [
  {
    name: "Entrega instantânea",
    icon: ArrowDownToLine,
    description: "Receba seus ativos em seu e-mail em segundos e baixe-os imediatamente.",
  },
  {
    name: "Qualidade garantida",
    icon: CheckCircle,
    description: "Cada ativo em nossa plataforma é verificado por nossa equipe para garantir nossos mais altos padrões de qualidade. Não está feliz? oferecemos uma garantia de reembolso de 30 dias!",
  },
  {
    name: "Para o Planeta",
    icon: Leaf ,
    description: "Comprometemos 1% da venda para a preservação e restauração do meio ambiente natural",
  }
]

export default function Home() {
  return (<>
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl' >
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl' >
          Seu mercado para ativos digitais de  {' '}
          <span className='text-rose-600' >alta qualidade</span>.
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground' > Bem vindo(a) ao digital ocean. Cada ativo em nossa plataforma é verificado por nossa equipe para garantir nossos mais altos padrões de qualidade.</p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6' >
          <Link href='/products' className={buttonVariants()}>Navegar pelas tendências</Link>
          <Button variant='ghost'>Nossa promessa de qualidade </Button>
        </div>
      </div>
    </MaxWidthWrapper>
    <section className='border-r border-gray-200 bg-gray-50' >
      <MaxWidthWrapper className='py-20' >
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0' >
          {perks.map((perk) => (
            <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
              <div className='md:flex-shrink-8 flex justify-center' >
                <div className='h-16 w-16 flex items-center justify-center rounded-full bg-red-100 text-red-900' ></div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  </>
  )
}
