import { g, InferResolvers, Infer, buildSchema } from 'garph'

import { books } from './db'
import { AuthorLoader } from './loader'

const authorType = g.type('Author', {
  id: g.int(),
  name: g.string(),
})

const bookType = g.type('Book', {
  id: g.int(),
  title: g.string(),
  author: g.ref(authorType),
})

const queryType = g.type('Query', {
  books: g.ref(bookType).list(),
  booksWithFunction: g.ref(bookType).list(),
})

const resolvers: InferResolvers<{ Query: typeof queryType; Book: typeof bookType }, {}> = {
  Query: {
    //@ts-expect-error the field `author` is supposed to be on each book, but is handled by the field resolver below
    async books() {
      return books
    },
    /** This pattern is valid with graphql-codegen, you can provide an `EntireFieldWrapper`, which is `T | () => Promise<T>`, to allow GraphQL to run your function.
     * Note that for this resolver to work, the `Book` field level one has to be commented out, otherwise it will try to handle the author field
     */
    //@ts-expect-error
    async booksWithFunction() {
      return books.map(({ author_id, ...rest }) => {
        return {
          ...rest,
          author() {
            return AuthorLoader.load(author_id)
          },
        }
      })
    },
  },
  Book: {
    // books is typed as `any`, but should be book type.
    async author(book) {
      console.log('parent which is a book', book)
      return AuthorLoader.load(book.author_id)
    },
  },
}

export type Author = Infer<typeof authorType>
export const schema = buildSchema({ g, resolvers })
