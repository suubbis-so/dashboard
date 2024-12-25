import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"; // Radix UI Navigation Menu
import { cva } from "class-variance-authority"; // Utility for managing variants
import clsx from "clsx"; // Utility for conditional class management

const NavigationMenu = ({ children }) => {
  return (
    <nav className="flex flex-col gap-2">
      {children}
    </nav>
  );
};

NavigationMenu.Item = ({ children }) => {
  return <div>{children}</div>;
};

export default NavigationMenu;
