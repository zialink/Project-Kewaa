import Image from "next/image";
import Link from "next/link";

export default function Card({ property, Purchase, disabled }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      <div className="flex h-full">
        <div className="next-image-wrapper h-full flex-1">
          <Image
            className={`object-cover ${disabled && "grayscale filter"}`}
            src={property.coverImage}
            layout="responsive"
            width="200"
            height="230"
            alt={property.title}
          />
        </div>
        <div className="flex-2 relative p-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            {property.type}
          </div>
          <Link href={`/properties/${property.slug}`}>
            <a className="mt-1 block text-lg font-medium leading-tight text-black hover:underline">
              {property.title}
            </a>
          </Link>
          <p className="mt-2 text-gray-500">
            {property.description.substring(0, 80)}...
          </p>
          {Purchase && <Purchase />}
        </div>
      </div>
    </div>
  );
}
