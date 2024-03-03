import React from "react";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import jc_1 from "../img/jc_memojis/jc_1.png";
import jc_2 from "../img/jc_memojis/jc_2.png";

function RandomMemoji({ size, offsetY }) {
  const [image, setImage] = React.useState(jc_2);
  const memojis = [jc_1, jc_2];
  const handleRandomMemoji = () => {
    const random = Math.floor(Math.random() * memojis.length);
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
