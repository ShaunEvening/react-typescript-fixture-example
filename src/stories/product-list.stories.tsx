import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProductList, ProductListItem } from "../product";
import { action } from "@storybook/addon-actions";

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
