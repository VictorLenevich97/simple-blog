import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    border: 2px solid ${({ theme }: any) => theme.color.primaryColor};

    &:hover {
        background-color: ${({ theme }: any) => theme.color.primaryColor};
        transition: all 0.5s;
    }
`;

export const Date = styled.span`
    color: ${({ theme }: any) => theme.color.gray_1};
    font-size: 0.8rem;
    line-height: 1.5rem;
`;
