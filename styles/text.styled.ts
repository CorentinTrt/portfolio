import styled from 'styled-components';

export const MainHeading = styled.h1`
  margin: auto;
  color: ${props => props.theme.white};
  font-family: 'Montserrat', serif;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 30px;
  line-height: 120px;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 1440px) {
    font-size: 4rem;
  }
`;

export const SubHeading = styled.h2`
  margin-bottom: 2rem;
  color: ${props => props.theme.white};
  font-family: 'Montserrat', serif;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 2rem;
  line-height: 5rem;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
  @media (min-width: 1440px) {
    font-size: 5rem;
  }
`;

export const Text = styled.p`
  margin-bottom: 2rem;
  color: ${props => props.theme.black};
  font-family: 'Montserrat', serif;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  line-height: 2rem;

  &:nth-child(2) {
    margin-bottom: 6rem;
  }
`;

export const ProjectLink = styled.a`
  margin-bottom: 2rem;
  transition: color 0.3s ease;
  color: ${props => props.theme.black};
  font-family: 'Noto Sans', serif;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.blackLight};
  }
`;
