import styled from 'styled-components';

const GridWrapper = styled.div`
    display: grid;
    grid-row-gap: 24px;
    grid-template-columns: 1fr;
    @media (min-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 24px;
    }
    @media (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export default GridWrapper;