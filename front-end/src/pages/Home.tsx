import axios from "axios";
import { useState } from "react";
import { Card } from "./HomeStyled";

export function Home() {
  const [password, setPassword] = useState("");
  const [inputValue, setInputValue] = useState("");
  const API_URL = process.env.VITE_APP_BACKEND_URL;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  async function generatePassword() {
    try {
      const { data } = await axios.post(`${API_URL}/generate-password`, {
        length: inputValue,
      });
      setPassword(data.password);
    } catch (err: any) {
      switch (err.response.status) {
        case 422:
          alert(err.response.data.error);
          break;
        case 500:
          alert(err.response.data);
          break;
        default:
          alert("Unknown error");
      }
    }
  }

  return (
    <Card>
      <h1>Password Generator</h1>
      <div>
        <input
          type="number"
          id="tamanho"
          name="tamanho"
          placeholder="Pass length"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={generatePassword}>Generate</button>
      </div>

      <h2>{password}</h2>
    </Card>
  );
}
