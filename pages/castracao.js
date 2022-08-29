import React, {useState} from "react"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Style.css'
import './css/Castracao.css'

function Castracao() {
  
    // const [ datetime, setDatetime ] = useState();

    // function handleChange(ev) {
    //     if (!ev.target['validity'].valid) return;
    //     const dt= ev.target['value'];
    //     setDatetime(dt)
    //   }
      
    const optionsData = [
        <option>30/08</option>,
        <option>01/09</option>,
        <option>02/09</option>
      ]
    const optionsHora = [
        <option>17:00</option>,
        <option>17:30</option>,
        <option>18:00</option>
      ]
   
    return (
        <div className="App">
            <Menu />

                <label className="formulario">
               
                    <div className="div-info">
                        <ul className="info">
                            Informações
                            <li><input type="text" placeholder="Nome"/></li>
                            <li><input type="number" placeholder="CPF" className="number"/></li>
                            <li><input type="tel" placeholder="Telefone"/></li>
                            <li><input type="text" placeholder="Quais vacinas seu animal ja tomou?"/></li>
                        </ul>
                    </div>
                    <div className="div-info">
                        <ul className="info">
                            Data:
                        <li><select className="opcoes"> 
                            {optionsData}
                            </select></li>
                            Horário:
                        <li><select className="opcoes"> 
                            <option>17:00</option>
                            <option>17:30</option>
                            <option>18:00</option>
                            </select></li>
              
                        </ul>
                    </div>
                </label>       
        </div>
    );

}

export default Castracao;