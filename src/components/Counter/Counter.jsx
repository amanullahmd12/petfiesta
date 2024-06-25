import './Counter.css'

import CountUp, { useCountUp } from 'react-countup';
function Counter() {
    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });
  return (
       <div className='counter fw-bolder text-white'>
<div className="row mb-5">
<div className="col text text-center m-3">

            <CountUp end={10000} enableScrollSpy />+
            <br />
            Visitors
            </div>
<div className='col text text-center m-3'>
<CountUp end={40} enableScrollSpy />+
<br />
Brands
</div></div>
         
            </div>

  )
}

export default Counter