import styled from "styled-components";

export const CardWrapper = styled.div`
  padding-left: 0px;
  width: 100%;
  height: 100%;
  background-color: #253866;
`;

export const ProjectList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProjectItem = styled.li`
  height: 350px;
  border: 2px solid black;
  border-radius: 8px;
  flex-basis: 21%;
  padding: 0px 0px 10px 0px;
  margin-right: 50px;

  :last-child {
    margin-right: 0px;
  }
  background-color: #253866;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    margin-right: 0px;

    margin-bottom: 50px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const ProjectCard = styled.div`
  height: 210px;
  // width: 300px;

  img {
    object-fit: contain;
    // height: 300px;
    width: 300px;
    transition: transform 1s;
    top: 0px;

    &:hover {
      transform: scale(1.5);
    }
  }
`;

export const ProjectLink = styled.div`
  height: 210px;

  a {
    display: inline-block;
  }
`;

export const ProjectContainer = styled.div`
  max-width: 300px;
`;
