import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../src/components/Carousel'
import Navbar from '../src/components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
    </div>
  )
}
