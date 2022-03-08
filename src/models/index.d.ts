import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AwardMetaData = {
  readOnlyFields;
}

type AgencyMetaData = {
  readOnlyFields;
}

type AgencyAwardsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly agencies?: (AgencyAwards | null)[];
  constructor(init: ModelInit<Award>);
  static copyOf(source: Award, mutator: (draft: MutableModel<Award>) => MutableModel<Award> | void): Award;
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
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly awards?: (AgencyAwards | null)[];
  constructor(init: ModelInit<Agency>);
  static copyOf(source: Agency, mutator: (draft: MutableModel<Agency>) => MutableModel<Agency> | void): Agency;
}

export declare class AgencyAwards {
  readonly id: string;
  readonly award: Award;
  readonly agency: Agency;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AgencyAwards, AgencyAwardsMetaData>);
  static copyOf(source: AgencyAwards, mutator: (draft: MutableModel<AgencyAwards, AgencyAwardsMetaData>) => MutableModel<AgencyAwards, AgencyAwardsMetaData> | void): AgencyAwards;
}