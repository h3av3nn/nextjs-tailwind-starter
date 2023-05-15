import Seo from '@/components/Seo';
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Seo templateTitle='Home' />

      <main>
        
      <div className='absolute hidden lg:block left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none'>
            <svg
                className='blur-3xl'
                width='1300'
                height='518'
                viewBox='0 0 1360 518'
                xmlns='http://www.w3.org/2000/svg'
              >
                <defs>
                  <linearGradient
                    x1='50%'
                    y1='0%'
                    x2='50%'
                    y2='100%'
                    id='illustration-02'
                  >
                    <stop stopColor='rgb(96 165 250)' offset='0%' />
                    <stop stopColor='rgb(244 63 94)' offset='77.402%' />
                    <stop stopColor='rgb(37 99 235)' offset='100%' />
                  </linearGradient>
                </defs>
                <g
                  transform='translate(0 -3)'
                  fill='url(#illustration-02)'
                  fillRule='evenodd'
                >
                <circle cx='1130' cy='0' r='120' />
                <circle cx='178' cy='481' r='80' />
                <circle cx='430' cy='0' r='140' />
                <circle cx='978' cy='481' r='110' />
                <circle cx='178' cy='481' r='80' />
              </g>
              </svg>
            </div>
        <section>
          <div className='flex flex-col items-center justify-center min-h-[95vh] text-white'>
            <div className='relative text-center'>
            <h1 className='text-5xl mb-4 font-bold'><span className='animate-gradient bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent'>Next.js</span> & <span className='animate-gradient bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 bg-clip-text text-transparent'>Tailwindcss</span> Starter Kit</h1>
            <p className='mb-8'>Get started quickly with this Tailwind CSS and Next.js Starter Kit for building modern and responsive web projects.</p>
            <Link target='__blank' className='btn rounded-lg animate-gradient bg-gradient-to-r from-rose-400 via-purple-400 to-sky-400 shadow-purple-300 shadow-lg hover:shadow-sm hover:from-rose-300 hover:via-purple-300 hover:to-sky-300 duration-200 px-8 py-4' href='https://github.com/h3av3nn'>h3av3nn Github</Link>
            </div>         
          </div>
          <footer className='flex flex-col justify-center items-center text-center'>
            <p className='text-lg'>Made by HeaveN</p>
          </footer>
        </section>
      </main>
    </>
  );
}