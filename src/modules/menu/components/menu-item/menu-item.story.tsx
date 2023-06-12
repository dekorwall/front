import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Menu/Menu Item',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const View = Template.bind({});
View.args = {
  imagePath: '/assets/dekor/dekor.jpeg',
  weight: 0.8,
  title: 'Китайський шовк',
  description:
    'Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис',
  price: 438, 
} 