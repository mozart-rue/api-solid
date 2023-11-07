import { Gym } from '@prisma/client';
import { GymRepository } from '../gyms-repository';

export class InMemoryGymsRepository implements GymRepository {
  public items: Gym[] = [];

  async create(gym: Gym) {
    this.items.push(gym);
    
    return gym;
  }

  async findById(id: string) {
    const gym = this.items.find((item) => item.id === id);

    if (!gym) {
      return null;
    }

    return gym;
  }

}
