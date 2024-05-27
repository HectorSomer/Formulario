import SectionCard from "../organism/SectionCard";
import SectionRegister from "../organism/SectionRegister";
import "./Home.css"
function Home (){
    return(
        <>
        <div id="register-home">
        <SectionRegister></SectionRegister>   
        <SectionCard></SectionCard>
        </div></>
        
    )
}
export default Home;