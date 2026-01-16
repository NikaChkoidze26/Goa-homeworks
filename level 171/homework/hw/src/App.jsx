const App = () => {
  return (
    <main className="">

      <div className="
          w-40 h-40 bg-red-500
          hover:bg-blue-500
          hover:rounded-full
          duration-300
        "
      >
        hello world
      </div>

      <div className="
          w-40 h-40 bg-blue-500 
          hover:bg-green-500
          hover:w-[75px]
          active:bg-red-500"
      >
        hello world
      </div>

      <div className="
          w-40 h-40 bg-green-500
          hover:bg-red-500
          active:tracking-[4px]
          duration-300
         focus:border-blue-900

        ">hello world</div>

    </main>
  )
}