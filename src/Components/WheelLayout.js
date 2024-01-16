import "../Assets/css/style.css";
import React, { Component } from "react";

class WheelLayout extends Component {
  render() {
    const showContent = (e) => {
      const wheelbutton = document.querySelectorAll(".wheel-button");
      let activebutton = e.currentTarget.getAttribute("data-id");
      const wheelcontent = document.querySelectorAll(".wheel-content");
      const wheelarea = document.querySelector(".wheel-area");

      const achbox = document.querySelectorAll(".achievement-box");
      achbox.forEach(function (ac) {
        ac.classList.remove("scale-up-center");
      });

      let nextrotate = 310 - activebutton * 40;
      wheelarea.style.transform =
        "rotate(" + nextrotate + "deg) translateY(-50%)";

      wheelbutton.forEach(function (wb) {
        wb.classList.remove("blade-active");
        const id = wb.getAttribute("data-id");
        if (id === activebutton) {
          wb.classList.add("blade-active");
        }
      });

      wheelcontent.forEach(function (wc) {
        const id = wc.getAttribute("data-id");
        wc.classList.remove("wheel-active");
        if (id === activebutton) {
          wc.classList.add("wheel-active");
          const achbox = wc.querySelectorAll(".achievement-box");
          achbox.forEach(function (ac) {
            ac.classList.add("scale-up-center");
          });
        }
      });
    };

    const nextContent = (e) => {
      const wheelbutton = document.querySelectorAll(".wheel-button");
      const activewheel = document.querySelector(".blade-active");
      let wheelid = activewheel.getAttribute("data-id");
      let activebutton;
      if(wheelid === '9'){
        activebutton = 1;
      } else {
        activebutton = parseInt(wheelid)+1;
      }
      const wheelcontent = document.querySelectorAll(".wheel-content");
      const wheelarea = document.querySelector(".wheel-area");

      const achbox = document.querySelectorAll(".achievement-box");
      achbox.forEach(function (ac) {
        ac.classList.remove("scale-up-center");
      });

      let nextrotate = 310 - activebutton * 40;
      wheelarea.style.transform =
        "rotate(" + nextrotate + "deg) translateY(-50%)";

      wheelbutton.forEach(function (wb) {
        wb.classList.remove("blade-active");
        const id = wb.getAttribute("data-id");
        if (id === activebutton.toString()) {
          wb.classList.add("blade-active");
        }
      });

      wheelcontent.forEach(function (wc) {
        const id = wc.getAttribute("data-id");
        wc.classList.remove("wheel-active");
        if (id === activebutton.toString()) {
          wc.classList.add("wheel-active");
          const achbox = wc.querySelectorAll(".achievement-box");
          achbox.forEach(function (ac) {
            ac.classList.add("scale-up-center");
          });
        }
      });

    };

    const prevContent = (e) => {
      const wheelbutton = document.querySelectorAll(".wheel-button");
      const activewheel = document.querySelector(".blade-active");
      let wheelid = activewheel.getAttribute("data-id");
      let activebutton;
      if(wheelid === '1'){
        activebutton = 9;
      } else {
        activebutton = parseInt(wheelid)-1;
      }
      const wheelcontent = document.querySelectorAll(".wheel-content");
      const wheelarea = document.querySelector(".wheel-area");

      const achbox = document.querySelectorAll(".achievement-box");
      achbox.forEach(function (ac) {
        ac.classList.remove("scale-up-center");
      });

      let nextrotate = 310 - activebutton * 40;
      wheelarea.style.transform =
        "rotate(" + nextrotate + "deg) translateY(-50%)";

      wheelbutton.forEach(function (wb) {
        wb.classList.remove("blade-active");
        const id = wb.getAttribute("data-id");
        if (id === activebutton.toString()) {
          wb.classList.add("blade-active");
        }
      });

      wheelcontent.forEach(function (wc) {
        const id = wc.getAttribute("data-id");
        wc.classList.remove("wheel-active");
        if (id === activebutton.toString()) {
          wc.classList.add("wheel-active");
          const achbox = wc.querySelectorAll(".achievement-box");
          achbox.forEach(function (ac) {
            ac.classList.add("scale-up-center");
          });
        }
      });

    };

    return (
      <section className="box-border flex flex-wrap justify-center md:justify-startw-full items-center min-h-screen overflow-hidden">
        <div className="w-full relative lg:w-1/2 order-first lg:order-last">
          <div className="wheel-content wheel-active" data-id="1">
            <h1 className="text-3xl">Your title 1.</h1>
            <p className="text-justify mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box scale-up-center">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box scale-up-center delay-1">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box scale-up-center delay-2">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
            </div>
          </div>
          <div className="wheel-content" data-id="2">
            <h1 className="text-3xl">Your title 2.</h1>
            <p className="text-justify mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-1">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-2">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
            </div>
          </div>
          <div className="wheel-content" data-id="3">
            <h1 className="text-3xl">Your title 3.</h1>
            <p className="text-justify mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-1">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-2">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
            </div>
          </div>
          <div className="wheel-content" data-id="4">
            <h1 className="text-3xl">Your title 4.</h1>
            <p className="text-justify mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-1">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-2">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
            </div>
          </div>
          <div className="wheel-content" data-id="5">
            <h1 className="text-3xl">Your title 5.</h1>
            <p className="text-justify mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-1">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-2">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
            </div>
          </div>
          <div className="wheel-content" data-id="6">
            <h1 className="text-3xl">Your title 6.</h1>
            <p className="text-justify mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-1">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-2">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
            </div>
          </div>
          <div className="wheel-content" data-id="7">
            <h1 className="text-3xl">Your title 7.</h1>
            <p className="text-justify mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-1">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-2">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
            </div>
          </div>
          <div className="wheel-content" data-id="8">
            <h1 className="text-3xl">Your title 8.</h1>
            <p className="text-justify mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-1">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-2">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
            </div>
          </div>
          <div className="wheel-content" data-id="9">
            <h1 className="text-3xl">Your title 9.</h1>
            <p className="text-justify mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-1">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
              <div className="bg-mid-blue text-white text-center rounded w-max mt-7 p-5 mr-5 achievement-box delay-2">
                <h3 className="text-xl">310</h3>
                <span className="text-sm">Your achievement.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-last lg:order-first">
          <div className="wheel-box wheel-left">
            <div className="wheel-navigation">
              <button onClick={nextContent} className="wheel-next">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.999744 10.6667H12.9997C13.1212 10.6663 13.2403 10.6328 13.3442 10.5697C13.4481 10.5067 13.5328 10.4165 13.5892 10.309C13.6456 10.2014 13.6717 10.0804 13.6645 9.95913C13.6573 9.83785 13.6172 9.72082 13.5484 9.62065L7.54841 0.953986C7.29974 0.594653 6.70108 0.594653 6.45175 0.953986L0.451744 9.62065C0.382294 9.72061 0.341567 9.8377 0.333988 9.95918C0.326408 10.0807 0.352267 10.2019 0.408753 10.3097C0.46524 10.4175 0.550195 10.5078 0.654387 10.5707C0.758579 10.6337 0.878024 10.6668 0.999744 10.6667Z"
                    fill="#062E7D"
                  />
                </svg>
              </button>
              <button onClick={prevContent} className="wheel-prev">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.45175 10.046C6.5129 10.1348 6.59474 10.2074 6.6902 10.2576C6.78567 10.3078 6.8919 10.334 6.99974 10.334C7.10759 10.334 7.21382 10.3078 7.30928 10.2576C7.40475 10.2074 7.48658 10.1348 7.54774 10.046L13.5477 1.37932C13.6172 1.27936 13.6579 1.16227 13.6655 1.04079C13.6731 0.919306 13.6472 0.798068 13.5907 0.690248C13.5342 0.582429 13.4493 0.492151 13.3451 0.429224C13.2409 0.366297 13.1215 0.333128 12.9997 0.33332H0.999744C0.878307 0.333821 0.759303 0.367417 0.655531 0.430495C0.55176 0.493572 0.467146 0.583745 0.41079 0.691315C0.354434 0.798885 0.328468 0.919783 0.335684 1.04101C0.3429 1.16223 0.383025 1.27919 0.451744 1.37932L6.45175 10.046Z"
                    fill="#062E7D"
                  />
                </svg>
              </button>
              <div className="wheel-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_0_14)">
                    <circle
                      cx="60.0017"
                      cy="60"
                      r="45"
                      transform="rotate(90 60.0017 60)"
                      stroke="#EBEDF0"
                      strokeWidth="30"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_0_14"
                      x="0.00170517"
                      y="-1.52588e-05"
                      width="120"
                      height="126"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="6" />
                      <feGaussianBlur stdDeviation="12" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_0_14"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="wheel-area">
              <button
                onClick={showContent}
                className="wheel-button blade-active"
                data-id="1"
              >
                <div className="wheel-blade blade-1">
                  <svg
                    width="179"
                    height="212"
                    viewBox="0 0 179 212"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_0_10)">
                      <path
                        d="M179.477 32.1876C182.31 24.403 178.305 15.7567 170.388 13.3158C132.037 1.49076 91.8979 -2.4584 52.3526 1.46839C11.1339 5.56133 -9.10291 49.6395 5.06131 88.5638L46.0959 201.33C48.9287 209.115 57.5357 212.994 65.6827 211.492C76.4718 209.502 87.5367 209.503 98.3257 211.493C106.473 212.995 115.08 209.117 117.913 201.332L179.477 32.1876Z"
                        fill="#EBEDF0"
                      />
                    </g>
                    <path
                      d="M169.504 16.1826C175.687 18.0888 178.939 24.8947 176.658 31.1616L115.094 200.306C112.862 206.44 105.883 209.836 98.8698 208.542C87.7212 206.486 76.2875 206.486 65.1388 208.541C58.1251 209.834 51.1472 206.438 48.915 200.304L7.88046 87.538C-5.81215 49.9097 13.9174 8.29968 52.649 4.45371C91.799 0.566177 131.536 4.47588 169.504 16.1826Z"
                      stroke="#F7F9FC"
                      strokeWidth="6"
                    />
                    <defs>
                      <filter
                        id="filter0_i_0_10"
                        x="0.562584"
                        y="3.05176e-05"
                        width="179.823"
                        height="217.812"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="6" />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_0_10"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <h2 className="clr-dark-blue">Data 1</h2>
                </div>
              </button>
              <button
                onClick={showContent}
                className="wheel-button"
                data-id="2"
              >
                <div className="wheel-blade blade-2">
                  <svg
                    width="179"
                    height="212"
                    viewBox="0 0 179 212"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_0_10)">
                      <path
                        d="M179.477 32.1876C182.31 24.403 178.305 15.7567 170.388 13.3158C132.037 1.49076 91.8979 -2.4584 52.3526 1.46839C11.1339 5.56133 -9.10291 49.6395 5.06131 88.5638L46.0959 201.33C48.9287 209.115 57.5357 212.994 65.6827 211.492C76.4718 209.502 87.5367 209.503 98.3257 211.493C106.473 212.995 115.08 209.117 117.913 201.332L179.477 32.1876Z"
                        fill="#EBEDF0"
                      />
                    </g>
                    <path
                      d="M169.504 16.1826C175.687 18.0888 178.939 24.8947 176.658 31.1616L115.094 200.306C112.862 206.44 105.883 209.836 98.8698 208.542C87.7212 206.486 76.2875 206.486 65.1388 208.541C58.1251 209.834 51.1472 206.438 48.915 200.304L7.88046 87.538C-5.81215 49.9097 13.9174 8.29968 52.649 4.45371C91.799 0.566177 131.536 4.47588 169.504 16.1826Z"
                      stroke="#F7F9FC"
                      strokeWidth="6"
                    />
                    <defs>
                      <filter
                        id="filter0_i_0_10"
                        x="0.562584"
                        y="3.05176e-05"
                        width="179.823"
                        height="217.812"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="6" />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_0_10"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <h2 className="clr-dark-blue">Data 2</h2>
                </div>
              </button>
              <button
                onClick={showContent}
                className="wheel-button"
                data-id="3"
              >
                <div className="wheel-blade blade-3">
                  <svg
                    width="179"
                    height="212"
                    viewBox="0 0 179 212"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_0_10)">
                      <path
                        d="M179.477 32.1876C182.31 24.403 178.305 15.7567 170.388 13.3158C132.037 1.49076 91.8979 -2.4584 52.3526 1.46839C11.1339 5.56133 -9.10291 49.6395 5.06131 88.5638L46.0959 201.33C48.9287 209.115 57.5357 212.994 65.6827 211.492C76.4718 209.502 87.5367 209.503 98.3257 211.493C106.473 212.995 115.08 209.117 117.913 201.332L179.477 32.1876Z"
                        fill="#EBEDF0"
                      />
                    </g>
                    <path
                      d="M169.504 16.1826C175.687 18.0888 178.939 24.8947 176.658 31.1616L115.094 200.306C112.862 206.44 105.883 209.836 98.8698 208.542C87.7212 206.486 76.2875 206.486 65.1388 208.541C58.1251 209.834 51.1472 206.438 48.915 200.304L7.88046 87.538C-5.81215 49.9097 13.9174 8.29968 52.649 4.45371C91.799 0.566177 131.536 4.47588 169.504 16.1826Z"
                      stroke="#F7F9FC"
                      strokeWidth="6"
                    />
                    <defs>
                      <filter
                        id="filter0_i_0_10"
                        x="0.562584"
                        y="3.05176e-05"
                        width="179.823"
                        height="217.812"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="6" />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_0_10"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <h2 className="clr-dark-blue">Data 3</h2>
                </div>
              </button>
              <button
                onClick={showContent}
                className="wheel-button"
                data-id="4"
              >
                <div className="wheel-blade blade-4">
                  <svg
                    width="179"
                    height="212"
                    viewBox="0 0 179 212"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_0_10)">
                      <path
                        d="M179.477 32.1876C182.31 24.403 178.305 15.7567 170.388 13.3158C132.037 1.49076 91.8979 -2.4584 52.3526 1.46839C11.1339 5.56133 -9.10291 49.6395 5.06131 88.5638L46.0959 201.33C48.9287 209.115 57.5357 212.994 65.6827 211.492C76.4718 209.502 87.5367 209.503 98.3257 211.493C106.473 212.995 115.08 209.117 117.913 201.332L179.477 32.1876Z"
                        fill="#EBEDF0"
                      />
                    </g>
                    <path
                      d="M169.504 16.1826C175.687 18.0888 178.939 24.8947 176.658 31.1616L115.094 200.306C112.862 206.44 105.883 209.836 98.8698 208.542C87.7212 206.486 76.2875 206.486 65.1388 208.541C58.1251 209.834 51.1472 206.438 48.915 200.304L7.88046 87.538C-5.81215 49.9097 13.9174 8.29968 52.649 4.45371C91.799 0.566177 131.536 4.47588 169.504 16.1826Z"
                      stroke="#F7F9FC"
                      strokeWidth="6"
                    />
                    <defs>
                      <filter
                        id="filter0_i_0_10"
                        x="0.562584"
                        y="3.05176e-05"
                        width="179.823"
                        height="217.812"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="6" />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_0_10"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <h2 className="clr-dark-blue">Data 4</h2>
                </div>
              </button>
              <button
                onClick={showContent}
                className="wheel-button"
                data-id="5"
              >
                <div className="wheel-blade blade-5">
                  <svg
                    width="179"
                    height="212"
                    viewBox="0 0 179 212"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_0_10)">
                      <path
                        d="M179.477 32.1876C182.31 24.403 178.305 15.7567 170.388 13.3158C132.037 1.49076 91.8979 -2.4584 52.3526 1.46839C11.1339 5.56133 -9.10291 49.6395 5.06131 88.5638L46.0959 201.33C48.9287 209.115 57.5357 212.994 65.6827 211.492C76.4718 209.502 87.5367 209.503 98.3257 211.493C106.473 212.995 115.08 209.117 117.913 201.332L179.477 32.1876Z"
                        fill="#EBEDF0"
                      />
                    </g>
                    <path
                      d="M169.504 16.1826C175.687 18.0888 178.939 24.8947 176.658 31.1616L115.094 200.306C112.862 206.44 105.883 209.836 98.8698 208.542C87.7212 206.486 76.2875 206.486 65.1388 208.541C58.1251 209.834 51.1472 206.438 48.915 200.304L7.88046 87.538C-5.81215 49.9097 13.9174 8.29968 52.649 4.45371C91.799 0.566177 131.536 4.47588 169.504 16.1826Z"
                      stroke="#F7F9FC"
                      strokeWidth="6"
                    />
                    <defs>
                      <filter
                        id="filter0_i_0_10"
                        x="0.562584"
                        y="3.05176e-05"
                        width="179.823"
                        height="217.812"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="6" />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_0_10"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <h2 className="clr-dark-blue">Data 5</h2>
                </div>
              </button>
              <button
                onClick={showContent}
                className="wheel-button"
                data-id="6"
              >
                <div className="wheel-blade blade-6">
                  <svg
                    width="179"
                    height="212"
                    viewBox="0 0 179 212"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_0_10)">
                      <path
                        d="M179.477 32.1876C182.31 24.403 178.305 15.7567 170.388 13.3158C132.037 1.49076 91.8979 -2.4584 52.3526 1.46839C11.1339 5.56133 -9.10291 49.6395 5.06131 88.5638L46.0959 201.33C48.9287 209.115 57.5357 212.994 65.6827 211.492C76.4718 209.502 87.5367 209.503 98.3257 211.493C106.473 212.995 115.08 209.117 117.913 201.332L179.477 32.1876Z"
                        fill="#EBEDF0"
                      />
                    </g>
                    <path
                      d="M169.504 16.1826C175.687 18.0888 178.939 24.8947 176.658 31.1616L115.094 200.306C112.862 206.44 105.883 209.836 98.8698 208.542C87.7212 206.486 76.2875 206.486 65.1388 208.541C58.1251 209.834 51.1472 206.438 48.915 200.304L7.88046 87.538C-5.81215 49.9097 13.9174 8.29968 52.649 4.45371C91.799 0.566177 131.536 4.47588 169.504 16.1826Z"
                      stroke="#F7F9FC"
                      strokeWidth="6"
                    />
                    <defs>
                      <filter
                        id="filter0_i_0_10"
                        x="0.562584"
                        y="3.05176e-05"
                        width="179.823"
                        height="217.812"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="6" />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_0_10"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <h2 className="clr-dark-blue">Data 6</h2>
                </div>
              </button>
              <button
                onClick={showContent}
                className="wheel-button"
                data-id="7"
              >
                <div className="wheel-blade blade-7">
                  <svg
                    width="179"
                    height="212"
                    viewBox="0 0 179 212"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_0_10)">
                      <path
                        d="M179.477 32.1876C182.31 24.403 178.305 15.7567 170.388 13.3158C132.037 1.49076 91.8979 -2.4584 52.3526 1.46839C11.1339 5.56133 -9.10291 49.6395 5.06131 88.5638L46.0959 201.33C48.9287 209.115 57.5357 212.994 65.6827 211.492C76.4718 209.502 87.5367 209.503 98.3257 211.493C106.473 212.995 115.08 209.117 117.913 201.332L179.477 32.1876Z"
                        fill="#EBEDF0"
                      />
                    </g>
                    <path
                      d="M169.504 16.1826C175.687 18.0888 178.939 24.8947 176.658 31.1616L115.094 200.306C112.862 206.44 105.883 209.836 98.8698 208.542C87.7212 206.486 76.2875 206.486 65.1388 208.541C58.1251 209.834 51.1472 206.438 48.915 200.304L7.88046 87.538C-5.81215 49.9097 13.9174 8.29968 52.649 4.45371C91.799 0.566177 131.536 4.47588 169.504 16.1826Z"
                      stroke="#F7F9FC"
                      strokeWidth="6"
                    />
                    <defs>
                      <filter
                        id="filter0_i_0_10"
                        x="0.562584"
                        y="3.05176e-05"
                        width="179.823"
                        height="217.812"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="6" />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_0_10"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <h2 className="clr-dark-blue">Data 7</h2>
                </div>
              </button>
              <button
                onClick={showContent}
                className="wheel-button"
                data-id="8"
              >
                <div className="wheel-blade blade-8">
                  <svg
                    width="179"
                    height="212"
                    viewBox="0 0 179 212"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_0_10)">
                      <path
                        d="M179.477 32.1876C182.31 24.403 178.305 15.7567 170.388 13.3158C132.037 1.49076 91.8979 -2.4584 52.3526 1.46839C11.1339 5.56133 -9.10291 49.6395 5.06131 88.5638L46.0959 201.33C48.9287 209.115 57.5357 212.994 65.6827 211.492C76.4718 209.502 87.5367 209.503 98.3257 211.493C106.473 212.995 115.08 209.117 117.913 201.332L179.477 32.1876Z"
                        fill="#EBEDF0"
                      />
                    </g>
                    <path
                      d="M169.504 16.1826C175.687 18.0888 178.939 24.8947 176.658 31.1616L115.094 200.306C112.862 206.44 105.883 209.836 98.8698 208.542C87.7212 206.486 76.2875 206.486 65.1388 208.541C58.1251 209.834 51.1472 206.438 48.915 200.304L7.88046 87.538C-5.81215 49.9097 13.9174 8.29968 52.649 4.45371C91.799 0.566177 131.536 4.47588 169.504 16.1826Z"
                      stroke="#F7F9FC"
                      strokeWidth="6"
                    />
                    <defs>
                      <filter
                        id="filter0_i_0_10"
                        x="0.562584"
                        y="3.05176e-05"
                        width="179.823"
                        height="217.812"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="6" />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_0_10"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <h2 className="clr-dark-blue">Data 8</h2>
                </div>
              </button>
              <button
                onClick={showContent}
                className="wheel-button"
                data-id="9"
              >
                <div className="wheel-blade blade-9">
                  <svg
                    width="179"
                    height="212"
                    viewBox="0 0 179 212"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_0_10)">
                      <path
                        d="M179.477 32.1876C182.31 24.403 178.305 15.7567 170.388 13.3158C132.037 1.49076 91.8979 -2.4584 52.3526 1.46839C11.1339 5.56133 -9.10291 49.6395 5.06131 88.5638L46.0959 201.33C48.9287 209.115 57.5357 212.994 65.6827 211.492C76.4718 209.502 87.5367 209.503 98.3257 211.493C106.473 212.995 115.08 209.117 117.913 201.332L179.477 32.1876Z"
                        fill="#EBEDF0"
                      />
                    </g>
                    <path
                      d="M169.504 16.1826C175.687 18.0888 178.939 24.8947 176.658 31.1616L115.094 200.306C112.862 206.44 105.883 209.836 98.8698 208.542C87.7212 206.486 76.2875 206.486 65.1388 208.541C58.1251 209.834 51.1472 206.438 48.915 200.304L7.88046 87.538C-5.81215 49.9097 13.9174 8.29968 52.649 4.45371C91.799 0.566177 131.536 4.47588 169.504 16.1826Z"
                      stroke="#F7F9FC"
                      strokeWidth="6"
                    />
                    <defs>
                      <filter
                        id="filter0_i_0_10"
                        x="0.562584"
                        y="3.05176e-05"
                        width="179.823"
                        height="217.812"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="6" />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_0_10"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <h2 className="clr-dark-blue">Data 9</h2>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WheelLayout;
