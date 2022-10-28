import React from "react";
import { AbGroupOptions, AbGroupOptionsProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: 'components/AbGroupOptions',
    component: AbGroupOptions
} as ComponentMeta<typeof AbGroupOptions>;

const Template: ComponentStory<typeof AbGroupOptions> = (args) => <AbGroupOptions {...args} />

export const Default = Template.bind({});

Default.args = {
    options: [
        {
            id: 1,
            title: 'E-Book',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        },
        {
            id: 2,
            title: 'Impresso',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        },
        {
            id: 3,
            title: 'Impresso + E-Book',
            body: 'R$ 00,00',
            footer: '.pdf, .epub, .mob'
        }
    ],
    defaultValue: {
        id: 1,
        title: 'E-Book',
        body: 'R$ 00,00',
        footer: '.pdf, .epub, .mob'
    }
} as AbGroupOptionsProps;