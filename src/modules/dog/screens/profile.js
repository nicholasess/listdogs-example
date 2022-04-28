import React, {useState, useEffect} from "react"
import dogService from "../../../service/dog"


export default function Home(props) {
    const [dogProfile, setDogProfile] = useState()
    const [loading, setLoading] = useState(true)

    const handleLoadingDog = async () => {
        const dog = await dogService.dogProfile({id: props.query.id})

        setDogProfile(dog.data.result)
        setLoading(false)
    }

    useEffect(() => {
        handleLoadingDog()
    }, [])

    if(loading) return <div>Loading...</div>

  return (
    <div>
      <h1>Nome: {dogProfile.name} </h1>
     
    </div>
  )
}
