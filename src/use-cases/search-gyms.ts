import { Gym } from '@prisma/client'
import { GymRepository } from '@/repositories/gyms-repository'

interface ISearchGymsUseCaseRequest {
  query: string
  page: number
}

interface ISearchGymsUseCaseResponse {
  gyms: Gym[]
}

export class SearchGymsUseCase {
  constructor(private gymRepostory: GymRepository) {}

  async execute({
    query,
    page,
  }: ISearchGymsUseCaseRequest): Promise<ISearchGymsUseCaseResponse> {
    const gyms = await this.gymRepostory.searchMany(query, page)

    return { gyms }
  }
}
