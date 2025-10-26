export interface Grievance {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'resolved' | 'rejected';
    createdAt: string;
    updatedAt: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'admin';
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}