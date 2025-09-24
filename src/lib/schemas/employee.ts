import { z } from 'zod';

// Form schema for creating/updating core employee attributes (auto employeeCode generation handled in service)
export const employeeBaseSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  position: z.string().min(1),
  department: z.string().min(1),
  basicSalary: z.coerce.number().nonnegative(),
  status: z.enum(['Active', 'On Leave', 'Terminated', 'Absconded']).default('Active')
});

export type EmployeeBaseForm = z.infer<typeof employeeBaseSchema>;
