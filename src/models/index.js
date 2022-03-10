// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Agency, Campaign, Award, Trophy } = initSchema(schema);

export {
  Agency,
  Campaign,
  Award,
  Trophy
};