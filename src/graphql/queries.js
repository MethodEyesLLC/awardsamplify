/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAgency = /* GraphQL */ `
  query GetAgency($id: ID!) {
    getAgency(id: $id) {
      id
      name
      description
      parentco
      type
      websitelink
      notes
      image
      awards {
        items {
          id
          name
          description
          parentco
          type
          openforentries
          deadline1
          deadline2
          deadline3
          fee1
          fee2
          fee
          eligibility
          winnersannouncement
          websitelink
          notes
          image
          createdAt
          updatedAt
          agencyAwardsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAgencies = /* GraphQL */ `
  query ListAgencies(
    $filter: ModelAgencyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgencies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        parentco
        type
        websitelink
        notes
        image
        awards {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAward = /* GraphQL */ `
  query GetAward($id: ID!) {
    getAward(id: $id) {
      id
      name
      description
      parentco
      type
      openforentries
      deadline1
      deadline2
      deadline3
      fee1
      fee2
      fee
      eligibility
      winnersannouncement
      websitelink
      notes
      image
      agency {
        id
        name
        description
        parentco
        type
        websitelink
        notes
        image
        awards {
          nextToken
        }
        createdAt
        updatedAt
      }
      trophy {
        items {
          id
          content
          createdAt
          updatedAt
          awardTrophyId
        }
        nextToken
      }
      createdAt
      updatedAt
      agencyAwardsId
    }
  }
`;
export const listAwards = /* GraphQL */ `
  query ListAwards(
    $filter: ModelAwardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAwards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        parentco
        type
        openforentries
        deadline1
        deadline2
        deadline3
        fee1
        fee2
        fee
        eligibility
        winnersannouncement
        websitelink
        notes
        image
        agency {
          id
          name
          description
          parentco
          type
          websitelink
          notes
          image
          createdAt
          updatedAt
        }
        trophy {
          nextToken
        }
        createdAt
        updatedAt
        agencyAwardsId
      }
      nextToken
    }
  }
`;
export const getTrophy = /* GraphQL */ `
  query GetTrophy($id: ID!) {
    getTrophy(id: $id) {
      id
      award {
        id
        name
        description
        parentco
        type
        openforentries
        deadline1
        deadline2
        deadline3
        fee1
        fee2
        fee
        eligibility
        winnersannouncement
        websitelink
        notes
        image
        agency {
          id
          name
          description
          parentco
          type
          websitelink
          notes
          image
          createdAt
          updatedAt
        }
        trophy {
          nextToken
        }
        createdAt
        updatedAt
        agencyAwardsId
      }
      content
      createdAt
      updatedAt
      awardTrophyId
    }
  }
`;
export const listTrophies = /* GraphQL */ `
  query ListTrophies(
    $filter: ModelTrophyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrophies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        award {
          id
          name
          description
          parentco
          type
          openforentries
          deadline1
          deadline2
          deadline3
          fee1
          fee2
          fee
          eligibility
          winnersannouncement
          websitelink
          notes
          image
          createdAt
          updatedAt
          agencyAwardsId
        }
        content
        createdAt
        updatedAt
        awardTrophyId
      }
      nextToken
    }
  }
`;
