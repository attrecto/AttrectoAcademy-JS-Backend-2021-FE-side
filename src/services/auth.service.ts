import request, { Methods } from 'utils/request';
import { LoginCredentials, TokenResponse } from 'models/credentials.model';

export function login(data: LoginCredentials) {
  return request<TokenResponse>({ resource: 'auth/login', data, method: Methods.POST });
}
