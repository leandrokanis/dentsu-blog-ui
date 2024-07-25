import { IAuthor } from "."
import { faker } from "@faker-js/faker"

export const mockAuthor = (args?: any): IAuthor => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  createdAt: faker.date.recent(),
  profilePicture: faker.image.avatar(),
  updatedAt: faker.date.recent(),
  ...args,
})