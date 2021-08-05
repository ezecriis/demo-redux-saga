import { useEffect } from 'react';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch } from 'react-redux';
import { name, reducer } from './slice';
import saga from './saga';

export default function usePokemons() {
  const dispatch = useDispatch();
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga });
  useEffect(() => {
    return function cleanup() {};
  }, [dispatch]);
}
