import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbTextField, AbTextFieldProps } from '../src';


export default {
    title: 'components/AbTextField',
    component: AbTextField,
    argTypes: {
        label: {
            control: 'text'
        }
    },
    parameters: {
        actions: { argTypesRegex: '^on.*' }
    }
} as ComponentMeta<typeof AbTextField>;

const Template: ComponentStory<typeof AbTextField> = (args) => <AbTextField {...args} />;


export const AbTextFieldComponent = Template.bind({});

AbTextFieldComponent.args = {
    label: ''
} as AbTextFieldProps;