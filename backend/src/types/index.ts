export interface Grievance {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'resolved' | 'rejected';
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'admin';
}

export interface ResponseMessage {
    success: boolean;
    message: string;
}