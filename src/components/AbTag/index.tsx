import React from "react";
import styled from "styled-components";


export interface AbTagProps {
    text: string
}


const AbTagStyled = styled.div`
    padding: 24px 32px;
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
    display: inline-block;
    font-family: sans-serif;
`;

export function AbTag({ text }: AbTagProps) {
    return (
        <AbTagStyled>
            { text }
        </AbTagStyled>
    );
}
