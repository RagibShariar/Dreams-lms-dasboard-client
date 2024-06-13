

const Breadcrumb = ({ title }) => {
  let newStr = title.replace(/\//g, ' > ');
  let newStr2;
  if (newStr.startsWith(' >')) {
     newStr2 = (newStr.slice(2).trim());
    }


  return (
    <>
      <div className='bg-banner py-20 text-center'>
        <div className=''>
          <h2 className='mb-4 text-4xl font-bold text-[#002058] capitalize'>{newStr2}</h2>
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