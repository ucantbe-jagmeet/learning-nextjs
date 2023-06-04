'use client';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
     <button type="button" onClick={() => router.push('/about')} style={{padding: "10px 40px"}}>
      Dashboard
    </button>
      
    </main>
  )
}
