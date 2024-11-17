import { Inject, Service } from "typedi";

import AdvertisingModel, { Advertising } from "../db/models/advertising";

@Service()
export class AdvertisingRepository {
  constructor(
    @Inject("AdvertisingModel")
    private advertisingModel: typeof AdvertisingModel
  ) {}

  async save(advertising: Advertising): Promise<Advertising> {
    const newAdvertising = new this.advertisingModel(advertising);
    return newAdvertising.save();
  }
}
