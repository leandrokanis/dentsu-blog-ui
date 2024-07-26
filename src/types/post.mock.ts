import { IPost } from '.';
import { faker } from '@faker-js/faker'
import { mockCategory } from './category.mock'
import { mockAuthor } from './author.mock';

export const mockPost = (args?: any): IPost => ({
  author: mockAuthor(),
  authorId: faker.string.uuid(),
  categories: [mockCategory(), mockCategory()],
  content: faker.lorem.paragraphs(10),
  createdAt: faker.date.recent(),
  id: faker.string.uuid(),
  thumbnailUrl: faker.image.urlLoremFlickr(),
  title: faker.lorem.sentence(),
  updatedAt: faker.date.recent(),
  ...args,
})
