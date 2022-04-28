import React from "react"
import { useRouter } from "next/router"
import dogService from "../../../service/dog"
import { useFormik } from "formik"
import * as yup from "yup"

export default function Home() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("O campo é obrigatório"),
      type: yup.string().required("O campo é obrigatório")
    }),
    onSubmit: async function(){
      if(formik.values.type === "vira-lata"){
        const result = await dogService.dogCreate()
        router.push(`/dog/${result.data.id}`)
      }else{
        formik.setErrors({type: "O campo só aceita vira-lata"})
      }
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Nome</label>
        <input value={formik.values.name} onChange={(e) => formik.setFieldValue("name", e.target.value)} />
        <br/>
        <span style={{color: "red"}}>{formik.errors.name}</span>
        <br/>
        <br/>
        <label>Raça</label>
        <input value={formik.values.type} onChange={(e) => formik.setFieldValue("type", e.target.value)} />
        <br/>
        <span  style={{color: "red"}}>{formik.errors.type}</span>
        <br/>
        <br/>
        <button type="submit" >Cadastrar Dog</button>
      </form>
       
    </div>
  )
}