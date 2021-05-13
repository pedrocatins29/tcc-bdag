import {useQuery} from 'react-query';
import api from '../api/api';

function useApi(route, name) {
  return useQuery(name, async () => {
    const {data} = await api.get(route);
    return data;
  });
}

export default useApi;
