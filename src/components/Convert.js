import axios from "axios";
import React, { useEffect, useState } from "react";

const Convert = ({ languaje, text }) => {
  const [translated, setTranslated] = useState("");
  useEffect(() => {
    const dotranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: languaje.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    const idTimeOut = setTimeout(() => {
      if (text) {
        dotranslation();
      } else {
        setTranslated("");
      }
    }, 500);

    return () => clearImmediate(idTimeOut);
  }, [languaje, text]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
