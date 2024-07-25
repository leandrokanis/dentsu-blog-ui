import { faker } from '@faker-js/faker'
import { ICategory } from './category'

export const mockCategory = (args?: any): ICategory => ({
  id: faker.string.uuid(),
  name: faker.lorem.word(),
  createdAt: faker.date.recent(),
  postId: faker.string.uuid(),
  updatedAt: faker.date.recent(),
  ...args,
})
