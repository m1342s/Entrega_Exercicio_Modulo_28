import { useState } from "react";
import styles from "./Formulario.module.css"

const Formulario = () => {
  const[valorAltura,setValorAltura]=useState('')
  const[valorPeso,setValorPeso]=useState('')

  const calculaIMC=()=>{
    const calculo=valorPeso/(valorAltura*valorAltura)
    return calculo.toFixed(2)
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
  }

     
  return (
    <>
    <div className={styles.container}>
      <form className={styles.formulario} onSubmit={handleSubmit}>
      <h1>Calculadora IMC</h1>
        <div className={styles.labelInput}>
          <label htmlFor="">Altura(m)</label>
          <input type="number" step={0.01} onChange={event=>setValorAltura(event.target.value)} />
        </div>
        <div className={styles.labelInput}>
          <label htmlFor="">Peso(kg)</label>
          <input type="number" step={0.1} onChange={event=>setValorPeso(event.target.value)} />
        </div>
        <p>O seu IMC é: {calculaIMC()}</p>
       
      </form>
      </div>
    </>
  );
};
export default Formulario;
