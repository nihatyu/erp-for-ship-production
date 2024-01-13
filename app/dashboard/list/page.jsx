"use client";

import { useState } from "react";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import { remarks } from "@/app/placeholder-data";

export default function Page() {
  const [state, setState] = useState({
    data: remarks,
    rows: Object.keys(remarks[0]),
    cols: [],
    aggregatorName: "Count",
    vals: [],
    rendererName: "Table",
  });

  return (
    <div>
      <h1 className="font-bold text-2xl p-2 m-2 ">Remark Listesi</h1>
      <PivotTableUI
        {...state}
        onChange={(s) => setState(s)}
        unusedOrientationCutoff={Infinity}
      />
    </div>
  );
}
