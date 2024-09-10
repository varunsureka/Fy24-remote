import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TabComponent from "./components/Tab";
import Profile from "./components/Profile";
import Experience from "./components/Experience";

// Mock data for the tests
const personalTabData = {
  name: "John Doe",
  age: 30,
  address: "123 Main St, Anytown, USA",
};

const professionalTabData = {
  jobDescription: "Software Engineer",
  skills: "JavaScript",
  experience: "5 years",
  hobbies: "Coding",
};

const tabsData = [
    { id:"tab1", title: 'Profile', component: Profile, data: personalTabData},
    { id:"tab2",title: 'Work Experience', component: Experience, data: professionalTabData },
  ];

describe("TabComponent", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<TabComponent tabsData={tabsData} />);
    expect(getByTestId("tab1")).toBeInTheDocument();
    expect(getByTestId("tab2")).toBeInTheDocument();
  });

  it("tab1 should be selected by default", () => {
    const { getByTestId } = render(<TabComponent tabsData={tabsData} />);
    expect(getByTestId("tab1")).toHaveClass("active");
    expect(getByTestId("profileTab")).toBeInTheDocument();
  });

  it('clicking on "profile" tab sets active tab to profile', () => {
    const { getByTestId } = render(<TabComponent tabsData={tabsData} />);
    fireEvent.click(getByTestId("tab1"));
    expect(getByTestId("tab1")).toHaveClass("active");
  });

  it('clicking on "Experience" tab sets active tab to experience', () => {
    const { getByTestId } = render(<TabComponent tabsData={tabsData} />);
    fireEvent.click(getByTestId("tab1"));
    expect(getByTestId("tab1")).toHaveClass("active");
  });


  it("changes the active tab panel when a tab header is clicked", () => {
    const { getByTestId } = render(<TabComponent tabsData={tabsData} />);

    // Initially, personal tab should be active
    fireEvent.click(getByTestId("tab1"));
    expect(getByTestId("profileTab")).toBeInTheDocument();

    // Click on professional tab
    fireEvent.click(getByTestId("tab2"));
    expect(getByTestId("experienceTab")).toBeInTheDocument();
  });
});
