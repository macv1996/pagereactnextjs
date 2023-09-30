function ViewProduct({ productSelect }) {
  return (
    <>
      <div>
        <div className="flex items-center justify-center ">
          <figure className=" w-full h-80 overflow-auto">
            <img className="w-full h-full rounded-lg object-cover" src={productSelect.images} />
          </figure>
        </div>

        <div className="">
          <p className="text-lg font-medium  text-center"> {productSelect.title}</p>

          <p className="text-lg font-medium border border-black p-2 rounded-lg mb-3 mt-3">
            {' '}
            <span className=" font-bold"> Description: </span> {productSelect.description}
          </p>

          <p className=" flex text-lg  font-bold justify-end "> $ {productSelect.price}</p>
        </div>
      </div>
    </>
  );
}

export { ViewProduct };
