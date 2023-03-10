import Head from "next/head";
import Image from "next/image";
import {
  SLRange,
  SlButton,
  SLSelect,
  SLOption,
  SlIcon,
} from "@/components/SLComponents";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

// the following aspect ratios must be the same as the ones used in css
const maxAspectRatios = {
  mobile: 0.75,
  tablet: 1.2,
};

const screenLayouts = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop",
};

export default function TestLayout() {
  const testDTGs = Array.from(Array(20).keys());
  const [screenLayout, setScreenLayout] = useState(screenLayouts.mobile);
  const [showCharts, setShowCharts] = useState(false);

  function handleWindowSizeChange() {
    const windowAspectRatio = window.innerWidth / window.innerHeight;
    let layout = "";
    if (windowAspectRatio < maxAspectRatios.mobile) {
      layout = screenLayouts.mobile;
    } else if (
      windowAspectRatio >= maxAspectRatios.mobile &&
      windowAspectRatio < maxAspectRatios.tablet
    ) {
      layout = screenLayouts.tablet;
    } else {
      layout = screenLayouts.desktop;
    }
    setScreenLayout(layout);
  }

  function handleMapClick() {
    if (screenLayout === screenLayouts.mobile) setShowCharts(true);
  }

  useEffect(() => {
    // TODO: also add event listener on load event
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Test Layout</title>
      </Head>
      <div className="wrapper">
        <Navbar screenLayout={screenLayout} screenLayouts={screenLayouts} />
        <div className="content">
          {/* map */}
          <div className="map-container" onClick={handleMapClick}>
            <Image
              className="map-image"
              src="/assets/images/map.jpg"
              alt="map"
              fill={true}
            />
          </div>

          {/* controls */}
          <div className="controls-container">
            <SLSelect placeholder="Model" size="small">
              <SLOption value="option-1">Option 1</SLOption>
            </SLSelect>
            <SLSelect placeholder="Run" size="small">
              <SLOption value="option-1">Option 1</SLOption>
            </SLSelect>
            <SLSelect placeholder="Region" size="small">
              <SLOption value="option-1">Option 1</SLOption>
            </SLSelect>
            <SLSelect placeholder="Chart" size="small">
              <SLOption value="option-1">Option 1</SLOption>
            </SLSelect>
          </div>

          {/* dtg */}
          <div className="dtg-container">
            <div className="dtg-buttons">
              {testDTGs.map((item, index) => {
                return (
                  <SlButton key={index} size="small">
                    {item}
                  </SlButton>
                );
              })}
            </div>
            <div className="play-pause-buttons">
              <SlButton circle>
                <SlIcon name="skip-backward-fill"></SlIcon>
              </SlButton>
              <SlButton circle>
                <SlIcon name="caret-left-fill"></SlIcon>
              </SlButton>
              <SlButton circle>
                <SlIcon name="play-circle-fill"></SlIcon>
              </SlButton>
              <SlButton circle>
                <SlIcon name="caret-right-fill"></SlIcon>
              </SlButton>
              <SlButton circle>
                <SlIcon name="skip-forward-fill"></SlIcon>
              </SlButton>
            </div>
          </div>

          {/* gif */}
          {screenLayout !== screenLayouts.mobile && (
            <div className="gif-container">
              <div>GIF: </div>
              <SlButton variant="primary" size="small" outline>
                Start
              </SlButton>
              <SlButton variant="primary" size="small" outline>
                End
              </SlButton>
              <SlButton variant="primary" size="small" outline>
                Step
              </SlButton>
              <SlButton variant="primary" size="small" outline>
                Speed
              </SlButton>
              <SlButton variant="primary" size="small">
                Go
              </SlButton>
            </div>
          )}

          {/* slider */}
          <div className="slider-container">
            <SLRange className="slider" value={20} />
          </div>

          {/* charts */}
          <div
            className={`charts-container ${
              screenLayout === screenLayouts.mobile && showCharts
                ? ""
                : "d-none"
            }`}
          >
            {screenLayout === screenLayouts.mobile && (
              <SlButton
                variant="text"
                onClick={() => {
                  setShowCharts(false);
                }}
              >
                <SlIcon name="caret-left-square-fill"></SlIcon>
              </SlButton>
            )}
            <Image
              className="map-image"
              src="/assets/images/charts.png"
              alt="chart"
              fill={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
