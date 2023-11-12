import React from "react";

const MyComponent = (props: { enabled: boolean }) => {
  return {};
};

type PropType<Component> = Component extends (value: infer Props) => any
  ? Props
  : never;

type Test = PropType<typeof MyComponent>;
