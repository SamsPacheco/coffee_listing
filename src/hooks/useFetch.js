import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
  });

  useEffect(() => {

    getFetch();

  }, []);

  const getFetch = async() => {

    const resp = await fetch( url );

    //await new Promise( resolve => setTimeout(resolve, 500));

    if(!resp.ok){
      setState({
        data: null,
        isLoading: false,
        hasError: true,
                  error: {
                      code: response.status,
                      message: response.statusText,
                  }
      });
      console.log('Erorr')
      return; // primera obserbacion
    }

    const data = await resp.json();

    setState({
      data: data,
      isLoading: false,
      hasError: false,
    });


  }
  // segunda obserbacion 
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
}


}