import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {

  // state(état, données)
  const [url, setUrl] = useState(null);
  const [urlItem, setItemUrl] = useState(null);
  const [loading, setLoading] = useState(null);
  async function getUrl() {
    try {
      const response = await axios.get("http://localhost:3000/champions");
      setUrl(response.data);
      const responseItem = await axios.get("http://localhost:3000/final-items");
      setItemUrl(responseItem.data);
    } catch (error) {
      console.error("Erreur pendant la récupération des URLS")
    } finally {
      setLoading(false);
    }
  }

  // comportements
  const generate = async () => {
    await getUrl();
  }

  // affichage (render)
  return (
    <div className="min-h-screen bg-slate-300">
      {loading ? (
        // Affichage de l'indicateur de chargement pendant la récupération des données
        <div className="text-center text-slate-700">Chargement en cours...</div>
      ) : (
        // Affichage du contenu principal si les données sont récupérées
        <>
          {Array.isArray(url) && url.length >= 5 && urlItem ? (
            <div className="pt-4 pb-8 pl-24 pr-24">
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/top.png" alt="top"></img>
                {/* CHAMPION */}
                <img className="p-2 w-28" id="top" src={url[0]} alt="Champion" />
                {/* BOOTS */}
                <img className="p-2 w-28" src={urlItem.boots[0]} alt="boots"></img>
                {/* ITEMS */}
                <img className="p-2 w-28" src={urlItem.stuffPng.lane1[0]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane1[1]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane1[2]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane1[3]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane1[4]} alt="item"></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/jungle.png" alt="jungle"></img>
                {/* CHAMPION */}
                <img className="p-2 w-28" id="jungle" src={url[1]} alt="Champion" />
                {/* BOOTS */}
                <img className="p-2 w-28" src={urlItem.boots[1]} alt="boots"></img>
                {/* ITEMS */}
                <img className="p-2 w-28" src={urlItem.stuffPng.lane2[0]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane2[1]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane2[2]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane2[3]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane2[4]} alt="item"></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/mid.png" alt="mid"></img>
                {/* CHAMPION */}
                <img className="p-2 w-28" id="mid" src={url[2]} alt="Champion" />
                {/* BOOTS */}
                <img className="p-2 w-28" src={urlItem.boots[2]} alt="boots"></img>
                {/* ITEMS */}
                <img className="p-2 w-28" src={urlItem.stuffPng.lane3[0]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane3[1]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane3[2]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane3[3]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane3[4]} alt="item"></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/bot.png" alt="bot"></img>
                {/* CHAMPION */}
                <img className="p-2 w-28" id="bot" src={url[3]} alt="Champion" />
                {/* BOOTS */}
                <img className="p-2 w-28" src={urlItem.boots[3]} alt="boots"></img>
                {/* ITEMS */}
                <img className="p-2 w-28" src={urlItem.stuffPng.lane4[0]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane4[1]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane4[2]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane4[3]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane4[4]} alt="item"></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/support.png" alt="support"></img>
                {/* CHAMPION */}
                <img className="p-2 w-28" id="support" src={url[4]} alt="Champion" />
                {/* BOOTS */}
                <img className="p-2 w-28" src={urlItem.boots[4]} alt="boots"></img>
                {/* SUPP ITEM */}
                <img className="p-2 w-28" src={urlItem.suppFinalItem} alt="item-supp"></img>
                {/* ITEMS */}
                <img className="p-2 w-28" src={urlItem.stuffPng.lane5[0]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane5[1]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane5[2]} alt="item"></img>
                <img className="p-2 w-28" src={urlItem.stuffPng.lane5[3]} alt="item"></img>
              </div>
            </div>
          ) : (
            <div className="pt-4 pb-8 pl-24 pr-24">
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/top.png" alt="top"></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/jungle.png" alt="jungle"></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/mid.png" alt="mid"></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/bot.png" alt="bot"></img>
              </div>
              <div className="bg-slate-500 mb-4 max-w-6xl mx-auto flex">
                <img className="p-2 w-28" src="/support.png" alt="support"></img>
              </div>
            </div>
          )}
        </>
      )}
      <div className="pl-24 pr-24 text-center text-slate-300">
        <button className="bg-slate-500 py-2 px-4 rounded" onClick={generate}>Generate a Team Composition</button>
      </div>
    </div>
  )
}