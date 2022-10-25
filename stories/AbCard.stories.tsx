import React from "react";
import { ComponentMeta } from "@storybook/react";
import { AbCard } from '../src';


export default {
    title: 'components/AbCard',
    component: AbCard
} as ComponentMeta<typeof AbCard>;

export const AbCardComponent = () => (
    <AbCard>
        <h1></h1>
    </AbCard>
);