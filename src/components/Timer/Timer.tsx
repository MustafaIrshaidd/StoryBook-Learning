import React from "react";

export const Timer = () => {
  const [startTime, setStartTime] = React.useState<number | null>(null);
  const [nowTime, setNowTime] = React.useState<number | null>(null);
  const intervalRef = React.useRef<any>(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNowTime(Date.now());

    intervalRef.current = setInterval(() => {
      setNowTime(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let secoundsPassed = 0;
  if (startTime != null && nowTime != null) {
    secoundsPassed = (nowTime - startTime) / 1000;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30px",
        }}>
        <button
          onClick={handleStart}
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "14px",
          }}>
          start
        </button>
        <button
          onClick={handleStop}
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "14px",
          }}>
          stop
        </button>
      </div>
      <h1>timer : {secoundsPassed}</h1>
    </>
  );
};
