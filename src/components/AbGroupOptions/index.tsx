import React, { useState } from "react";
import styled from "styled-components";




export interface AbGroupOption {
    id: number;
    title: string;
    body: string;
    footer: string;
}

export interface AbGroupOptionsProps {
    options: Array<AbGroupOption>;
    defaultValue?: AbGroupOption;
    onChange?: (option: AbGroupOption) => void;
}

const SectionStyled = styled.section<{ selected: boolean }>`
    width: 194px;
    height: 88px;
    background: ${(props) => props.selected ? 'linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%)' : '#ffffff'};
    border: 1px solid;
    border-color: ${(props) => props.selected ? '#002f52' : '#eb9b00'};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;

    header {
        color: ${(props) => props.selected ? '#fff' : '#eb9b00'};
        font-size: 12px;
        font-weight: 400;
    }
    strong {
        color: ${(props) => props.selected ? '#fff' : '#eb9b00'};
        font-size: 16px;
        font-weight: 700;
    }
    footer {
        color: ${(props) => props.selected ? '#fff' : 'rgba(0, 0, 0, 0.54);'};
        font-weight: 400;
        font-size: 12px;
    }
`;


export function AbGroupOptions({ options, onChange, defaultValue }: AbGroupOptionsProps) {
    const [selected, setSelected] = useState<AbGroupOption | undefined>(defaultValue);

    const handleClick = (option: AbGroupOption) => {
        setSelected(option);

        if (onChange) {
            onChange(option);
        }
    };

    return (
        <>{
            options.map(option => (
                <SectionStyled
                    key={option.id}
                    onClick={() => handleClick(option)}
                    selected={selected?.id === option.id}>
                    <header>
                        {option.title}
                    </header>
                    <div>
                        <strong>{option.body}</strong>
                    </div>
                    <footer>
                        {option.footer}
                    </footer>
                </SectionStyled>
            ))
        }</>
    );
}