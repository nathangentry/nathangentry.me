import styled from 'styled-components';

const ScrollWrapper = styled.div`
    overflow: none;
    ${props => props.vertical ? 'overflow-y: auto;' : ''}
    ${props => props.horizontal ? 'overflow-x: auto;' : ''}
`;

ScrollWrapper.defaultProps = {
    vertical: false,
    horizontal: false
}

export default ScrollWrapper;