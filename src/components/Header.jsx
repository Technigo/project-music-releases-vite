import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('/hero-img.jpg'); 
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  justify-content: center;
  text-align: center;
  background-size: cover; /* Adjust the background size */
  background-position: center center; /* Center the background */
  height: 60vh;
  margin-top: 30px;
`;


export const Header = () => {
    return (
        <HeaderContainer>
            <h1 className="header">
                Music Releases
            </h1>
            <p className="header">
                By Maria Pettersson
            </p>
        </HeaderContainer>
    )
}