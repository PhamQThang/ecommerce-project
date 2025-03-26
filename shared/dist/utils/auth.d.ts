import { Role, User } from '../types';
export declare const restrictTo: (roles: Role[]) => (user: User) => void;
