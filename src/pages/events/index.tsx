import React, { useContext, useState } from 'react';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';
import { userContext } from '../../components/context/UserContext';

export default function Index() {


  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [selectValue, setSelectValue] = useState('');
 

  const { setUsername, setUserEmail, setUserRegion } = useContext(userContext);



  const onChangeHandlerNombre = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value);
  };

  const onChangeHandlerEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };



  const onSelectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

  
  // @ts-ignore
  const onSubmitHandler = (event) => {
    setUserEmail(nombre)
    setUsername(email)
    setUserRegion(selectValue)
    event.preventDefault();
  };

 
 

  return (
    <ApplicationWrapper title='Eventos'>
      <div>
  
        <h1 className='flex w-fill text-xl font-bold justify-center'> Registro de Prueba</h1>
        
        <br/>

        <div className='flex w-fill justify-center items-center'>
          <span> Ingrese su nombre &nbsp;</span>

          <input type='text' className='bg-white text-black border'
               onChange={onChangeHandlerNombre}
               value={nombre}
               onFocus={() => {
                 console.log('usuario activo la caja de texto');
               }}
               onBlur={() => {
                 setIsValid(nombre.length > 0);
                 console.log('usuario desactivo la caja de texto');
               }}/>

          </div>
            <br/>

          <div className='flex w-fill justify-center items-center'>
          <span> Ingrese su E-mail  &nbsp;</span>
          <input type='text' className='bg-white text-black border'
               onChange={onChangeHandlerEmail}
               value={email}
               onFocus={() => {
                 console.log('usuario activo la caja de texto');
               }}
               onBlur={() => {
                 setIsValid(email.length > 0);
                 console.log('usuario desactivo la caja de texto');
               }}/>
   
          </div>
          <br/>
<div className="flex w-fill justify-center items-center">
<select className='bg-white text-black' onChange={onSelectChangeHandler} value={selectValue}>
          <option value=''>select a region</option>
          <option value='Demacia'>Demacia</option>
          <option value='Noxus'>Noxus</option>
          <option value='IONIA'>IONIA</option>
          <option value='SHURIMA'>SHURIMA</option>
        </select>


</div>
<br/>
<div className="flex w-fill justify-center items-center">
  <form onSubmit={onSubmitHandler}>
          <button type='submit' className='border-2 border-white text-3xl'>Enviar</button>
        </form>
</div>

</div>
    
    </ApplicationWrapper>);
}
