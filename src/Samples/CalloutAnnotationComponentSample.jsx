import React, { useState, useRef, useEffect } from "react";
import { ConnectorShapeType, ConnectorPlacementType } from 'basicprimitives';
import CalloutAnnotationComponent from "../Diagrams/CalloutAnnotationComponent";

const initialPosition = { x: 100, y: 100, width: 200, height: 100 };
const initialSnapPoint = { x: 450, y: 170 };

export default function CalloutAnnotationComponentSample() {
  const [position, setPosition] = useState(initialPosition);
  const [snapPoint, setSnapPoint] = useState(initialSnapPoint);

  const dragState = useRef({
    dragging: false,
    resizing: false,
    target: null,
    resizeTarget: null,
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
    origWidth: 0,
    origHeight: 0,
  });

  function onRectMouseDown(e, target) {
    e.preventDefault();
    dragState.current = {
      dragging: true,
      resizing: false,
      target,
      startX: e.clientX,
      startY: e.clientY,
      origX: target === "from" ? position.x : snapPoint.x,
      origY: target === "from" ? position.y : snapPoint.y,
      origWidth: target === "from" ? position.width : 0,
      origHeight: target === "from" ? position.height : 0,
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }

  function onResizerMouseDown(e, target) {
    e.stopPropagation();
    e.preventDefault();
    dragState.current = {
      dragging: false,
      resizing: true,
      resizeTarget: target,
      startX: e.clientX,
      startY: e.clientY,
      origX: position.x,
      origY: position.y,
      origWidth: position.width,
      origHeight: position.height,
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }

  function onMouseMove(e) {
    const ds = dragState.current;
    if (ds.dragging) {
      const deltaX = e.clientX - ds.startX;
      const deltaY = e.clientY - ds.startY;
      if (ds.target === "from") {
        setPosition((r) => ({
          ...r,
          x: ds.origX + deltaX,
          y: ds.origY + deltaY,
        }));
      } else if (ds.target === "to") {
        setSnapPoint((p) => ({
          x: ds.origX + deltaX,
          y: ds.origY + deltaY,
        }));
      }
    } else if (ds.resizing) {
      const deltaX = e.clientX - ds.startX;
      const deltaY = e.clientY - ds.startY;
      if (ds.resizeTarget === "from") {
        setPosition((r) => ({
          x: r.x,
          y: r.y,
          width: Math.max(20, ds.origWidth + deltaX),
          height: Math.max(20, ds.origHeight + deltaY),
        }));
      }
    }
  }

  function onMouseUp(e) {
    dragState.current.dragging = false;
    dragState.current.resizing = false;
    dragState.current.target = null;
    dragState.current.resizeTarget = null;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  }

  return (
    <div
      style={{
        position: "relative",
        height: "640px",
        width: "100%",
        backgroundColor: "#eee",
        border: "1px dotted black",
        userSelect: "none",
      }}
    >
      {/* From Rectangle */}
      <div
        id="fromrect"
        onMouseDown={(e) => onRectMouseDown(e, "from")}
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
          width: position.width,
          height: position.height,
          border: "1px dotted black",
          backgroundColor: "white",
          cursor: "move",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          userSelect: "none",
        }}
      >
        Drag & Resize Rect
        <div
          id="fromresizer"
          onMouseDown={(e) => onResizerMouseDown(e, "from")}
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 16,
            height: 8,
            border: "1px dotted black",
            cursor: "nwse-resize",
            backgroundColor: "#eee",
          }}
        />
      </div>

      {/* To Point */}
      <div
        id="topoint"
        onMouseDown={(e) => onRectMouseDown(e, "to")}
        style={{
          position: "absolute",
          top: snapPoint.y - 4,
          left: snapPoint.x - 4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#000",
          cursor: "move",
        }}
      />

      {/* Callout annotation area */}
      <CalloutAnnotationComponent
        config={{
          position: position,
          snapPoint: snapPoint,
          connectorPlacementType: ConnectorPlacementType.Offbeat,
          connectorShapeType: ConnectorShapeType.OneWay,
          offset: 20,
          opacity: 0.5,
          label: "100",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none"
        }}
      />
    </div>
  );
}
