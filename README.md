# Garph Field Level Resolver Demo

Wondering how to best handle the field level resolvers commonly used to avoid the N+1 problem.

## Sample Query

This query will hit all the points in the demo.

```graphql
query Books {
  books {
    title
    author {
      name
    }
  }
}
```
