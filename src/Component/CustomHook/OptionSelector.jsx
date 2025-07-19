import { useState } from "react";

export default function useOptionSelector(iniinitalValue = 0) {
  const [current, setCurrent] = useState(iniinitalValue);
  const handleClick = (index) => {
    setCurrent(index);
  };
  return [current, handleClick];
}
