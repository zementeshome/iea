import { MenuProps } from "@chakra-ui/react";
import { Option } from "./select";

export type SelectProps = Pick<
  MenuProps,
  "placement" | "flip" | "preventOverflow"
> & {
  children: React.ReactNode;
  options: Option[];
  label: string;
  menuName: string;
  onSelected: (value: string) => void;
  labelId: string;
};
