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
export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
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
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
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
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
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
