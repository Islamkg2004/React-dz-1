import './header.css'
import '../Button/button.css'
import Button from "../Button/Button";
const  Header = ( { list }) => {
    return(
        <div>
            <span>Edumena</span>
            <ul>
                {list.map((el,id) => <li key={id}>
                    <a>{el}</a>
                </li>)}
            </ul>
            <Button text={"Register now"}/>

        </div>
    )

}





export  default    Header;