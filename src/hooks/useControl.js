import { useState } from 'react';

const useControl = () => {
  const [showInitialScreen, setShowInitialScreen] = useState(true);
  const [userSelection, setUserSelection] = useState(null);
  const onOptionClickHandler = (e, option) => {
    setUserSelection(option);
  };
  return {
    showInitialScreen,
    setShowInitialScreen,
    userSelection,
    setUserSelection,
    onOptionClickHandler,
  };
};

export { useControl };
