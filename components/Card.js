import Image from "next/image";
import Link from "next/link";

export default function Card({ name }) {
  return (
    <>
      <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-3 my-2">
        {/* Use 320x224px image */}
        <Image className="object-cover w-full h-56" src={`/${name}.png`} width={320} height={224} alt={`${name} Image`}/>

        <div className="py-5 text-center">
          <Link href={`/creature/${name}`} className="block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" role="link">{name}</Link>
        </div>
      </div>
    </>
  )
}
