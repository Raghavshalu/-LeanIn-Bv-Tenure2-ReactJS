import react from 'react';
import Form from './Form';
function Desserts(props){
    return(
        <div className="desserts">
            <div className="yummy">
            <div className={props.number} key={props.id}>
            </div> 
                <h3>{props.name}</h3>
                <p>{props.info}</p>
                <button onClick={()=>props.handleDel(props.id)}>Delete</button>
            </div>
        </div>
    )
}
export default Desserts;