import styled from 'styled-components';

const GridWrapper = styled.div`
    display: grid;
    grid-row-gap: 24px;
    grid-template-columns: 1fr;
    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 24px;
    }
`;

export default GridWrapper;