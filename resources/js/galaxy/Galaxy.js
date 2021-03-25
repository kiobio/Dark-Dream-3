




function Galaxy(props){
    return(
       
            <div className="Galaxy">
               <a href="">
                    <h2>{props.galaxy.name}</h2>
                    <img src={props.galaxy.image} alt= {props.galaxy.name}/>
                    <p>{props.galaxy.info}</p>
               </a>
            </div> 
       
    )
}
export default Galaxy;