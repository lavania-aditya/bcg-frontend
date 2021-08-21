import axios from "axios";
import hostname from "../Utils/Api_Config";

export class PoliciesService {
  static GetAllPolicies = async () => {
    return axios.get(`${hostname}/get-all-policies`);
  };

  static UpdateSinglePolicy = async (request) => {
    return axios.patch(`${hostname}/update-user-policy`, request);
  };
}
