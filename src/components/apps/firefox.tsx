import Window from "@/components/window";
import { useState } from "react";

export default function Firefox() {
  const [url, setUrl] = useState("https://google.com/webhp?igu=1");
  
  return (
    <Window title="Firefox" app="firefox">
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} style={{width: "100%"}}></input>
      <iframe src={url}></iframe>
    </Window>
  )
}