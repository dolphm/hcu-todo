import * as axiosInstance from "axios";
import {isTest} from "../utils/constants";

export const axios = isTest
	? (jest.mock("axios") as typeof axiosInstance)
	: axiosInstance;
