import { Link } from "wouter";
import { type Product } from "@shared/schema";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price / 100);

  return (
    <Link href={`/product/${product.id}`}>
      <motion.div 
        className="group cursor-pointer"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          
          <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <span className="inline-flex items-center text-white text-sm tracking-widest uppercase border-b border-white pb-1">
              View Details <ArrowRight size={14} className="ml-2" />
            </span>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-start">
          <div>
            <h3 className="font-display text-lg text-white font-medium">{product.name}</h3>
            <p className="text-sm text-white/50 uppercase tracking-wider mt-1">{product.category}</p>
          </div>
          <span className="text-primary font-medium font-body">{price}</span>
        </div>
      </motion.div>
    </Link>
  );
}
