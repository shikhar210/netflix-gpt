import OpenAI from 'openai';
import { OPENAI_KEY } from './Constants';

const client = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true
});

export default client;