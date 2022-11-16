import styled from "styled-components";



export const Wrapper = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 10;
background-color: rgba(0,0,0,0.8);
display: flex;
justify-content: center;
align-items: center;

div{
background-color: var(--white);
width: 35%;
height: 90%;
border-radius: 20px;
display: flex;
flex-direction: column;
padding-top: 1%;
padding-left: 2%;
padding-right: 2%;
}

label{
   margin-left: -5%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800; 
    color: var(--orange);
}

img{
    text-align: center;
    margin-bottom: 3%;
}

 input{
    border: 1px solid grey;
    height: 10%;
    width: 100%;
   margin-bottom: 1%;
 }

 select{
    border: 1px solid grey;
    width: 100%;
    height: 10%;
    margin-bottom: 4%;
    color: gray;
    border-radius: 20px;

 }
 button{
    border-radius: 20px;
    width: 200px;
    height: 40px;
    background-color: var(--orange);
    border: none;
    font-size: 15px;
    font-weight: 700;
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 3%;
    padding-top: 3%;
    padding-bottom: 3%;
 }
`



