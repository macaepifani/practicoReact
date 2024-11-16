import { useForm } from "../../hooks/useForm";

export const ComponentForm = () => {
    const {values, handleChange, resetForm} = useForm({
        email:'',
        nombre:'',
        edad:0
    })
    const{email, nombre, edad} = values;

    const handleSubmitForm = () =>{
        console.log(values);
    }

    const handleResetForm = ()=>{
        resetForm();
    }
    return (
    <div>
        <div>
            <h2>Formulario</h2>
        </div>
        <div style={{display:"flex", flexDirection: "column", gap:"1rem"}}>
            <input type="email" name="email" value={email} onChange={handleChange} placeholder="example@email"/>
            <input type="text"  name="nombre" value={nombre} onChange={handleChange} placeholder="Nombre"/>
            <input type="number"name="edad" value={edad} onChange={handleChange} placeholder="Edad"/>
        </div>
        <div>
            <button onClick={handleSubmitForm}>Enviar</button>
            <button onClick={handleResetForm}>Resetear</button>
        </div>
    </div>
  );
}
