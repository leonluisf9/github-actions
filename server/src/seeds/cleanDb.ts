import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const model = models[modelName];

    // Safely check if model and its db connection exist
    if (!model?.db?.db) {
      throw new Error(`Model or database connection not found for ${modelName}`);
    }

    const collections = await model.db.db.listCollections({ name: collectionName }).toArray();

    if (collections.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
