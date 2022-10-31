import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbQuantityInput, AbQuantityInputProps } from '../src';


export default {
    title: 'components/AbQuantityInput',
    component: AbQuantityInput,
    parameters: { actions: { argTypesRegex: '^on.*' } }
} as ComponentMeta<typeof AbQuantityInput>;

const Template: ComponentStory<typeof AbQuantityInput> = (args) => <AbQuantityInput {...args} />

export const AbQuantityInputComponent = Template.bind({});

AbQuantityInputComponent.args = {
    label: 'Uma label interessante'
} as AbQuantityInputProps;
