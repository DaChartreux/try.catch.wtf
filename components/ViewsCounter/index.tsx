import { useRef, useEffect } from "react";
import { animate } from "framer-motion";

const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (nodeRef.current === null) {
      return () => {};
    }

    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = `${value.toFixed(0)} Views`;
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
};

export default Counter;
