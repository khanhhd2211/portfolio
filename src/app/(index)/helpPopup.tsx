"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../(section3)/useOnClickOutside";
import mouseScroll from "../../images/mousescroll.svg";

export default function HelpPopup() {
  const [popUpShowed, setPopUpShowed] = useState(false);
	const ref = useRef<any>();
	useOnClickOutside(ref, () => popUpShowed && setPopUpShowed(false))
  useEffect(() => {
    const lastPopUpShowed = localStorage.getItem("popUp");
    if (
      !lastPopUpShowed ||
      (lastPopUpShowed &&
        new Date().getTime() - new Date(JSON.parse(lastPopUpShowed)).getTime() >
          10000)
    ) {
      setPopUpShowed(true);
      localStorage.setItem("popUp", JSON.stringify(new Date()));
      setTimeout(() => setPopUpShowed(false), 5000);
    }
  }, []);
  return (
    <div ref={ref} className={`helpPopup${popUpShowed ? " active" : ""}`}>
      <Image src={mouseScroll} width={17} height={49} alt="mousescroll" />
      Lăn chuột hoặc ấn phím mũi tên lên xuống để chuyển trang
    </div>
  );
}
