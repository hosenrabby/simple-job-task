import { headers } from "next/headers";
import Link from "next/link";

export default async function ProductPage({ params }) {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`);

    if (!res.ok) {
        return <p className="text-center mt-20 text-xl">Product not found!</p>;
    }

    const product = await res.json();

    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Product Image */}
                <div className="md:w-1/2">
                    <img
                        src={product.productImage}
                        alt={product.productName}
                        className="w-full h-auto object-cover rounded-md shadow"
                    />
                </div>

                {/* Product Details */}
                <div className="md:w-1/2 flex flex-col justify-start">
                    <h1 className="text-4xl font-bold mb-4">{product.productName}</h1>
                    <p className="text-2xl text-red-600 font-semibold mb-6">${product.productPrice}</p>
                    <p className="mb-6 text-gray-700">{product.productDescription}</p>
                    <div className="flex gap-3">
                        <button className="py-3 px-6 bg-red-600 text-white font-semibold rounded-md shadow hover:shadow-lg transition cursor-pointer">
                            Add to Cart
                        </button>
                        <Link href={`/`} className="py-3 px-6 bg-green-600 text-white font-semibold rounded-md shadow hover:shadow-lg transition cursor-pointer">
                            Back To Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
