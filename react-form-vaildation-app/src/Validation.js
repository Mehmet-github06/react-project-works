import { object, string, number, date, InferType } from 'yup';

export const userSchema = object({
    name: string().required(),
    password: string().required().min(3).max(8),
    email: string().email().required()
   
  
  });