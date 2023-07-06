import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  specification: string;
  make_year: number;
  model: string;
  engine: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  specification?: string;
  model?: string;
  engine?: string;
  organization_id?: string;
}
