import TabBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

export default function App($app) {
  this.state = {
    currentTab: (() => {
      const tabName = window.location.pathname.split("/").at(-1);
      return tabName == "animalAlbum3" ? "all" : tabName;
    })(),
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: "",
    onClick: async (name) => {
      history.pushState(null, `${name} 사진`, name);
      this.updateContent(name);
    },
  });

  const content = new Content({
    $app,
    initialState: [],
  });

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  this.updateContent = async (tabName) => {
    try {
      const currentTab = tabName === "all" ? "" : tabName;
      const photos = await request(currentTab);
      this.setState({
        ...this.state,
        photos: photos,
        currentTab: tabName,
      });
    } catch (err) {
      console.log(err);
    }
  };

  window.addEventListener("popstate", async () => {
    const tabName = window.location.pathname.split("/").at(-1);
    this.updateContent(tabName);
    console.log(window.location.pathname); // 강의에서는 /panda등, 나는 편하게 보려고 _inflearn폴더를 열어서 /animalAlbum3/panda로 나옴
  });

  const init = async () => {
    this.updateContent(this.state.currentTab);
  };

  init();
}
