import SideBar from "../SideBar.jsx";

it("should render without crashing", () => {
  const wrapper = shallow(<SideBar />);
  expect(wrapper.exists()).toBe(true);
});

it("should change state when open is clicked", () => {
  const wrapper = shallow(<SideBar />);
  wrapper.instance().showSideBar();
  expect(wrapper.state("open")).toBe(true);
});

it("should change state when close is clicked", () => {
  const wrapper = shallow(<SideBar />);
  wrapper.instance().hideSideBar();
  expect(wrapper.state("open")).toBe(false);
});

it("should toggle sidebar", () => {
  const e = {
    target: {
      document: {
        documentElement: {
          clientWidth: 800
        }
      }
    }
  };
  const wrapper = shallow(<SideBar />);
  wrapper.instance().toggleSideBar(e);
  expect(wrapper.state("open")).toBe(true);
  e.target.document.documentElement.clientWidth = 600;
  wrapper.instance().toggleSideBar(e);
  expect(wrapper.state("open")).toBe(false);
});

it("should remove listener on component will mount", () => {
  const wrapper = shallow(<SideBar />);
  wrapper.instance().componentWillUnmount();
});
