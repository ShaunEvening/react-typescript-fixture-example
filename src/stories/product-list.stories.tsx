import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ProductList, ProductListItem } from "../product";
import { action } from "@storybook/addon-actions";
import { createMockProduct } from "../product/testing/product.fixtures";

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
      product={createMockProduct({ name: "D4", description: "Four sided die" })}
      selectProduct={action("Select die")}
    />,
    <ProductListItem
      product={createMockProduct({ name: "D6", description: "Six sided die" })}
      selectProduct={action("Select die")}
    />,
    <ProductListItem
      product={createMockProduct({ name: "D20", description: "20 sided die" })}
      selectProduct={action("Select die")}
    />,
  ],
};
