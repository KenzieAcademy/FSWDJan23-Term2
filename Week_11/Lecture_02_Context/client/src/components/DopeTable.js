import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { themeContext } from "../contexts/themeContext";

const DopeTable = () => {
  /**
   * I want to get the selected theme, because if we're running
   * light mode, the table should be light. But if dark mode, the
   * table should be dark.
   */
  const { theme } = useContext(themeContext);

  return (
    <>
      <p>For example, look at this dope table.</p>
      <Table variant={theme}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Way Too Personal Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Banjo</td>
            <td>
              Doesn't understand very much. Of anything. But he's a cool bear
              with a back pack.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Kazooie</td>
            <td>
              Known as bird brain by some, Kazooie is way too snarky for her own
              good. Banjo is frankly worthless without her. She lives in his
              cool back pack.
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gruntilda</td>
            <td>Gruntilda uses slug flavored tooth paste.</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default DopeTable;
