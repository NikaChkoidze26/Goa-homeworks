
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-3xl font-bold">{count}</h1>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          მომატება
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          მოკლება
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          განულება
        </button>
      </div>
    </div>
  );
