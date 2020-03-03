import React from "react";
import renderer from "react-test-renderer";
import JSONData from "./iconData.json";
import { PureIcon as Icon } from "../icon";

describe("Logo icon", () => {
  it("renders correctly", () => {
    const data = JSONData;

    const tree = renderer
      .create(<Icon data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})