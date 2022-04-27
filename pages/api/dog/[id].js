// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dogs = [{name: "Cachorro 1", id: "1"}, {name: "Cachorro 2", id: "2"}]

const getDogProfile = (id) => {
  const dog = dogs.filter(cachorro => cachorro.id === id)

  if(dog.length > 0)  return {
      result: dog[0],
      error: false
  }

    return {
        result: null,
        error: true
    }
}

export default function handler(req, res) {
    const dog = getDogProfile(req.query.id)

    if(!dog.error){
        res.status(200).json(dog)
    }else{
        res.status(500).json(dog)
    }
  
}
