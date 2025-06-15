import React, { useState, useRef, useEffect } from "react";
import { HorizontalAlignmentType, VerticalAlignmentType, TextOrientationType } from "basicprimitives";
import RotatedTextComponent from "../Diagrams/RotatedTextComponent";

const initialPosition = { x: 100, y: 100, width: 200, height: 300 };

export default function RotatedTextComponentSample() {
  const [position, setPosition] = useState(initialPosition);

  const dragState = useRef({
    dragging: false,
    resizing: false,
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
    origWidth: 0,
    origHeight: 0,
  });

  function onRectMouseDown(e) {
    e.preventDefault();
    dragState.current = {
      dragging: true,
      resizing: false,
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

  function onResizerMouseDown(e) {
    e.stopPropagation();
    e.preventDefault();
    dragState.current = {
      dragging: false,
      resizing: true,
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
    const deltaX = e.clientX - ds.startX;
    const deltaY = e.clientY - ds.startY;

    if (ds.dragging) {
      setPosition((r) => ({
        ...r,
        x: ds.origX + deltaX,
        y: ds.origY + deltaY,
      }));
    } else if (ds.resizing) {
      setPosition((r) => ({
        x: r.x,
        y: r.y,
        width: Math.max(20, ds.origWidth + deltaX),
        height: Math.max(20, ds.origHeight + deltaY),
      }));
    }
  }

  function onMouseUp() {
    dragState.current.dragging = false;
    dragState.current.resizing = false;
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
      {/* Shape Rectangle */}
      <div
        id="shape"
        onMouseDown={onRectMouseDown}
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
        <RotatedTextComponent
          config={{
            text: "Rotated text",
            horizontalAlignment: HorizontalAlignmentType.Center,
            verticalAlignment: VerticalAlignmentType.Middle,
            orientation: TextOrientationType.RotateRight,
            fontSize: "20px"
          }}
        />
        <div
          id="resizer"
          onMouseDown={onResizerMouseDown}
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
    </div>
  );
}
