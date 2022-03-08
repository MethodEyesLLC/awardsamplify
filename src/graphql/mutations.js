/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAgency = /* GraphQL */ `
  mutation CreateAgency(
    $input: CreateAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    createAgency(input: $input, condition: $condition) {
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
export const updateAgency = /* GraphQL */ `
  mutation UpdateAgency(
    $input: UpdateAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    updateAgency(input: $input, condition: $condition) {
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
export const deleteAgency = /* GraphQL */ `
  mutation DeleteAgency(
    $input: DeleteAgencyInput!
    $condition: ModelAgencyConditionInput
  ) {
    deleteAgency(input: $input, condition: $condition) {
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
export const createAward = /* GraphQL */ `
  mutation CreateAward(
    $input: CreateAwardInput!
    $condition: ModelAwardConditionInput
  ) {
    createAward(input: $input, condition: $condition) {
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
export const updateAward = /* GraphQL */ `
  mutation UpdateAward(
    $input: UpdateAwardInput!
    $condition: ModelAwardConditionInput
  ) {
    updateAward(input: $input, condition: $condition) {
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
export const deleteAward = /* GraphQL */ `
  mutation DeleteAward(
    $input: DeleteAwardInput!
    $condition: ModelAwardConditionInput
  ) {
    deleteAward(input: $input, condition: $condition) {
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
export const createTrophy = /* GraphQL */ `
  mutation CreateTrophy(
    $input: CreateTrophyInput!
    $condition: ModelTrophyConditionInput
  ) {
    createTrophy(input: $input, condition: $condition) {
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
export const updateTrophy = /* GraphQL */ `
  mutation UpdateTrophy(
    $input: UpdateTrophyInput!
    $condition: ModelTrophyConditionInput
  ) {
    updateTrophy(input: $input, condition: $condition) {
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
export const deleteTrophy = /* GraphQL */ `
  mutation DeleteTrophy(
    $input: DeleteTrophyInput!
    $condition: ModelTrophyConditionInput
  ) {
    deleteTrophy(input: $input, condition: $condition) {
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
