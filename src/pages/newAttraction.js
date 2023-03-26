import Button from "../../components/Button";
import Form from "../../components/Form";

const newAttraction = () => {
  return (
    <div className="newAttraction-page">
      <Button text={"< Back"} type={"back"} pageURL={"/"} />
      <Form />
    </div>
  );
};

export default newAttraction;
