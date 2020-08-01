import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { configConnection } from '../store/reducers/connection'


export default function useWebsocket() {
  const dispatch = useDispatch()
  const { connected } = useSelector(store => store.connection)


  useEffect(() => {
    dispatch(configConnection())
  }, [dispatch]);

  return { connected };
}
