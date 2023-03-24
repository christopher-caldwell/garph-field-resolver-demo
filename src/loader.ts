import { DataLoader } from '@caldwell619/data-loader'
import type { Key } from 'node-cache'

import { authors } from './db'
import type { Author } from './schema'

export const authorFetcher = async (ids: Key[]): Promise<Author[]> => {
  console.log('# of IDs not cached', ids.length)
  const targetAuthors = ids.map((id) => {
    const targetAuthor = authors.find((author) => author.id === id)
    if (!targetAuthor) throw new Error("This shouldn't happen, but can't find the target author")
    return targetAuthor
  })
  return targetAuthors
}

export const AuthorLoader = new DataLoader<Author>({
  fetcher: authorFetcher,
})
