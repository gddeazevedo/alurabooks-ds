import React, { ReactNode } from "react";
import styled, { css } from "styled-components";


export interface AbButtonProps {
    children?: ReactNode,
    color?: 'primary' | 'secondary',
    onClick?: () => void
}


const AbButtonStyled = styled.button<AbButtonProps>`
    background: ${(props) => props.color === 'primary' ? '#eb9b00' : '#fff'};
    padding: 16px 32px;
    border: 2px solid #eb9b00;
    color: ${(props) => props.color === 'primary' ? '#fff' : '#eb9b00'};
    font-size: 20px;
    cursor: pointer;
    ${(props) => props.color === 'primary' ? 
        css`&:hover {
            background: #b87900;
            border: 2px solid #b87900;
        }`
        :
        css`&:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: # #b87900
        }` 
    }
`;


export function AbButton({ children, color = 'primary', onClick }: AbButtonProps) {
    return (
        <AbButtonStyled onClick={onClick} color={color}>
            { children || "Click me" }
        </AbButtonStyled>
    );
}
