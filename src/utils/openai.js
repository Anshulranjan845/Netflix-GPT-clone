import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey:"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",
  dangerouslyAllowBrowser: true  // This is the default and can be omitted
});

export default openai;