// API Client for Spring Boot Backend

import { 
  Organization, 
  Workstation, 
  Campaign, 
  Employee, 
  LoginRequest, 
  SignupRequest, 
  JwtResponse,
  PaginatedResponse,
  ApiError 
} from '@/types/api';

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    
    // Load token from localStorage on client side
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('auth_token');
    }
  }

  // Set authentication token
  setToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token);
    }
  }

  // Clear authentication token
  clearToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  }

  // Generic request method
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {}),
    };

    // Add authorization header if token exists
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const config: RequestInit = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const error: ApiError = await response.json();
        throw new Error(error.message || `HTTP ${response.status}`);
      }

      // Handle empty responses
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }
      
      return {} as T;
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // GET request
  private get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  // POST request
  private post<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  private put<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // DELETE request
  private delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  // Authentication API
  auth = {
    login: (credentials: LoginRequest): Promise<JwtResponse> =>
      this.post<JwtResponse>('/auth/signin', credentials),
    
    signup: (userData: SignupRequest): Promise<{ message: string }> =>
      this.post<{ message: string }>('/auth/signup', userData),
    
    logout: () => {
      this.clearToken();
      return Promise.resolve();
    }
  };

  // Organizations API
  organizations = {
    getAll: (): Promise<Organization[]> =>
      this.get<Organization[]>('/organizations'),
    
    getPaged: (page = 0, size = 10, sort = 'name,asc'): Promise<PaginatedResponse<Organization>> =>
      this.get<PaginatedResponse<Organization>>(`/organizations/paged?page=${page}&size=${size}&sort=${sort}`),
    
    getById: (id: number): Promise<Organization> =>
      this.get<Organization>(`/organizations/${id}`),
    
    create: (organization: Omit<Organization, 'id'>): Promise<Organization> =>
      this.post<Organization>('/organizations', organization),
    
    update: (id: number, organization: Partial<Organization>): Promise<Organization> =>
      this.put<Organization>(`/organizations/${id}`, organization),
    
    delete: (id: number): Promise<void> =>
      this.delete<void>(`/organizations/${id}`),
    
    getWorkstations: (id: number): Promise<Workstation[]> =>
      this.get<Workstation[]>(`/organizations/${id}/workstations`)
  };

  // Workstations API
  workstations = {
    getAll: (): Promise<Workstation[]> =>
      this.get<Workstation[]>('/workstations'),
    
    getPaged: (page = 0, size = 10, sort = 'title,asc'): Promise<PaginatedResponse<Workstation>> =>
      this.get<PaginatedResponse<Workstation>>(`/workstations/paged?page=${page}&size=${size}&sort=${sort}`),
    
    getById: (id: number): Promise<Workstation> =>
      this.get<Workstation>(`/workstations/${id}`),
    
    create: (workstation: Omit<Workstation, 'id'>): Promise<Workstation> =>
      this.post<Workstation>('/workstations', workstation),
    
    update: (id: number, workstation: Partial<Workstation>): Promise<Workstation> =>
      this.put<Workstation>(`/workstations/${id}`, workstation),
    
    delete: (id: number): Promise<void> =>
      this.delete<void>(`/workstations/${id}`)
  };

  // Campaigns API
  campaigns = {
    getAll: (): Promise<Campaign[]> =>
      this.get<Campaign[]>('/campaigns'),
    
    getPaged: (page = 0, size = 10, sort = 'name,asc'): Promise<PaginatedResponse<Campaign>> =>
      this.get<PaginatedResponse<Campaign>>(`/campaigns?page=${page}&size=${size}&sortBy=${sort.split(',')[0]}&sortDirection=${sort.split(',')[1] || 'asc'}`),
    
    getById: (id: number): Promise<Campaign> =>
      this.get<Campaign>(`/campaigns/${id}`),
    
    create: (campaign: Omit<Campaign, 'id'>): Promise<Campaign> =>
      this.post<Campaign>('/campaigns', campaign),
    
    update: (id: number, campaign: Partial<Campaign>): Promise<Campaign> =>
      this.put<Campaign>(`/campaigns/${id}`, campaign),
    
    delete: (id: number): Promise<void> =>
      this.delete<void>(`/campaigns/${id}`)
  };

  // Employees API
  employees = {
    getByCampaign: (campaignId: number, page = 0, size = 10, sort = 'familyName,asc'): Promise<PaginatedResponse<Employee>> =>
      this.get<PaginatedResponse<Employee>>(`/employees/campaign/${campaignId}?page=${page}&size=${size}&sortBy=${sort.split(',')[0]}&sortDirection=${sort.split(',')[1] || 'asc'}`),
    
    getById: (id: number): Promise<Employee> =>
      this.get<Employee>(`/employees/${id}`),
    
    create: (employee: Omit<Employee, 'id'>): Promise<Employee> =>
      this.post<Employee>('/employees', employee)
  };
}

// Create and export the API client instance
const apiClient = new ApiClient(API_BASE_URL);
export default apiClient;