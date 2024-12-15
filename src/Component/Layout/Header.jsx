import { NavLink } from "react-router-dom"

export const Header = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to='/trad'>Old Data</NavLink>
                </li>
                <li><NavLink to='/rq'>New Data</NavLink></li>
                <li><NavLink to='/infinite'>Infinite</NavLink></li>
            </ul>
        </nav>
    )
}