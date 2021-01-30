import axios from "axios";
import { BASE_URL, Job, NO_JOBS_FOUND } from "../constants";

export const fetchData = async (queryField: string, queryContent: string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${queryField}=${queryContent}`
    );
    return data.length === 0 ? NO_JOBS_FOUND : data;
  } catch (e) {
    console.error(e);
  }
};
