import { Gym } from '@prisma/client';

export interface GymRepository {
  findById(id: string): Promise<Gym | null>;
  create(gym: Gym): Promise<Gym | null>;
}
