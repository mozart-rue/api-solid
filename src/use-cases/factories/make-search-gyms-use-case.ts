import { SearchGymsUseCase } from '../search-gyms'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeSearchGymsUseCase() {
  const gymsRespository = new PrismaGymsRepository()
  const useCase = new SearchGymsUseCase(gymsRespository)

  return useCase
}
