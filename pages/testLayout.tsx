import Head from "next/head";
import Image from "next/image";
import {
  SLRange,
  SlButton,
  SlIcon,
  SlTree,
  SlTreeItem,
} from "@/components/SLComponents";
import Navbar from "@/components/Navbar";
import Charts from "@/sections/Charts";
import { useEffect, useState } from "react";
import * as wxc_data from "@/utils/wxc_data.json";

// the following aspect ratios must be the same as the ones used in css
const maxAspectRatios = {
  mobile: 0.75,
  tablet: 1.2,
  desktop: 1.9,
};

const screenLayouts = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop",
  widescreen: "widescreen",
};

export default function TestLayout() {
  const [screenLayout, setScreenLayout] = useState(screenLayouts.desktop);
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
    } else if (
      windowAspectRatio >= maxAspectRatios.tablet &&
      windowAspectRatio < maxAspectRatios.desktop
    ) {
      layout = screenLayouts.desktop;
    } else {
      layout = screenLayouts.widescreen;
    }
    setScreenLayout(layout);
  }

  function handleMapClick() {
    if (screenLayout === screenLayouts.mobile) setShowCharts(true);
  }

  useEffect(() => {
    handleWindowSizeChange();
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
            <div className="selected-params">
              <div className="selected-model">GFS</div>
              <div className="runs">
                <SlButton>00</SlButton>
                <SlButton>06</SlButton>
                <SlButton>12</SlButton>
                <SlButton>24</SlButton>
              </div>
            </div>
            <div className="tree-wrapper">
              <SlTree>
                <SlTreeItem expanded>
                  Model
                  <SlTreeItem>GFS</SlTreeItem>
                  <SlTreeItem>GEFS</SlTreeItem>
                  <SlTreeItem>UKMO</SlTreeItem>
                  <SlTreeItem>GDPS</SlTreeItem>
                  <SlTreeItem>ICON_EU</SlTreeItem>
                  <SlTreeItem>ARPEGE</SlTreeItem>
                  <SlTreeItem>AROME</SlTreeItem>
                  <SlTreeItem>HRRR</SlTreeItem>
                  <SlTreeItem>NAM-NEST</SlTreeItem>
                </SlTreeItem>

                <SlTreeItem>
                  Region
                  <SlTreeItem>Europe</SlTreeItem>
                  <SlTreeItem>Atlantic</SlTreeItem>
                </SlTreeItem>

                <SlTreeItem>
                  Chart
                  <SlTreeItem>overview</SlTreeItem>
                </SlTreeItem>
              </SlTree>
            </div>
          </div>

          {/* dtg */}
          <div className="dtg-container">
            <div className="dtg-buttons-wrapper">
              {wxc_data.map((item, index) => {
                return index % 2 === 0 ? (
                  <SlButton key={index}>{index}</SlButton>
                ) : (
                  ""
                );
              })}
            </div>
          </div>

          {/* play/pause buttons */}
          <div className="play-container">
            <div className="play-buttons-wrapper">
              <SlButton>
                <SlIcon name="skip-backward-fill"></SlIcon>
              </SlButton>
              <div className="custom-divider"></div>
              <SlButton>
                <SlIcon name="caret-left-fill"></SlIcon>
              </SlButton>
              <div className="custom-divider"></div>
              <SlButton>
                <SlIcon name="play-circle-fill"></SlIcon>
              </SlButton>
              <div className="custom-divider"></div>
              <SlButton>
                <SlIcon name="caret-right-fill"></SlIcon>
              </SlButton>
              <div className="custom-divider"></div>
              <SlButton>
                <SlIcon name="skip-forward-fill"></SlIcon>
              </SlButton>
            </div>
          </div>

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
            <Charts />
          </div>
        </div>
      </div>
    </>
  );
}
