export default function Maintenance() {
  return (
    <section className=''>
      <div className='grid-cols-2 gap-8 content-center py-8 px-4 mx-auto max-w-screen-xl md:grid lg:py-16 lg:px-6'>
        <div className='self-center'>
          <h1 className='mb-4 text-2xl font-bold text-black'>500 Internal Error</h1>
          <p className='mb-4 text-3xl tracking-tight font-bold lg:mb-10 md:text-4xl text-black'>
            Whoops! That page doesn’t exist.
          </p>
          <p className='mb-4 text-black/80 '>Here are some helpful links:</p>
          <ul className='flex items-center space-x-4 text-black/80 '>
            <li>
              <a href='#' className='underline underline-offset-4 hover:text-primary-400'>
                Support
              </a>
            </li>
            <li>
              <a href='#' className='underline underline-offset-4 hover:text-primary-400'>
                Search
              </a>
            </li>
          </ul>
        </div>
        <img
          className='hidden mx-auto mb-4 md:flex'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/500/500.svg'
          alt='500 Server Error'
        />
      </div>
    </section>
  )
}
