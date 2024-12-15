import { useRouter } from 'next/router';
import Image from 'next/image';
import shop1 from '../assets/shop1.png';
import shop2 from '../../assets/shop2.png';
import shop3 from '../../assets/shop3.png';
// ... import other products images

const productData = [
    { id: 1, name: " Achieve vibrant color with just one swipe.", price: "Rs. 25,00.00", image: shop1 },
    { id: 2, name: "Feels like a second skin.", price: "Rs. 25,00.00", image: shop2 },
    { id: 3, name: "Blends effortlessly for a flawless finish.", price: "Rs. 25,00.00", image: shop3 },
    // Add other products here
];

const ProductDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    // Ensure the id is a string and not an array
    const productId = Array.isArray(id) ? id[0] : id;

    // Check if the id is valid
    if (!productId) {
        return <div>Loading...</div>;
    }

    const product = productData.find((product) => product.id === parseInt(productId));

    if (!product) return <div>Product not found</div>;

    return (
        <div>
            <h1>{product.name}</h1>
            <Image src={product.image} alt={product.name} width={500} height={500} />
            <p>{product.price}</p>
            <p>Product Description...</p>
            {/* Add more details like specifications, reviews, etc. */}
        </div>
    );
};

export default ProductDetailPage;








