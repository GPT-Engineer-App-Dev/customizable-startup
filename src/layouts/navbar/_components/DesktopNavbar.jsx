import { Package2 } from "lucide-react";
import { NavItem } from "./NavItem";

export const DesktopNavbar = ({ navItems }) => (
  <nav className="flex items-center justify-between w-full">
    <NavItem
      to="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <Package2 className="h-6 w-6" />
      <span>MyApp</span>
    </NavItem>
    <div className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
      {navItems.map((item) => (
        <NavItem key={item.to} to={item.to}>
          {item.title}
        </NavItem>
      ))}
    </div>
  </nav>
);