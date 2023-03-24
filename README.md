# Garph Field Level Resolver Demo

Wondering how to best handle the field level resolvers commonly used to avoid the N+1 problem.

There are comments where applicable, but the majority of the demo is in the [schema](./src/schema.ts) file, under the resolver type.

## Running

If you wanted to run this, `yarn`, `yarn start` is all you need.

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
