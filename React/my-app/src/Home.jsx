import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        <h1>I'm in Home page</h1>
        <Link to="/about">Move to about</Link>
        </>
    )
};