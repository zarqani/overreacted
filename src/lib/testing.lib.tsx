import React from "react";
import { render } from "@testing-library/react";
import { Providers } from "./providers";

const TestingWrapper: React.FC = ({
  children,
}: React.PropsWithChildren<Record<string, any>>) => {
  return <Providers>{children}</Providers>;
};

const customRender = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options = {}
) =>
  render(ui, {
    wrapper: TestingWrapper,
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
