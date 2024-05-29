import Head from 'next/head';

const MissionPage = () => {
  return (
    <div className="bg-[#e9e9dd] p-8 font-sans">
      <Head>
        <title>Mission Dashboard</title>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="border-4 border-black">
        <div className="flex justify-between items-baseline">
          <div className='flex flex-cols-2 '>
            <div><h1  style={{ fontSize: '14rem' }}className="font-bold text-black" >MISSION</h1></div>
            
            <div className='flex justify-center pt-10 pl-4'>
              <img src='/star.png' className='w-[500px] h-[14rem]'/>
            </div>
            
          </div>
          
        </div>
        <img src="/top.png" alt="" className='mb-4 pb-4 w-full' style={{margin:0}}/>
        <div className="grid grid-cols-2 gap-4">
          <div><img src='/img1.jpg' className='h-[450px] w-full pl-4'/></div>
          <div className='flex flex-cols-2'>
              <div >
                <img src='/img3.jpg' className='h-[450px] w-[400px] pr-4'/>
              </div>
              <div>
                <p className='text-black h-[146px]'>incd nke jdcnenk nkmefden edijfericnf3r jedimernjcnrec niednjrcnerc ndi3nefcjne3fc thdid dhbedj ed heben bndbeb hudeb behbwdhcb bdehbce cebchebde ce cebcecbebcnke jdcnenk nkmefden edijfericnf3r jedimernjcnrec niednjrcnerc ndi3nefcjne3fc thdid dhbedj ed heben bndbeb hudeb behbwdhcb bdehbce cebchebde ce cebcecbebc</p>
                <div className='pt-4'><img src='/img2.png' className='h-[300px] w-full '/></div>
              </div>
          </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className='pl-4'>
              <img src='/position.png' className='w-full'/>
              <div className='flex flex-cols-2'>
                <img src='/img6.jpg' className='h-[200px] pt-4'/>
                <div>
                  <p className='text-black pl-2 pt-4'>lorem ipsum bdbchbd bbeudbewf ebuebfew bbbde fhb jndcjdbcd neucbnewc cebefcbeshc hweb lorem ipsum bdbchbd bbeudbewf ebuebfew bbbde fhb jndcjdbcd neucbnewc cebefcbeshc </p>
                  <img src="/img7.jpg" alt="" className='pl-2 w-full pt-2 h-[120px]' />
                </div>
              </div>
            </div>
            <div className='pt-1'>
              <img src="/Warning.png" alt="" className='h-full w-full pr-4'/>
            </div>
            <div>

            </div>
          </div>
          <div className="flex justify-between items-baseline border-t-4 border-black ">
          <div className="grid grid-cols-2 gap-4">
            <div className='flex flex-cols-2'>
              <img src='/side-cuts.png' className='pr-4 h-full'/>
              <h4 className='text-black'>iche nbruebc ubfurhfcr4 rufhrufcbrcurhr grufcgrc gbhfr hcrbbr fub jbdhbc bebc ebuebcechecb  bcebc bce ceb cn cbeuc c xbce3 cehcb cebc 3c3c c ic3c 3</h4>
            </div>
            <div>
              <img src='/design.png' className='w-full'/>
            </div>
          </div>
          </div>
          
          
      </div>
    </div>
  );
};

export default MissionPage;




