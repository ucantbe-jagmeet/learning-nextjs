import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>CodesWear Developers</title>
        <meta name="description" content="CodesWear.com - wear" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='mx-10'>Hey This is Tailwind </div>
      <div className='mx-10 bg-red-300'>Hey This is Tailwind </div>
    </div>
  )
}
