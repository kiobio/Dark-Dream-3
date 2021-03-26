
import Aneta from "../../../storage/img/Aneta2.png";
import Lukas from "../../../storage/img/Lukas.png";
import Dagmar from "../../../storage/img/Dagmar.png";
import LinkedIn from "../../../storage/img/LinkedIn.png";




function AboutUs(){


    return(
        <div className = "AboutUs">
            <h1>Dark Dream Team</h1>
            <div className="Team">
                <div>
                <h2>Aneta Fojtíková</h2>
                <img src={Aneta} alt= "Aneta"/>
                <a href="https://www.linkedin.com/in/anetafojtikova/"><img id="LinkedIn"src={LinkedIn} alt="LinkedIn"/></a>
                
                </div>
                <div>
                <h2>Lukáš Klatovský</h2>
                <img src={Lukas} alt="Lukas"/> 
                <a href="https://www.linkedin.com/in/lukas-klatovsky/"><img id="LinkedIn"src={LinkedIn} alt="LinkedIn"/></a>
                
                </div>
                <div>
                  <h2>Dagmar Svobodová</h2>
                  <img src={Dagmar} alt="Dagmar"/>
                  <a href="https://www.linkedin.com/in/dagmarsvobodovab476a21a9/"><img id="LinkedIn"src={LinkedIn} alt="LinkedIn"/></a>
                
                </div>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum totam est repellat iure odio, delectus culpa maiores quasi quam iste, cum dicta reprehenderit earum itaque, atque accusamus id! Dolores, fugit.    L
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias itaque vero sint, doloribus voluptatem recusandae iure sunt quae tempore enim harum explicabo ratione consequuntur inventore. Ad laboriosam voluptas beatae.
            </p>
            <p>We don't own any of these marketed items. By purchasing any of them you agree not to recieved any item and your payment will be considered donation to our private accounts. Thank you for your support</p>
        </div>
)
}

export default AboutUs;