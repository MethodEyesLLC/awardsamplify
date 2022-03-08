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
