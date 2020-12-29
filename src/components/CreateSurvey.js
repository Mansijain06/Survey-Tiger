import React, { useState } from "react";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const CreateSurvey = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [questionType, setQuestionType] = useState("Select Question Type");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{questionType}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => setQuestionType("Multi-select")}>
            Multi-select
          </DropdownItem>
          <DropdownItem onClick={() => setQuestionType("Single select")}>
            Single select
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {questionType === "Multi-select" ? <MultiSelect /> : null}
      {questionType === "Single select" ? <SingleSelect /> : null}
    </>
  );
};

export default CreateSurvey;
