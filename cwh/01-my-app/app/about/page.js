'use client';
import { useRouter } from 'next/navigation';


const About = () => {
  const router = useRouter()
  return (
    <main >
      Hello About How are You
    <div>  <button type="button" onClick={()=> router.push("/about/aboutmain")}> Go to about main</button>
      </div>
    </main>
  )
}

export default About
