import { z } from 'zod';

export const employeeBaseSchema = z.object({
  employeeCode: z.string().min(2).max(20),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  position: z.string().min(1),
  department: z.string().min(1),
  basicSalary: z.coerce.number().nonnegative(),
  status: z.enum(['Active', 'On Leave', 'Terminated']).default('Active')
});

export type EmployeeBaseForm = z.infer<typeof employeeBaseSchema>;
