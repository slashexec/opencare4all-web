// API Types - Matching Spring Boot DTOs

// Base types
export interface BaseEntity {
  id: number;
  createdAt?: string;
  updatedAt?: string;
}

// Address
export interface Address {
  id?: number;
  use?: string;
  text?: string;
  line?: string;
  city?: string;
  district?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

// Organization
export interface Organization extends BaseEntity {
  name: string;
  address?: Address;
  campaignIds?: number[];
}

// Workstation
export interface Workstation extends BaseEntity {
  title: string;
  code?: string;
  description?: string;
  professionalRisks?: string;
  organizationId?: number;
}

// Campaign
export interface Campaign extends BaseEntity {
  name: string;
  startDate?: string;
  endDate?: string;
  organizationId?: number;
  employeeIds?: number[];
}

// Employee
export interface Employee extends BaseEntity {
  patientUuid?: string;
  openmrsIdentifier?: string;
  givenName?: string;
  familyName?: string;
  gender?: string;
  birthDate?: string;
  phone?: string;
  address?: Address;
  campaignIds?: number[];
}

// Authentication
export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: string[];
  organizationId?: number;
}

export interface JwtResponse {
  token: string;
  type: string;
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
  organizationId?: number;
  organizationName?: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  content: T[];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
}

// Error types
export interface ApiError {
  message: string;
  status: number;
  timestamp: string;
  path: string;
}