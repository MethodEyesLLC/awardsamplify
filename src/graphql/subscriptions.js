/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      agencies {
        items {
          id
          awardID
          agencyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      agencies {
        items {
          id
          awardID
          agencyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      agencies {
        items {
          id
          awardID
          agencyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
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
          awardID
          agencyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          awardID
          agencyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          awardID
          agencyID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAgencyAwards = /* GraphQL */ `
  subscription OnCreateAgencyAwards {
    onCreateAgencyAwards {
      id
      awardID
      agencyID
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
        agencies {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateAgencyAwards = /* GraphQL */ `
  subscription OnUpdateAgencyAwards {
    onUpdateAgencyAwards {
      id
      awardID
      agencyID
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
        agencies {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteAgencyAwards = /* GraphQL */ `
  subscription OnDeleteAgencyAwards {
    onDeleteAgencyAwards {
      id
      awardID
      agencyID
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
        agencies {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
