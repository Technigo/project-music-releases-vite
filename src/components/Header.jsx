import styled from "styled-components";

const HeaderContainer = styled.div`
/* Header */
  display: flex;
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 20px;
  justify-content: center;
  margin-bottom: 2em;
  margin-top: 2em;
  background-color: black;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <h1 className="header">
                New Albums & Singles
            </h1>
            <p className="header">
                Stay Tuned
            </p>
        </HeaderContainer>
    )
}