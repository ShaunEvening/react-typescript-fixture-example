import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ProductDetails } from "../product";

export default {
  title: "Product/Details",
  component: ProductDetails,
  args: {
    onClose: action("Close"),
  },
} as ComponentMeta<typeof ProductDetails>;

const Template: ComponentStory<typeof ProductDetails> = (args) => (
  <ProductDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  product: {
    name: "D4",
    sku: "xxxxx",
    description: "A four sided die!",
  },
};
