// Local products data with 1000+ products
import productsData from '../public/products-1000.json'

const API_BASE = 'https://fakestoreapi.com'

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  price: number
  original_price: number
  discount_percentage: number
  images: string[]
  category: string
  brand: string
  stock: number
  rating: number | string
  review_count: number
  sold_count: number
  is_daraz_mall: boolean
  free_shipping: boolean
  cash_on_delivery: boolean
  specifications: string
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
}

// Fetch all products (using local 1000+ products)
export async function fetchProducts(): Promise<Product[]> {
  // Return the local products data with 1000+ items
  return productsData as Product[]
}

// Fetch product by ID
export async function fetchProductById(id: string): Promise<Product> {
  const products = await fetchProducts()
  const product = products.find(p => p.id.toString() === id)
  if (!product) throw new Error('Product not found')
  return product
}

// Fetch all categories
export async function fetchCategories(): Promise<string[]> {
  const products = await fetchProducts()
  const categories = [...new Set(products.map(p => p.category))]
  return categories
}

// Fetch products by category
export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  const products = await fetchProducts()
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase())
}

// Search products
export async function searchProducts(query: string): Promise<Product[]> {
  const products = await fetchProducts()
  const lowerQuery = query.toLowerCase()
  return products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery) ||
    product.brand.toLowerCase().includes(lowerQuery)
  )
}

// Convert product to our app's product format (already in correct format)
export function convertToAppProduct(product: Product): any {
  return {
    id: product.id.toString(),
    name: product.name,
    slug: product.slug,
    price: product.price,
    original_price: product.original_price,
    images: product.images,
    description: product.description,
    rating: typeof product.rating === 'string' ? parseFloat(product.rating) : product.rating,
    review_count: product.review_count,
    sold_count: product.sold_count,
    is_daraz_mall: product.is_daraz_mall,
    free_shipping: product.free_shipping,
    cash_on_delivery: product.cash_on_delivery,
    category: product.category,
    specifications: product.specifications,
    variants: [
      { id: '1', name: 'Default', price: product.price }
    ]
  }
}
