import { Type } from "./Types.models";

export interface Pokemon 
  {
    number: number;
    name: string;
    types: Type[];
    image:string;
  }