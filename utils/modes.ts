import {
  LayoutIcon,
  LibraryIcon,
  PaperclipIcon,
  type LucideIcon,
} from 'lucide-react';

export interface Mode {
  param: string;
  name: string;
  package: string;
  description: string;
  icon: LucideIcon;
}

export const modes: Mode[] = [
  {
    param: 'kurogashi',
    name: 'Kurogashi',
    package: 'kurogashi',
    description: 'Server Generation Toolkit',
    icon: LibraryIcon,
  },
  {
    param: 'presets',
    name: 'Presets',
    package: 'presets',
    description: 'Presets for Kurogashi',
    icon: LayoutIcon,
  },
];
