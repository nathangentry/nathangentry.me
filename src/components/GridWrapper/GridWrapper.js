import styled from 'styled-components';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
    max-width: 1200px;
    margin: auto;
`;

export default GridWrapper;