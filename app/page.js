import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";

async function getNames() {
  let names;

  try {
    names = (await axios.get("https://dinopedia-api.cyclic.app/authorised_request/names")).data;
  } catch (err) {
    console.error(`Error fetching names of creatures: ${err}`);
  }

  return names;
}

export default async function () {
  const names = await getNames();

  return (
      <div className="flex flex-wrap">
        {names.map((name) => (
          <Card name={name} key={name} />
        ))}
      </div>
  )
}
