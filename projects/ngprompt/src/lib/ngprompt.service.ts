import { Injectable } from '@angular/core';
import { OpenAIApi, Configuration, CreateCompletionResponse } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class NgpromptService {
  private openai: OpenAIApi;
  private model = 'text-davinci-003';
  private configuration = new Configuration({
    apiKey: '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',
  });

  constructor() {
    this.openai = new OpenAIApi(this.configuration);
  }

  async fetchOpenAiInstructions(prompt: string): Promise<string | undefined> {
    const response = await this.openai.createCompletion({
      model: this.model,
      prompt: `Angular instruction for ${prompt}`,
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return response.data.choices[0].text;
  }

  executeInstructions(instructions: string): void {
    // Execute the instructions received from OpenAI API
  }
}
