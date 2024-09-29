import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the Delivery App!</h1>
      </div>
    </>
  )
}

export default Home;