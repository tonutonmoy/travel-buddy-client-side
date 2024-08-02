import VideoCalling from "@/component/VideoCalling/VideoCalling";

const page = ({params}:any) => {

    console.log(params?.id,'ssss')
    console.log('helo')


  return (
    <div>
      <VideoCalling id={params?.id}/>
    </div>
  );
};

export default page;