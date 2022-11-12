import client from "@/services/config";
export const useRequest = () => {
  const request = {
    get: (
      path : string,
      params = {}
    ) => {
      return client
        .get(path, {          
          params: params,
        })
        .then((res) => res)
        .catch((err) => err);
    }
  };

  return request;
};