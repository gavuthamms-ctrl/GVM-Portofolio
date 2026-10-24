import React, { useEffect, useState } from 'react';

export const SplashIntro: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1700);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="splash" id="splash" aria-hidden="true">
      <div className="splash-row splash-row-top">
        <div className="splash-box"></div>
        <div className="splash-box"></div>
        <div className="splash-box"></div>
        <div className="splash-box"></div>
        <div className="splash-box"></div>
      </div>
      <div className="splash-row splash-row-bottom">
        <div className="splash-box"></div>
        <div className="splash-box"></div>
        <div className="splash-box"></div>
        <div className="splash-box"></div>
        <div className="splash-box"></div>
      </div>
    </div>
  );
};
