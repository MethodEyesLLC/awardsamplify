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
      campaigns {
        items {
          id
          content
          createdAt
          updatedAt
          agencyCampaignsId
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
        campaigns {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      agency {
        id
        name
        description
        parentco
        type
        websitelink
        notes
        image
        campaigns {
          nextToken
        }
        createdAt
        updatedAt
      }
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
          campaignAwardsId
        }
        nextToken
      }
      content
      createdAt
      updatedAt
      agencyCampaignsId
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        awards {
          nextToken
        }
        content
        createdAt
        updatedAt
        agencyCampaignsId
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
      campaign {
        id
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
        awards {
          nextToken
        }
        content
        createdAt
        updatedAt
        agencyCampaignsId
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
      campaignAwardsId
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
        campaign {
          id
          content
          createdAt
          updatedAt
          agencyCampaignsId
        }
        trophy {
          nextToken
        }
        createdAt
        updatedAt
        campaignAwardsId
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
        campaign {
          id
          content
          createdAt
          updatedAt
          agencyCampaignsId
        }
        trophy {
          nextToken
        }
        createdAt
        updatedAt
        campaignAwardsId
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
          campaignAwardsId
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
