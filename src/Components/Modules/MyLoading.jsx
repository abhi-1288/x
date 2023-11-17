/* eslint-disable react/prop-types */
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Loading(props) {
  return (

    <div className='flex flex-col w-full '>
      <h1 className="text-2xl text-white italic underline my-3 p-2 text-center"> /{props?.title} </h1>

      <div className="flex justify-center items-center">
        <Stack spacing={1} className='p-2 space-y-3'>
          <Skeleton variant="rounded" animation="wave" width={600} height={60} sx={{ border: 1, bgcolor: "grey.900" }} />
          <Skeleton variant="rounded" animation="wave" width={600} height={60} sx={{ border: 1, bgcolor: "grey.900" }} />
          <Skeleton variant="rounded" animation="wave" width={600} height={60} sx={{ border: 1, bgcolor: "grey.900" }} />
          <Skeleton variant="rounded" animation="wave" width={600} height={60} sx={{ border: 1, bgcolor: "grey.900" }} />
          <Skeleton variant="rounded" animation="wave" width={600} height={60} sx={{ border: 1, bgcolor: "grey.900" }} />
        </Stack>
      </div>

    </div>
  );
}


{/* <div className='flex flex-col w-full '>
      <h1 className="text-2xl text-white italic underline my-3 p-2 text-center"> /Instagram &#10629; { data.length || "counting" } &#10632; </h1>
      <div className="absolute md:right-10 md:top-20 bottom-10 right-8">
        <Link to="/instagramform">
          <MyFab>
            <AddIcon />
          </MyFab>
        </Link>
      </div>
      
      <div className='h-96 mt-8 overflow-y-auto'>
        {data.map((account) => (
          <div key={account._id} className='p-2 space-y-3'>
            <MyAccordion for="instagram" data={data} setData={setData} email={account.email} emailOrUsername={account.emailOrUsername} username={account.username} password={account.password} id={account._id} />
          </div>
        ))}
      </div>
    </div> */}