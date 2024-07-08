import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config)
  const resData = awaitresponse.json();

  if(!response.ok) {
    throw new Error(resData.message || 'Somgthing went wrong. failed to ')
  }

  return resData
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] =  useState(false)
  const [error, setError] = useState()

  const sendRequest = useCallback(
    async function sendRequest() {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, config);

        setData(resData)
      } catch (error) {
        setError(error.message || 'Someting went wrong!');
      }
      setIsLoading(false);
    }, [url, config])

  useEffect(() => {
    if(config && (config.method === 'GET' || !config.method) || !config) {
      sendRequest();
    }
  }, [sendRequest, config])

  return {data, isLoading, error, sendRequest}
}