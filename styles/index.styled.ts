import styled  from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  
  .slick-slide {
    border: none !important;
  }
`;

export const MainHeadingContainer = styled.div`
  width: 100vw;
  padding: 30vh 0;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
`;

export const ToolContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 4rem;
  gap: 2rem;
`;

export const Right = styled.div`
  width: 50vw;
  height: 100vh;
  padding: 15vh 7vw;
  background: ${props => props.theme.white};
`;
