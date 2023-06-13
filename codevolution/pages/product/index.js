import Link from "next/link"


function ProductList({productId=100}){
    return <div>

        <Link href="/">Home</Link>

            <h2>
            <Link href="/product/1">
                <a>
                    Product 1
                </a>
            </Link>
            </h2>
           <h2>
           <Link href="/product/2">
                <a>
                    Product 2
                </a>
            </Link>
           </h2>
           <h2>
            <Link href="/product/3" replace> 
            {/* replace prop will replace the current history state instead of adding new url to the stack*/}
                <a>
                    Product 3
                </a>
            </Link>
            </h2>
           <h2>
            <Link href={`/product/${productId}`}>
                <a>
                    Product {productId}
                </a>
            </Link>
            </h2>

     

    </div>
}
export default ProductList