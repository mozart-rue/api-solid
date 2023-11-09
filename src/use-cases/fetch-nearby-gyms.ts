import { Gym } from '@prisma/client'
import { GymRepository } from '@/repositories/gyms-repository'

interface IFetchNearbyGymsUseCaseRequest {
  userLatitude: number
  userLongitude: number
}

interface IFetchNearbyGymsUseCaseResponse {
  gyms: Gym[]
}

export class FetchNearbyGymsUseCase {
  constructor(private gymRepostory: GymRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: IFetchNearbyGymsUseCaseRequest): Promise<IFetchNearbyGymsUseCaseResponse> {
    const gyms = await this.gymRepostory.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    })

    return { gyms }
  }
}
