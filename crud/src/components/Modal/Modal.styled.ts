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
height: 95%;
border-radius: 20px;
display: flex;
flex-direction: column;
padding-top: 1%;
padding-left: 2%;
padding-right: 4%;
padding-bottom: 1%;
}
img{
    text-align: center;
    margin-bottom: 1%;
}
label{
    text-align: start;
    margin-bottom:2%;
    margin-top:4%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800; 
    color: var(--orange);
}

 input{
    margin-left: 4%;
    border: 1px solid grey;
    height: 85px;
    width: 100%;
 }

 select{
    margin-left: 4%;
    border: 1px solid grey;
    height: 85px;
    width: 100%;
    color: gray;
    border-radius: 20px;

 }
 button{
    border-radius: 20px;
    width: 200px;
    height: 40px;
    margin-top: 4%;
    margin-bottom: 2%;
    margin-left: 30%;
    background-color: var(--orange);
    border: none;
    font-size: 15px;
    font-weight: 700;
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 3%;
    align-items: center;
    padding-top: 3%;
    padding-bottom: 3%;
 }
`



