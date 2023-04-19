import React from 'react'

const Cart = () => {


  return (
    <div className='w-full bg-white text-black'>
      <div className='flex justify-between'>
        <p className='font-semibold text-2xl'>Shopping Cart</p>
        <p className='text-[red] underline'>Remove all</p>
      </div>

      {/* tr */}
      <div className='w-full flex gap-20'>
        <div className='h-[20em] w-[15em]'>
          <img alt='g' className='w-full h-full' src='https://images.bwbcovers.com/037/The-Book-Thief-Zusak-Markus-9780375842207.jpg' ></img>
        </div>

        <div>
          <h4>Fanta</h4> 
          <small>250ml</small>

        </div>

        <div className='flex gap-8'>
          <div className='rounded-[50%] w-[3em] h-[3rem] bg-slate-400 flex justify-center items-center size-2'>
            +

          </div>
          <p> {"qty"}</p>
          
          <div className='rounded-[60%] w-[3em] h-[3rem] bg-slate-500 flex justify-center items-center size-2'>
            -

          </div>

        </div>

        <div>
            <p>$2.99</p>
            <p className='underline text-blue-300'>save for later</p>
            <p className='underline text-red-300'>Remove</p>
          </div>



      </div>



      <hr className='ml-[30%]'></hr>


      <div className='flex justify-end'>
        <div>
          <div className='flex gap-20'>
            <div>
              <p className='text-lg'>Sub-Total</p>
              <small>2 items</small>

            </div>
            <div className='flex items-center text-2xl '>
              <b>$6.18</b>

            </div>

          </div>
          <div>
            <button className='rounded-lg bg-blue-300 p-2 w-full'>Checkout</button>
          </div>
        </div>

      </div>

      
      </div>
  )
}

export default Cart