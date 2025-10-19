'use client';

import { decrement, increment } from '@/app/redux/slices/counter-slice';
import { RootState } from '@/app/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../ui/button';


function CounterComponent() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='w-[40%]'>
            <h2 className='text-center mb-[100px]'>{count}</h2>
            <div className='flex justify-between'>
                <Button onClick={() => dispatch(increment())} size='default' color='outlined'>Increment</Button>
                <Button onClick={() => dispatch(decrement())} size='default' color='destructive'>Decrement</Button>
                {/* <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Increment</button> */}
            </div>
        </div>
    </div>
  )
}

export default CounterComponent