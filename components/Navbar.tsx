import { SlIcon, SlInput } from "@/components/SLComponents";

export default function Navbar(props: any) {
  const { screenLayout, screenLayouts } = props;
  return (
    <div className="navbar">
      <div className="logo-container">
        WXCHARTS
        {" (" + screenLayout + ")"}
      </div>
      {screenLayout !== screenLayouts.mobile && (
        <div className="searchbar-container">
          <SlInput placeholder="Search locations" size="small" pill>
            <SlIcon
              className="search-icon"
              name="search"
              slot="prefix"
            ></SlIcon>
          </SlInput>
        </div>
      )}
      <div className="navcontrols-container">
        <div className="gif-button">GIF</div>
        <SlIcon name="gear-fill"></SlIcon>
      </div>
    </div>
  );
}
