/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAgency = /* GraphQL */ `
  subscription OnCreateAgency {
    onCreateAgency {
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
export const onUpdateAgency = /* GraphQL */ `
  subscription OnUpdateAgency {
    onUpdateAgency {
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
export const onDeleteAgency = /* GraphQL */ `
  subscription OnDeleteAgency {
    onDeleteAgency {
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
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
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
export const onCreateAward = /* GraphQL */ `
  subscription OnCreateAward {
    onCreateAward {
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
export const onUpdateAward = /* GraphQL */ `
  subscription OnUpdateAward {
    onUpdateAward {
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
export const onDeleteAward = /* GraphQL */ `
  subscription OnDeleteAward {
    onDeleteAward {
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
export const onCreateTrophy = /* GraphQL */ `
  subscription OnCreateTrophy {
    onCreateTrophy {
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
export const onUpdateTrophy = /* GraphQL */ `
  subscription OnUpdateTrophy {
    onUpdateTrophy {
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
export const onDeleteTrophy = /* GraphQL */ `
  subscription OnDeleteTrophy {
    onDeleteTrophy {
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
