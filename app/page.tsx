import Welcome from "./components/welcome";
import OutsideNavBar from "./components/outside-navbar";

export default function Page() {
  return (
    <main className="main-home">
      <div className="main-div">
        <OutsideNavBar/>
        <Welcome/>
      </div>
    </main>
    
  );
}
