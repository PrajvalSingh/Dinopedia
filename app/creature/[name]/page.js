import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const getData = async (name) => {
    let data;

    try {
        data = (await axios.get(`https://dinopedia-api.cyclic.app/authorised_request/creature/${name}`)).data;
    } catch (err) {
        console.error("Error fetching creature data: ", err);
    }

    return data;
}

export default async function Page({ params }) {
    const data = await getData(params.name);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image src={`/${params.name}2.png`} width={500} height={100} alt={`${params.name} Fossil`} />

            <br />

            <p className="text-green-400">Time Period: {data.age}</p>
            <p className="text-green-400">Diet: {data.diet}</p>
            <p className="text-green-400">Meaning: {data.meaning}</p>
            <br />
            <p>{data.data}</p>

            <div className="fixed top-0 right-0 p-4 text-right text-sm text-gray-400">
                <Link href="/" className="hover:text-blue-400">Go to Home</Link>
            </div>
        </div>
    );
}