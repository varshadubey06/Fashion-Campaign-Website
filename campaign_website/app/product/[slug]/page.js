import { notFound } from "next/navigation";
import { products } from "../../../data/products";
import ProductDetailView from "../../../components/ProductDetailView";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Girls Who Build",
    };
  }

  return {
    title: `${product.name} — ₹${product.price} | Girls Who Build`,
    description: `${product.slogan} - ${product.description}`,
    openGraph: {
      title: `${product.name} — Girls Who Build`,
      description: product.slogan,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 1000,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
