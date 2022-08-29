import React, {useState} from "react"
import Menu from '../components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Style.css'

function Castracao() {
  
    const [ datetime, setDatetime ] = useState();

    function handleChange(ev) {
        if (!ev.target['validity'].valid) return;
        const dt= ev.target['value'];
        setDatetime(dt)
      }
      
    return (
        <div>
            <Menu />
             {/* <div>
                 <input type="number" min="1" max="5"></input>
             <input type="datetime-local"
            value={(datetime || '').toString().substring(0, 16)}
            onChange={handleChange} />
             {datetime}</div> */}
            <div className="caixa">
                <label>
                    <input type="text"/><br/>
                    <input type="number" className="number"/><br/>
                    <input type="tel"/><br/>
                    
                    <select>
                    <option value="vacina">Seu pet já se vacinou?</option>
                        <option value="Sim">Sim</option>
                        <option value="Nao ">Não</option>
                    </select><br/>

                    <input type="number"className="number"/><br/>
                    <input type="number"className="number"/>

                </label>    
            </div> 

             
        </div>
    );






}


export default Castracao;