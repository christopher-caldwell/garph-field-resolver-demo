/** The representation of the SQL data, FK with the author ID */
export interface BookData {
  id: number
  title: string
  author_id: number
}

/** SQL data */
export interface Author {
  id: number
  name: string
}

/** SQL representation of what querying the DB might return */
export const authors: Author[] = [
  {
    id: 1,
    name: 'J.K. Rowling',
  },
  {
    id: 2,
    name: 'J.R.R Tolkien',
  },
  {
    id: 3,
    name: 'Timothy Zahn',
  },
]

/**
 * SQL representation of what querying the DB might return. `author_id` is the FK, and not part of the GraphQL schema.
 * The ID will be passed to a data loader, and handled by a field level resolver
 */
export const books: BookData[] = [
  {
    id: 1,
    title: "Sorcerer's Stone",
    author_id: 1,
  },
  {
    id: 2,
    title: 'Chamber of Secrets',
    author_id: 1,
  },
  {
    id: 3,
    title: 'Prisoner of Azkaban',
    author_id: 1,
  },
  {
    id: 4,
    title: 'Goblet of Fire',
    author_id: 1,
  },
  {
    id: 5,
    title: 'Order of the Phoenix',
    author_id: 1,
  },
  {
    id: 6,
    title: 'Half Blood Prince',
    author_id: 1,
  },
  {
    id: 7,
    title: 'Deathly Hallows',
    author_id: 1,
  },
  {
    id: 8,
    title: 'Fellowship of the Ring',
    author_id: 2,
  },
  {
    id: 9,
    title: 'Two Towers',
    author_id: 2,
  },
  {
    id: 10,
    title: 'Return of the King',
    author_id: 2,
  },
  {
    id: 11,
    title: 'Thrawn',
    author_id: 3,
  },
]
