// -- AXIOS
import axios, {
  AxiosError,
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
// -- TYPE
// # TYPE IN CASE OF SUCCESS
export type responseSuccess<T> = {
  data: T;
  status: number;
};
// # TYPE IN CASE OF FAILURE
export type responseFailureType = {
  message: string;
  status: number | undefined;
};
// # UPDATE TOKEN TYPE
export type updateToken = {
  data: {
    token: string;
    refreshToken: string;
  };
  status: number;
};
// # TYPE THAT DEFINE THE BASE PROPERTIES
export type properties = {
  BASEURL: string;
  TIMEOUT: number;
};

// # RESPONSE MANAGEMENT
//   @ts-ignore
export type responseSuccessOrFailure = responseSuccess | responseFailureType;
// -- BASE PROPERTIES
import {
  PROPERTIES,
  refreshTokenURL,
  authTokenName,
  refreshTokenName,
} from "./properties";

// # CREATE AXIOS INSTANCE

const axiosInstance = axios.create({
  baseURL: PROPERTIES.BASEURL,
  timeout: PROPERTIES.TIMEOUT,
});

// # CONFIGURATION
const defaultHeaders = {
  Accept: "*/*",
  "Content-type": "application/json; charset=UTF-8",
};

// # INTERCEPTOR FOR REQUEST AND RESPONSE

// REQUEST
axiosInstance.interceptors.request.use(
  (config) => {
    // HERE WILL BE INSERT THE RIGHT TOKEN NAME (n.b: localstorage is used like test but can use all storage)
    //CHECKS THE STORAGE IF THE TOKEN EXIST AND INSERT IT INTO THE HEADER
    const token = localStorage.getItem(authTokenName);
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      } as AxiosRequestHeaders;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE
axiosInstance.interceptors.response.use(
  function (response) {
    //IF RECEIVE RESPONSE OK
    return response;
  },
  // ELSE DO SOME CONTROL AND RETRY
  async function (error) {
    const originalRequest = error.config; //EXTRACT ORIGINAL REQUEST FROM ERROR DATA
    // IF ERROR IS 401 AND THE REQUEST HAS NOT BEEN RESPONSIBLE TRY WITH NEW TOKEN
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const updateToken: updateToken = await updateRefreshToken();
      if (Number(updateToken.status) === 200 && "data" in updateToken) {
        const { token, refreshToken } = updateToken.data;
        localStorage.setItem(authTokenName, token);
        localStorage.setItem(refreshTokenName, refreshToken);
        // NOW RETRY THE REQUEST WITH UPDATE TOKEN
        return axiosInstance(originalRequest);
      }
    }
    // IF THE ERROR IS DIFFERENT RETURN ERROR AND STOP IT
    return Promise.reject(error);
  }
);

// # RESPONSE MANAGEMENT

// HANDLE SUCCESS RESPONSE
async function responseSuccess<T>(
  response: AxiosResponse<T>
): Promise<responseSuccess<T>> {
  return {
    data: response.data,
    status: response.status,
  };
}

// HANDLE FAILURE RESPONSE
async function responseFailure(
  error: AxiosError
): Promise<responseFailureType> {
  return {
    message: error?.message,
    status: error?.response?.status,
  };
}

// # METODS

/**
 * HTTP GET METHOD WITH AXIOS
 * @param resource - THE RESOURCE TO GET
 * @param header - THE HEADER TO PASS IF NEEDED
 * @returns - THE RESPONSE
 * @example
 * const response = await get('users', { Authorization: `Bearer ${token}` });
 *
 */
export async function get(
  resource: string,
  header?: AxiosHeaders
): Promise<responseSuccessOrFailure> {
  const options: AxiosRequestConfig = {
    headers: header ? { ...defaultHeaders, ...header } : defaultHeaders,
  };

  try {
    const response = await axiosInstance.get(resource, options);
    return responseSuccess(response);
  } catch (error) {
    return responseFailure(error as AxiosError);
  }
}

/**
 * HTTP POST METHOD WITH AXIOS
 * @param resource - THE RESOURCE TO SEND REQUEST
 * @param obj - THE OBJECT THAT CONTAINS THE DATA TO BE SAVED
 * @param header - THE HEADER TO PASS IF NEEDED
 * @returns - THE RESPONSE
 * @example
 * const response = await post('users', newUserData,{ Authorization: `Bearer ${token}` });
 *
 */
export async function post(
  resource: string,
  obj: object,
  header?: AxiosHeaders
): Promise<responseSuccessOrFailure> {
  const options: AxiosRequestConfig = {
    headers: header ? { ...defaultHeaders, ...header } : defaultHeaders,
  };

  try {
    const response = await axiosInstance.post(resource, obj, options);
    return responseSuccess(response);
  } catch (error) {
    return responseFailure(error as AxiosError);
  }
}

/**
 * HTTP PUT METHOD WITH AXIOS
 * @param resource - THE RESOURCE TO SEND REQUEST WITH TARGET ID
 * @param obj - THE OBJECT THAT CONTAINS THE DATA TO BE UPDATE
 * @param header - THE HEADER TO PASS IF NEEDED
 * @returns - THE RESPONSE
 * @example
 * const response = await put('user/1', updateUserData,{ Authorization: `Bearer ${token}` });
 *
 */
export async function put(
  resource: string,
  obj: object,
  header?: AxiosHeaders
): Promise<responseSuccessOrFailure> {
  const options: AxiosRequestConfig = {
    headers: header ? { ...defaultHeaders, ...header } : defaultHeaders,
  };
  try {
    const response = await axiosInstance.put(resource, obj, options);
    return responseSuccess(response);
  } catch (error) {
    return responseFailure(error as AxiosError);
  }
}

/**
 * HTTP DELETE METHOD WITH AXIOS
 * @param resource - THE RESOURCE TO SEND REQUEST WITH TARGET ID
 * @param header - THE HEADER TO PASS IF NEEDED
 * @returns - THE RESPONSE
 * @example
 * const response = await deleteMethod('user/1',{ Authorization: `Bearer ${token}` });
 *
 */
export async function deleteMethod(
  resource: string,
  header?: AxiosHeaders
): Promise<responseSuccessOrFailure> {
  const options: AxiosRequestConfig = {
    headers: header ? { ...defaultHeaders, ...header } : defaultHeaders,
  };

  try {
    const response = await axiosInstance.delete(resource, options);
    return responseSuccess(response);
  } catch (error) {
    return responseFailure(error as AxiosError);
  }
}

// # UPDATE TOKEN REQUEST
async function updateRefreshToken(): Promise<responseSuccessOrFailure> {
  return await post(refreshTokenURL, {
    refreshToken: localStorage.getItem(refreshTokenName),
  });
}
