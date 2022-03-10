import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AgencyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CampaignMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AwardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TrophyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Agency {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly parentco?: string;
  readonly type?: string;
  readonly websitelink?: string;
  readonly notes?: string;
  readonly image?: string;
  readonly campaigns?: (Campaign | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Agency, AgencyMetaData>);
  static copyOf(source: Agency, mutator: (draft: MutableModel<Agency, AgencyMetaData>) => MutableModel<Agency, AgencyMetaData> | void): Agency;
}

export declare class Campaign {
  readonly id: string;
  readonly agency?: Agency;
  readonly awards?: (Award | null)[];
  readonly content: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Campaign, CampaignMetaData>);
  static copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign, CampaignMetaData>) => MutableModel<Campaign, CampaignMetaData> | void): Campaign;
}

export declare class Award {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly parentco?: string;
  readonly type?: string;
  readonly openforentries?: string;
  readonly deadline1?: string;
  readonly deadline2?: string;
  readonly deadline3?: string;
  readonly fee1?: string;
  readonly fee2?: string;
  readonly fee?: string;
  readonly eligibility?: string;
  readonly winnersannouncement?: string;
  readonly websitelink?: string;
  readonly notes?: string;
  readonly image?: string;
  readonly campaign?: Campaign;
  readonly trophy?: (Trophy | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Award, AwardMetaData>);
  static copyOf(source: Award, mutator: (draft: MutableModel<Award, AwardMetaData>) => MutableModel<Award, AwardMetaData> | void): Award;
}

export declare class Trophy {
  readonly id: string;
  readonly award?: Award;
  readonly content: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Trophy, TrophyMetaData>);
  static copyOf(source: Trophy, mutator: (draft: MutableModel<Trophy, TrophyMetaData>) => MutableModel<Trophy, TrophyMetaData> | void): Trophy;
}