import { useEffect, useState } from "react";

let CurrentTime = ()=> {
  const [time, setTime] = useState(new Date);

  useEffect(() => {
    console.log("Effect");
    const intervalid = setInterval(() => {
      setTime(new Date)
    }, 1000)

  return () => {
    clearInterval(intervalid);
    console.log("Component unmounted and interval cleared");
  }
  }, [])

  return <p className="lead">This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default CurrentTime