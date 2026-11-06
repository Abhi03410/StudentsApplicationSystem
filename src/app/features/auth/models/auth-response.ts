export interface AuthResponse {
  success: boolean;
  message: string;
  token: string;
  user: AuthUser;
}

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'STUDENT' | 'ADMIN';
}

// backend response:-

// {
//   "success": true,
//   "message": "Login Successfully",
//   "token": "jwt-token-example",
//   "user": {
//     "id": "101",
//     "firstName": "Abhishek",
//     "lastName": "Patil",
//     "email": "student@gmail.com",
//     "role": "STUDENT"
//   }
// }