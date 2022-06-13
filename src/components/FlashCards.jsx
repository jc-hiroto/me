import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Flex } from '@chakra-ui/react';
const cards = [1, 2, 3, 4, 5];
const cardVariants = {
  selected: {
    rotateY: 180,
    scale: 1.1,
    transition: { duration: .35 },
    zIndex: 10,
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
  },
  notSelected: i => ({
    rotateY: i * 15,
    scale: 1 - Math.abs(i * 0.15),
    x: i ? i * 50 : 0,
    opacity: 1 - Math.abs(i * .15),
    zIndex: 10 - Math.abs(i),
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
    transition: { duration: .35 }
  })
}
const Flashcards = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [{ 
      startX,
      startScrollLeft,
      isDragging
    }, setDragStart] = useState({ 
      startX: undefined, 
      startScrollLeft: undefined, 
      isDragging: false
    });
    const containerRef = useRef();
    const cardRefs = useRef(new Array());
    useEffect(() => {
      const { scrollWidth, clientWidth } = containerRef.current;
      const halfScroll = (scrollWidth - clientWidth) / 2;
      containerRef.current.scrollLeft = halfScroll;
    }, [containerRef.current]); 
    const handleMouseDown = e => {
      setDragStart({ 
        startX: e.pageX - containerRef.current.offsetLeft,
        startScrollLeft: containerRef.current.scrollLeft,
        isDragging: true
      });
    }
    const handleMouseMove = e => {
      if (!isDragging || selectedCard) return;
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = x - startX;
      containerRef.current.scrollLeft = startScrollLeft - walk;
    }
    const selectCard = card => {
      setSelectedCard(selectedCard ? null : card);
      
      if (card && !selectedCard) {
        cardRefs.current[card - 1].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        }); 
      }
    }
    const handleCardMouseUp = (e, card) => {
      if (isDragging) {
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = x - startX;
        if (Math.abs(walk) < 5) selectCard(card);
      } else selectCard(card);
    }
    return (
      <Flex 
        h="200px"
        w="800px"
        bg="gray.100"
        onMouseDown={handleMouseDown}
        onMouseUp={() => setDragStart(prev => ({ ...prev, isDragging: false }))}
        onMouseMove={handleMouseMove}
      >
        <Flex 
          className="flashcards__container" 
          w="100%"
          h="100%"
          bg="yellow.500"
          ref={containerRef}
        >
          {cards.map((card, i) => (
            <motion.div 
              key={card}
              ref={el => cardRefs.current.push(el)}
              onMouseUp={e => handleCardMouseUp(e, card)}
              variants={cardVariants}
              animate={selectedCard === card ? "selected" : "notSelected"}
              custom={selectedCard ? selectedCard - card : 0}
            >
              <Flex bg="blue.500" w="100px" h="100px" borderRadius="lg" position="relative">

              </Flex>
            </motion.div>
          ))}
        </Flex>
      </Flex>
    )
}

export default Flashcards;