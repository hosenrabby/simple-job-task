import Link from "next/link";

export default async function HomePage() {
  // Fetch products from API route or directly from MongoDB
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const products = await res.json()
  // console.log(products)
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#C2EFD4] py-12 pt-24 -mt-[90px]">
        <div className="flex mx-auto max-w-[1440px] justify-between">
          <div className="w-[649px] h-[632px]">
            <h1 className="text-[#224f34] text-[86px] font-bold font-['Rufina']">
              Discover and Find Your Own Fashion!
            </h1>
            <p className="mt-5 mb-12 text-[#267d49] text-2xl font-medium font-['Poppins'] leading-[50px]">
              Explore our curated collection of stylish clothing and accessories
              tailored to your unique taste.
            </p>
            <button className="px-16 py-5 text-white text-xl font-medium font-['Poppins'] uppercase bg-[#224e34] rounded-[3px] shadow-[6px_33px_59px_0px_rgba(0,0,0,0.30)]">
              Explore Now
            </button>
          </div>
          <img
            className="w-[570px]"
            src="https://iili.io/3Bw8BSt.png"
            alt="Fashion Banner"
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white">
        <div className="w-9/12 mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="border-green-900 rounded-lg p-4 shadow hover:shadow-lg hover:shadow-green-300 transition"
              >
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-2 font-semibold">{product.productName}</h3>
                <p className="text-red-600 font-bold">${product.productPrice}</p>
                <Link href={`${product._id}`}>
                  <button className="py-1 px-2 rounded-sm text-sm text-gray-600 border border-green-600 cursor-pointer transition duration-300 hover:text-green-600 hover:border-green-600 hover:shadow-md hover:shadow-gray-600/50">
                    Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
