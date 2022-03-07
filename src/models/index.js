// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Award, Agency, AgencyAwards } = initSchema(schema);

export {
  Award,
  Agency,
  AgencyAwards
};