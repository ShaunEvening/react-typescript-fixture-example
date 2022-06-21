import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProductList, ProductListItem, Product } from "../product";
import { action } from "@storybook/addon-actions";

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
  title: "Product/List",
  component: ProductList,
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = ({ children }) => (
  <ProductList title="Example List">{children}</ProductList>
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <ProductListItem
      product={{ name: "D4", sku: "xxxxx", description: "Four sided die" }}
      selectProduct={action("Select die")}
    />,
    <ProductListItem
      product={{ name: "D6", sku: "xxxxx", description: "Six sided die" }}
      selectProduct={action("Select die")}
    />,
    <ProductListItem
      product={{ name: "D20", sku: "xxxxx", description: "20 sided die" }}
      selectProduct={action("Select die")}
    />,
  ],
};
