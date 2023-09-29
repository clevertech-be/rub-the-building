export default function NotFound() {
  return (
    <section className=''>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <img
            className='mx-auto mb-4'
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg'
            alt='404 Not Found'
          />
          <h1 className='mb-4 text-2xl font-extrabold text-black'>404 Not Found</h1>
          <p className='mb-10 text-3xl tracking-tight font-bold text-black md:text-4x'>
            Whoops! That page doesn’t exist.
          </p>
          <p className='mb-4 text-black/80 '>Here are some helpful links instead:</p>
          <ul className='flex justify-center items-center space-x-4 text-primary-400 '>
            <li>
              <a
                href='#'
                className='underline underline-offset-4 hover:text-primary-600 transition-all ease-in-out duration-300'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='underline underline-offset-4 hover:text-primary-600 transition-all ease-in-out duration-300'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
