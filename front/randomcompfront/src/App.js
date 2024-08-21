import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {

  // state(état, données)
  const [url, setUrl] = useState(null);
  const [urlItem, setItemUrl] = useState(null);

  async function getUrl() {
    try {
      const response = await axios.get("http://localhost:3000/champions");
      setUrl(response.data);
      const responseItem = await axios.get("http://localhost:3000/final-items");
      setItemUrl(responseItem.data);
    } catch (error) {
      console.error("Erreur pendant la récupération des URLS")
    }
  }  

  // comportements
  const generate = () => {
    getUrl();
  }

  // affichage (render)
  return (
    <div className="min-h-screen bg-slate-300">
      {/* déclaration d'une function qui s'auto execute, elle vérifie si c'est bien un array et s'éxecute que si l'array est de length 5. */}
      {(() => {
        if (Array.isArray(url) && url.length >= 5) {
          return (
            <div className="pt-4 pb-8 pl-24 pr-24">
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/top.png" alt="top"></img>
                <img className="p-2 w-28" id="top" src={url[0]} alt="Champion" />
                <img src={urlItem["stuff"]["lane1"][0]}></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/jungle.png" alt="top"></img>
                <img className="p-2 w-28" id="jungle" src={url[1]} alt="Champion" />
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/mid.png" alt="top"></img>
                <img className="p-2 w-28" id="mid" src={url[2]} alt="Champion" />
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/bot.png" alt="top"></img>
                <img className="p-2 w-28" id="bot" src={url[3]} alt="Champion" />
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/support.png" alt="top"></img>
                <img className="p-2 w-28" id="support" src={url[4]} alt="Champion" />
              </div>
            </div>
          );
        } else {
          return (
            <div className="pt-4 pb-8 pl-24 pr-24">
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/top.png" alt="top"></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/jungle.png" alt="top"></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/mid.png" alt="top"></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/bot.png" alt="top"></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/support.png" alt="top"></img>
              </div>
            </div>
          );
        }
      })()}
      <div className="pl-24 pr-24 text-center text-slate-300">
        <button className="bg-slate-500 py-2 px-4 rounded" onClick={generate}>Generate a Team Composition</button>
      </div>
    </div >
  )
}