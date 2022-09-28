import {Container, Navbar, Image,  Links, Botao3, Botao2, Botao1, Botao4 } from "./style.jsx"
import logo from "./Assets/logo.png"
import { MdAccountCircle } from "react-icons/md";

export function Page (){
    return(
      <Container>
        <Navbar>
          <Image src={logo}>
                </Image>
            
            <Links>
                <Botao1>
                    Home
                </Botao1>

                <Botao2>
                    Sobre
                </Botao2>

                <Botao3>
                    Artigo
                </Botao3>
                <Botao4>
                    <MdAccountCircle>
                    
                  </MdAccountCircle>
                </Botao4>

            </Links>
        </Navbar>
      </Container>
    )
}
