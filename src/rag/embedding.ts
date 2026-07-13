import { embed, embedMany } from 'ai';
import { EmbeddingModel, LargeEmbeddingModel } from './model';

/**
 * Returns the embedding vector for the given text using the default embedding model.
 *
 * @param text - The string to generate an embedding vector for.
 * @returns A promise resolving to the embedding vector (array of numbers).
 *
 * @example
 * const embedding = await getTextEmbedding("Hello world");
 */
// : Promise<number[]> 
export const getTextEmbedding = async (text: string)=> {
    const {embedding} = await embed({
        model: EmbeddingModel,
        value: text,
        providerOptions: {
            google: {   
                // Set this to your desired size (e.g., 768 or 1536)
                outputDimensionality: 768, 
            },
        },
    });
    return embedding;
};

export const getBatchTextEmbeddings = async (request: string[]) => {
    const { embeddings} = await embedMany({
        model: EmbeddingModel,
        values: request,
        maxRetries: 2,
        maxParallelCalls: 3,
        providerOptions: {
            google: {
                // 👇 Set this to your desired size (e.g., 768 or 1536)
                outputDimensionality: 768, 
            },
        },
    })
    return embeddings;
}


export const getTextEmbeddingLarge = async (text: string): Promise<number[]> => {

    const MAX_TOKEN_LIMIT = 8000;
    const tokens = text.split(" ").length;
    if (tokens > MAX_TOKEN_LIMIT) {
        throw new Error(`Text is too long. Maximum token limit is ${MAX_TOKEN_LIMIT}.`);
    }


    const { embedding } = await embed({
        model: LargeEmbeddingModel,
        value: text
    });

    return embedding;
};



// ---------------------------------------------------------------------------------------------------  //

// import { embed } from 'ai';
// import { EmbeddingModel, LargeEmbeddingModel } from './model';
// import { aiTelemetry } from './telemetry';

// /**
//  * Returns the embedding vector for the given text using the default embedding model.
//  *
//  * @param text - The string to generate an embedding vector for.
//  * @returns A promise resolving to the embedding vector (array of numbers).
//  *
//  * @example
//  * const embedding = await getTextEmbedding("Hello world");
//  */
// export const getTextEmbedding = async (text: string): Promise<number[]> => {
//     const { embedding } = await embed({
//         model: EmbeddingModel,
//         value: text,
//         experimental_telemetry: aiTelemetry('embedding'),
//         providerOptions: {
//             azure: {
//                 dimensions: 1536,
//             }
//         }
//     });
//     return embedding;
// };


// export const getTextEmbeddingLarge = async (text: string): Promise<number[]> => {

//     const MAX_TOKEN_LIMIT = 8000;
//     const tokens = text.split(" ").length;
//     if (tokens > MAX_TOKEN_LIMIT) {
//         throw new Error(`Text is too long. Maximum token limit is ${MAX_TOKEN_LIMIT}.`);
//     }


//     const { embedding } = await embed({
//         model: LargeEmbeddingModel,
//         value: text,
//         experimental_telemetry: aiTelemetry('embedding'),
//     });

//     return embedding;
// };