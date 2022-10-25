import React, { ReactNode } from "react";
import styled from "styled-components";

export interface AbCardProps {
    children: ReactNode;
}

const AbCardStyed = styled.div`
    padding: 48px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

export function AbCard({ children }: AbCardProps) {
    return (
        <AbCardStyed>
            { children }
        </AbCardStyed>
    );
}
