import React, {useState, useEffect} from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

async function dogApiService({page = 0, limit = 15}) {
  const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=${limit}&page=${page}`)
  const pokemon = await response.json()

  return pokemon;
}

export default function Home({list}) {
  const [page, setPage] = useState(0)
  const [listDogs, setListDogs] = useState(list)

  async function handleLoading() {
    if(listDogs.length === 15){
      const newPage = page + 1;
      setPage(newPage)
      const result = await dogApiService({page: newPage})
      setListDogs(result)
    }
    
  }



  return (
    <div className={styles.container}>
      {listDogs.map((dog, index) => {
        return <div key={index}>
        <h2>{dog.name}</h2>
        {/* <Image src={dog.image.url} width="200px" height="200px" /> */}
        </div>
      })}
     {listDogs.length === 15 && <button onClick={handleLoading}>Carregar</button>}
    </div>
  )
}


export async function getServerSideProps () {

  return {
    props: {
      list: await dogApiService({})
    }
  }
}