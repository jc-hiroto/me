import React from "react";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import jc_1 from "../img/jc_memojis/jc_1.png";
import jc_2 from "../img/jc_memojis/jc_2.png";
import jc_3 from "../img/jc_memojis/jc_3.png";
import jc_4 from "../img/jc_memojis/jc_4.png";
import jc_5 from "../img/jc_memojis/jc_5.png";
import jc_6 from "../img/jc_memojis/jc_6.png";
import jc_7 from "../img/jc_memojis/jc_7.png";
import jc_8 from "../img/jc_memojis/jc_8.png";
import jc_9 from "../img/jc_memojis/jc_9.png";
import jc_10 from "../img/jc_memojis/jc_10.png";
import jc_11 from "../img/jc_memojis/jc_11.png";
import jc_12 from "../img/jc_memojis/jc_12.png";
import jc_13 from "../img/jc_memojis/jc_13.png";
import jc_14 from "../img/jc_memojis/jc_14.png";
import jc_15 from "../img/jc_memojis/jc_15.png";
import jc_16 from "../img/jc_memojis/jc_16.png";
import jc_17 from "../img/jc_memojis/jc_17.png";

function RandomMemoji({ size, offsetY }) {
  const [image, setImage] = React.useState(jc_2);
  const memojis = [
    jc_1,
    jc_2,
    jc_3,
    jc_4,
    jc_5,
    jc_6,
    jc_7,
    jc_8,
    jc_9,
    jc_10,
    jc_11,
    jc_12,
    jc_13,
    jc_14,
    jc_15,
    jc_16,
    jc_17,
  ];
  const handleRandomMemoji = () => {
    const random = Math.floor(Math.random() * 17);
    setImage(memojis[random]);
  };
  return (
    <motion.div
      whileTap={{ scale: 0.8, opacity: 0.5 }}
      initial={{ y: offsetY }}
    >
      <Image
        mx="2"
        src={image}
        alt="JC memoji"
        boxSize={size}
        cursor="pointer"
        onClick={() => handleRandomMemoji()}
      />
    </motion.div>
  );
}

export default RandomMemoji;
