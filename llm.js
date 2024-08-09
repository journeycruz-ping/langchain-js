import { ChatOpenAI } from "@langchain/openai";

import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatOpenAI({
    // modelName: "gpt-4",
    modelName: "gpt-3.5-turbo",
    temperature: 0.7,
    maxTokens: 1000,
    verbose: true,
});

const response = await model.invoke("what color is the moon when viewed from earth?");
console.log(response);