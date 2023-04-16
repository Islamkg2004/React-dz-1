import './footer.css'

const  Footer = ({listTwo, list}) =>{
    return(
        <div>
            <span>Edumena</span>
            <ul className='footer__ul'>
                {listTwo.map((el,id) => <li key={id}>
                    <p>{el}</p>
                </li>)}
            </ul>
            <ul className='second__ul'>
                {list.map((el,id) => <li key={id}>
                    <a href="">{el}</a>
                </li>)}
            </ul>
        </div>
    )
}




export  default  Footer;