import { useEffect, useRef, useState } from "react";
import goal_scored from "../sounds/goal_scored.mp3";
import hit from "../sounds/hit.mp3";
import shoot_pass from "../sounds/shoot_pass.mp3";
import skate from "../sounds/skate.mp3";
import shot_blocked from "../sounds/shot_blocked.mp3";

const initialState = {
  shotsTaken: 0,
  passesMade: 0,
  penalties: 0,
};

const useHockeyGame = () => {
  const [goals, setGoals] = useState(0);
  const [assists, setAssists] = useState(0);
  const [shotsBlocked, setShotsBlocked] = useState(0);
  const [hits, setHits] = useState(0);
  const [additionalStats, setAdditionalStats] = useState(initialState);

  const shootSound = useRef(new Audio(shoot_pass));
  const goalSound = useRef(new Audio(goal_scored));
  const hitSound = useRef(new Audio(hit));
  const skateSound = useRef(new Audio(skate));
  const shotBlockSound = useRef(new Audio(shot_blocked));

  const allSounds = [
    shootSound,
    goalSound,
    hitSound,
    skateSound,
    shotBlockSound,
  ];

  const stopSounds = () =>
    allSounds.forEach((sound) => {
      sound.current.pause();
      sound.current.currentTime = 0;
    });

  const playSound = (sound, wait = 0) => {
    stopSounds();
    setTimeout(() => {
      sound.current.play();
    }, wait);
  };

  const passPuck = (e) => {
    setAdditionalStats((stats) => ({
      ...stats,
      passesMade: stats.passesMade + 1,
    }));
    playSound(shootSound);
  };

  useEffect(() => {
    if (hits === 0) return;
    registerHit();
  }, [hits]);

  useEffect(() => {
    if (additionalStats.passesMade === 0) return;
    registerAssist();
  }, [additionalStats.passesMade]);

  useEffect(() => {
    if (additionalStats.shotsTaken === 0) return;

    scoreGoal();
  }, [additionalStats.shotsTaken]);

  const scoreGoal = (e) => {
    const didScore = Math.round(Math.random() * 15) < 4;
    if (didScore) {
      setTimeout(() => {
        setGoals((g) => (didScore ? g + 1 : g));
        playSound(goalSound);
      }, 500);
    }
  };

  const registerAssist = () => {
    const didAssist = Math.round(Math.random() * 20) < 6;
    if (didAssist) {
      setTimeout(() => {
        setAssists((a) => (didAssist ? a + 1 : a));
        playSound(goalSound);
      }, 1000);
    }
  };

  const shootPuck = (e) => {
    setAdditionalStats((stats) => ({
      ...stats,
      shotsTaken: stats.shotsTaken + 1,
    }));
    playSound(shootSound);
  };

  const truckStick = (e) => {
    playSound(skateSound);
    const didHit = Math.round(Math.random() * 5) < 3;
    setHits((h) => (didHit ? h + 1 : h));
  };

  const registerHit = (e) => {
    const isPenalty = Math.round(Math.random() * 20) < 2;
    playSound(hitSound);
    if (isPenalty) {
      setTimeout(() => {
        setAdditionalStats((s) =>
          isPenalty ? { ...s, penalties: s.penalties + 1 } : s
        );
        playSound(shotBlockSound);
      }, 1000);
    }
  };

  const dive = (e) => {
    playSound(skateSound);
    const didBlock = Math.round(Math.random() * 10) < 2;
    setShotsBlocked((block) => (didBlock ? block + 1 : block));
    if (didBlock) playSound(shotBlockSound, 500);
  };

  return {
    goals,
    assists,
    hits,
    shotsBlocked,
    additionalStats,
    passPuck,
    shootPuck,
    truckStick,
    dive,
  };
};

export default useHockeyGame;
