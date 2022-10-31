import React from "react";
import styled from "styled-components";

const LabelStyled = styled.label`
    color: #002f52;
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 16px;
    margin-bottom: 8px;
`;

const InputStyled = styled.input`
    font-size: 16px;
    line-height: 24px;
    color: #002F52;
    padding: 8px 24px;
    border: 1px solid #002F52;
    border-radius: 45px;
    &:focus{
        outline: none;
    }
    width: 100%;
    box-sizing: border-box;
`;

export interface AbTextFieldProps {
    label: string;
    value: string;
    type?: 'text' | 'email' | 'password' | 'date';
    onChage: (value: string) => void;
}

export function AbTextField({ label, type = 'text', value, onChage }: AbTextFieldProps) {
    return (
        <div>
            <LabelStyled>
                { label }
            </LabelStyled>
            <InputStyled
                type={type}
                value={value}
                onChange={event => onChage(event.target.value)} />
        </div>
    );
}