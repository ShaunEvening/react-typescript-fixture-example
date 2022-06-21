import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Product, ProductDetails } from "../product";

const PRODUCTS: Product[] = [
  {
    name: "D6 dice",
    sku: "00000006",
    description: "It has six sides!",
  },
  {
    name: "D20 dice",
    sku: "00000020",
    description: "It has 20 sides! Holy cow!!!",
  },
];

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
