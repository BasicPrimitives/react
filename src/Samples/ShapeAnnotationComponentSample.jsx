import React, { useState, useRef, useEffect } from "react";
import { ShapeType, Size, OrientationType, Thickness, LineType, PlacementType } from "basicprimitives";
import ShapeAnnotationComponent from "../Diagrams/ShapeAnnotationComponent";

const initialPosition = { x: 100, y: 100, width: 200, height: 100 };

export default function ShapeAnnotationComponentSample() {
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
        Drag & Resize Rect
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

      {/* Shape annotation */}
      <ShapeAnnotationComponent
        config={{
          orientationType: OrientationType.Top,
          shapeType: ShapeType.Rectangle,
          position: position,
          offset: new Thickness(10, 10, 10, 10),
          lineWidth: 2,
          cornerRadius: "10%",
          borderColor: "black",
          fillColor: "grey",
          opacity: 0.5,
          lineType: LineType.Solid,
          label: "1000",
          labelSize: new Size(60, 30),
          labelPlacement: PlacementType.Auto,
          labelOffset: 4
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
