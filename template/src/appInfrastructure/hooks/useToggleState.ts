import React, { useState } from 'react';

/**
 * Boilerplate hook for handling visibility/expanding/toggling by button.
 */
export const useToggleState = (defaultState?: 'ON' | 'OFF') => {
  const [toggled, setToggled] = useState(defaultState === 'ON');

  const onToggle = React.useCallback(() => {
    setToggled(!toggled);
  }, [toggled]);

  return { toggled, onToggle };
};
