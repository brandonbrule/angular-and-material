export interface NavItem {
  label: string;
  disabled?: boolean;
  icon: string;
  route?: string;
  children?: NavItem[];
}
