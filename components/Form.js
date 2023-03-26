import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const myFormData = new FormData(event.target);
    const formDataObj = Object.fromEntries(myFormData.entries());

    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(formDataObj),
    });
    router.push("/");
  };

  return (
    <div className="card-form">
      <form onSubmit={handleSubmit} className="form">
        <div className="group">
          <input placeholder="" id="name" name="name" type="text" />
          <label htmlFor="name">Name:</label>
        </div>

        <div className="group">
          <label htmlFor="image">Image:</label>
          <input id="image" name="image" type="text" />
        </div>

        <div className="group">
          <label htmlFor="location">Location:</label>
          <input id="location" name="location" type="text" />
        </div>

        <div className="group">
          <label htmlFor="map">Map:</label>
          <input id="map" name="mapURL" type="text" />
        </div>

        <div className="group">
          <label htmlFor="description">Description:</label>
          <textarea
            placeholder=""
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button>Submit Place</button>
      </form>
    </div>
  );
};

export default Form;
