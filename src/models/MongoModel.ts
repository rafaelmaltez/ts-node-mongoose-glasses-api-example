import IModel from "../interfaces/IModel";
import { Model } from 'mongoose';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>

  constructor(model: Model<T>) {
    this._model = model
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj })
  }

  public async readOne(_id: string): Promise<T | null> {
      return this._model.findOne({ _id })
  }
}

export default MongoModel;
