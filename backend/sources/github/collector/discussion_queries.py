"""
GraphQL queries for GitHub Discussions.
"""

# Fetch discussion categories for a repository
GET_DISCUSSION_CATEGORIES = """
query($owner: String!, $repo: String!) {
  repository(owner: $owner, name: $repo) {
    discussionCategories(first: 50) {
      nodes {
        id
        name
        slug
        emoji
      }
    }
  }
}
"""


# Fetch discussions from a specific category
GET_DISCUSSIONS = """
query(
  $owner: String!,
  $repo: String!,
  $categoryId: ID!,
  $cursor: String
) {
  repository(owner: $owner, name: $repo) {

    discussions(
      first: 25,
      after: $cursor,
      categoryId: $categoryId,
      orderBy: {
        field: UPDATED_AT,
        direction: DESC
      }
    ) {

      pageInfo {
        hasNextPage
        endCursor
      }

      nodes {

        id
        number
        title
        body
        url

        createdAt
        updatedAt

        isAnswered

        upvoteCount

        author {
          login
        }

        category {
          name
          slug
        }

        comments(first: 3) {

          totalCount

          nodes {

            body

            createdAt

            author {
              login
            }

          }

        }

      }

    }

  }
}
"""