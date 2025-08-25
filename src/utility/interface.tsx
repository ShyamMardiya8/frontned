export interface LoginResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    generateToken: string;
    refreshToken: string;
  };
}

export interface User {
  data: [
    {
      file: any[]; // If you know file structure, replace `any[]` with correct type
      _id: string;
      firstName: string;
      lastName: string;
      phoneNumber: string;
      email: string;
      __v: number;
    }
  ];
  message: string;
  statusCode: number;
  success: boolean;
}
