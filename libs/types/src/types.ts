import { FunctionComponent, SVGProps } from 'react';

export interface IProject {
  name: string;
  description: string;
  imageUrl: string;
  url: string;
}

export interface IContact {
  name: string;
  url: string;
  image: FunctionComponent<SVGProps<SVGSVGElement>>;
}
