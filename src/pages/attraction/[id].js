import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../../components/Button";

const ShowPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [attraction, setAttraction] = useState({});
  const { name, image, location, description, mapURL } = attraction;

  useEffect(() => {
    const fetchAttractionDetails = async () => {
      const response = await fetch(`/api/attraction/${id}`);
      const foundAtttraction = await response.json();
      setAttraction(foundAtttraction);
    };
    fetchAttractionDetails();
  }, [id]);

  const handleDelete = async () => {
    await fetch(`/api/attraction/${id}`, {
      method: "POST",
    });
    console.log("triggered");
    router.push("/");
  };

  return (
    <div className="detail-page">
      <Button text={"Back"} type={"back"} pageURL={"/"} />

      <div className="detail-card">
        <Image
          src={image}
          // src="/logo5.png"
          alt={name}
          width={500}
          height={500}
        />

        <section className="detail-sec">
          <div className="">
            <h1>{name}</h1>
            <p>located in {location}</p>
          </div>
          <p>{description}</p>

          <div className="btn-container">
            <Button
              text={`check ${name} on maps`}
              type={"map"}
              pageURL={mapURL}
            />

            <button className="btn-delete" onClick={() => handleDelete(id)}>
              <span className="text">Delete {name}</span>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                </svg>
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShowPage;
