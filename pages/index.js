import React, {useState, useEffect} from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router"
import styles from '../styles/Home.module.css'

async function dogApiService({page = 0, limit = 15}) {

  const response = await fetch(`http://localhost:3000/api/dog`)
  const dog = await response.json()

  return dog;
}

export default function Home() {
  const [page, setPage] = useState(0)
  const [listDogs, setListDogs] = useState([])
  const router = useRouter();

  async function handleCreateDog(param) {
    const result = await dogApiService({page: page})
    router.push(`/dog/${result.id}`)
  }

  return (
    <div className={styles.container}>
    
    <button onClick={handleCreateDog}>Cadastrar Dog</button>
   

    </div>
  )
}