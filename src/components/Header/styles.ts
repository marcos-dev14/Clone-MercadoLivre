import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    background: var(--color-header);
    border-bottom: 1px solid var(--color-border);

    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const Logo = styled.div`
    width: 134px;
    height: 40px;
    top: 11px;

    margin-left: 50px;
`;
 
export const SearchInput = styled.input`
    width: 100%;
    margin: 0 70px;

    background-color: var(--color-white);
    color: var(--color-gray);
    font-size: 16px;
    padding: 17px 8px;
    border: none;
    outline: none;
    border-radius: 8px;

`;

export const TextHeader = styled.div`
    display: flex;
    align-items: center;

    margin-right: 50px;

    > img {
        max-width: 340px;
        max-height: 39px;
    }
`;