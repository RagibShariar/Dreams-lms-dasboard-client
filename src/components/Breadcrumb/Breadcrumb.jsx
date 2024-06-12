

const Breadcrumb = ({ title }) => {
  return (
    <>
      <div className='bg-banner py-20 text-center'>
        <div className=''>
          <h2 className='mb-4 text-4xl font-bold text-[#002058] capitalize'>{ title}</h2>
          {/* <h2 className='mb-4 text-4xl font-bold text-[#002058]'>Dashboard</h2> */}
        </div>
        <div>
          <p>Home <span>-</span> Dashboard</p>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;