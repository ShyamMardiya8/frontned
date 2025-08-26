export interface LoginResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    generateToken: string;
    refreshToken: string;
  };
}

export interface UserData {
  file: any[];
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  __v: number;
}

export interface User {
  data: UserData[];
  message: string;
  statusCode: number;
  success: boolean;
}
