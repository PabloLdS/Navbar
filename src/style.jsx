import styled from 'styled-components'

export const Container = styled.div`
    
    
    display: flex;
    flex-direction: column;
    max-height: 100%;
    min-height: 100%;
    background-color: grey;

    @media (min-widht: 600px) {
        #root{
            display: flex;
        }
        
    }

`;

export const Navbar = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    background-color: white;
 
`;



export const Image = styled.img`
    width: 15%;
    height: 15%;

`;

export const Title = styled.h2`
    font-size: 2rem;

`;

export const Links = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;


`;


export const Botao1 = styled.button`

margin-right:15px;   
padding:5px;
background-color:white;
color: black;   
border:none;
cursor: pointer;

`;
export const Botao2 = styled.button`
margin-right:15px;   
padding:5px;
background-color:white;
color: black;   
border:none;
cursor: pointer;

`;
export const Botao3 = styled.button`
margin-right:15px;   
padding:5px;
background-color:white;
color: black;   
border-radius:10px;
cursor: pointer;
`;

export const Botao4 = styled.button`

margin-right:15px;   
padding:5px;
background-color:white;
color: black;   
border:none;
cursor: pointer;


`; 
