import { AiOutlineClockCircle} from "react-icons/ai";
const  Timing= () => {
    let date="Aug 30,2020";
    return ( 
        <div className='name'>
            <p><AiOutlineClockCircle size="17"/> Joined on {date}</p>
        </div>
     );
}
 
export default Timing;