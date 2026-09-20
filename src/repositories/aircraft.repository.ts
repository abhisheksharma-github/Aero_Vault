import { CanonicalAircraft } from '../types/aircraft.types.js';
import {
  AircraftQueryParams,
  CreateAircraftInput,
  UpdateAircraftInput,
} from '../schemas/aircraft.schema.js';

export interface AircraftListResult {
  items: CanonicalAircraft[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
  appliedFilters: {
    country: string | null;
    affiliation: string | null;
    militaryBranch: string | null;
    serviceStatus: string | null;
    category: string | null;
    generation: string | null;
    era: string | null;
    stealthLevel: string | null;
    search: string | null;
    minTvr: number | null;
    maxTvr: number | null;
  };
}

export interface IAircraftRepository {
  getDataSourceType(): 'postgres' | 'vault';
  list(params: AircraftQueryParams): Promise<AircraftListResult>;
  getById(idOrSlug: string): Promise<CanonicalAircraft | null>;
  search(term: string, limit?: number): Promise<CanonicalAircraft[]>;
  create(data: CreateAircraftInput): Promise<CanonicalAircraft>;
  update(id: string, data: UpdateAircraftInput): Promise<CanonicalAircraft | null>;
  delete(id: string): Promise<boolean>;
}
