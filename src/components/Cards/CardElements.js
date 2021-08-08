import styled from "styled-components";

export const CardWrapper = styled.div`
  padding-left: 0px;
  width: 100%;
  height: 100%;
  background-color: #EEEEFF;
`;

export const ProjectList = styled.div`
  
  // list-style: none;
  // display: flex;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  padding-bottom: 10px;
  text-align: center;
  justify-content: center;
  // flex-wrap: wrap;

  @media screen and (max-width: 1370px) {
    // flex-direction: column;

    grid-template-columns: repeat(1, 1fr);
  }
  
`;

export const ProjectItem = styled.div`
  height: 350px;
  border: 2px solid black;
  border-radius: 8px;
  // flex-basis: 21%;
  padding: 0px 0px 10px 0px;
  margin-right: 50px;

  :last-child {
    // margin-right: 0px;
    padding-bottom: 10px;
  }
  background-color: black;
  overflow: hidden;

  @media screen and (max-width: 1370px) {
    margin-right: 0px;

    margin-bottom: 50px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const ProjectCard = styled.div`
  // height: 210px;
  // width: 300px;

  // img {
  //   object-fit: contain;
  //   height: 300px;
  //   width: 300px;
  //   transition: transform 1s;
  //   top: 0px;

  //   &:hover {
  //     transform: scale(1.1);
  //   }
  // }
`;

export const ProjectLink = styled.div`
  // height: 210px;
  overflow: hidden;

  img {
    object-fit: contain;
    // height: 300px;
    width: 300px;
    transition: transform 1s;
    top: 0px;

    &:hover {
      transform: scale(1.3);
    }
  a {
    display: inline-block;
  }
`;

export const ProjectContainer = styled.div`
  max-width: 300px;
`;
