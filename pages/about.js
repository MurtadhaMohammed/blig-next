import { useRef, useEffect } from "react";

const About = () => {
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    firstRef.current.focus();
    firstRef.current.className = "Hi";
    firstRef.current.oncopy = (e)=>{
      console.log(e.target.value)
    }
    console.log(firstRef.current)
  }, []);

  const firstKeyDown = (e) => {
    if (e.key === "Enter") {
      lastRef.current.focus();
    }
  };
  const lasttKeyDown = (e) => {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  };
  const submitKeyDown = () => {
    alert("ok");
  };

  return (
    <>
      <input onKeyDown={firstKeyDown} ref={firstRef} type="text" />
      <input onKeyDown={lasttKeyDown} ref={lastRef} type="text" />
      <button onKeyDown={submitKeyDown} ref={submitRef}>
        Focus the input
      </button>
    </>
  );
};

export default About;
