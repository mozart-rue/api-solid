import { Gym } from '@prisma/client'
import { GymRepository } from '@/repositories/gyms-repository'

interface ICreateGymUseCaseRequest {
  title: string
  description: string | null
  phone: string | null
  longitude: number
  latitude: number
}

interface ICreateGymUseCaseResponse {
  gym: Gym
}

export class CreateGymUseCase {
  constructor(private gymRepostory: GymRepository) {}

  async execute({
    title,
    description,
    phone,
    longitude,
    latitude,
  }: ICreateGymUseCaseRequest): Promise<ICreateGymUseCaseResponse> {
    const gym = await this.gymRepostory.create({
      title,
      description,
      phone,
      longitude,
      latitude,
    })

    return { gym }
  }
}
