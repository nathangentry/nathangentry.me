import styled from 'styled-components';

const StyledPage = styled.div`
    background-color: #f7f7f7;

    & ::selection {
        color: ${props => props.primaryDark};
        background-color: ${props => props.opacityColor};
    }

    button.primary {
        background-color: ${props => props.primaryColor};
        color: white;

        &:hover {
            background-color: ${props => props.primaryDark};
        }
    }

    button.secondary {
        background-color: ${props => props.opacityColor};
        color: ${props => props.primaryColor};

        &:hover {
            background-color: ${props => props.opacityDark};
        }
    }

    a {
        color: ${props => props.primaryColor};
        text-decoration: none;
        transition: color 0.25s ease;

        &:hover {
            color: ${props => props.primaryDark};
        }
    }

    input, textarea {
        &:hover {
            border: 2px solid ${props => props.opacityColor};
        }
        &:focus {
            border: 2px solid ${props => props.primaryColor};
            background-color: ${props => props.opacityColor};
        }
    }

    .opacity-bg {
        background-color: ${props => props.opacityColor};
    }

    .primary-color {
        color: ${props => props.primaryColor};
    }
`;

export default StyledPage;