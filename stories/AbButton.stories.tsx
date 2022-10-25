import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbButton, AbButtonProps } from '../src';


export default {
    title: 'components/AbButton',
    component: AbButton
} as ComponentMeta<typeof AbButton>;

const Template: ComponentStory<typeof AbButton> = (args) => <AbButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: <>AbButton Primary</>,
    type: 'primary'
} as AbButtonProps;

export const Secondary = Template.bind({});

Secondary.args = {
    children: <>AbButton Secondary</>,
    type: 'secondary'
} as AbButtonProps;