//import style from './CoverImage.module.css';

// export const CoverImage = ({imageUrl}) => {
//   return (
//     <div className={style.coverImage}>
//       <img src={imageUrl} alt="Album Cover" />
//     </div>
//   );
// };
import { useState } from "react";

import style from "./CoverImage.module.css";

export const CoverImage = ({ imageUrl }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className={style.coverImage}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown ? (
        <img src={imageUrl} alt="Album Cover" />
      ) : (
        <div className={style.placeholder}>Hover to view</div>
      )}
    </div>
  );
};