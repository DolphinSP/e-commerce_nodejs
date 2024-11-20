import { Service } from "typedi";
import UserModel, {IUser, User} from "../db/models/userModel";

@Service()
export class UserRepository {

  async save(partner: User): Promise<IUser> {
    const newPartner = new UserModel(partner);
    return newPartner.save();
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return UserModel.findOne({ email });
  }
}
