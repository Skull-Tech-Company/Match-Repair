import styled from "styled-components";

export const HomeWrapper = styled.div`
  background-color: #ebebeb;
`;

export const HomeContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 10px;
  margin-top: 5.6rem;
  margin-left: 2.7rem;
  max-height: 70rem;
`;

export const AlignContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;
