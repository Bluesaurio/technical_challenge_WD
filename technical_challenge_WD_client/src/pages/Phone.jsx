import axios from "axios";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

function Phone() {
  const [phoneData, setPhoneData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phones");
      setPhoneData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          paddingTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BeatLoader color="lightblue" size={20} />
      </div>
    );
  }
  return (
    <div>
      <h3>Pagina de phones</h3>
    </div>
  );
}

export default Phone;
