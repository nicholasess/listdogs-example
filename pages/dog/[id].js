import React, {useState, useEffect} from "react"
import { useRouter } from "next/router"

async function dogApiService({id}) {
    const response = await fetch(`http://localhost:3000/api/dog/${id}`)
    const dog = await response.json()
  
    return dog;
}

export default function Home(props) {
    const router = useRouter()
    const [dogProfile, setDogProfile] = useState()
    const [loading, setLoading] = useState(true)

    const handleLoadingDog = async () => {
        const dog = await dogApiService({id: props.query.id})

        setDogProfile(dog.result)
        setLoading(false)
    }

    useEffect(() => {
        handleLoadingDog()
    }, [])

    if(loading) return <div>Loading...</div>

  return (
    <div>
      <h1>Nome: {repo.name} </h1>
     
    </div>
  )
}

export const getServerSideProps = (context) => {
  return {
      props: {
          query: context.query
      }
  }
}