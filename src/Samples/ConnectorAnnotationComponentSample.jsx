import React, { useState, useRef, useEffect } from "react";
import { ConnectorShapeType, ConnectorPlacementType } from 'basicprimitives';
import ConnectorAnnotationComponent from "../Diagrams/ConnectorAnnotationComponent";

const initialFromRect = { x: 100, y: 100, width: 200, height: 100 };
const initialToRect = { x: 400, y: 400, width: 200, height: 100 };

export default function ConnectorAnnotationComponentSample() {
  const [fromRect, setFromRect] = useState(initialFromRect);
  const [toRect, setToRect] = useState(initialToRect);

  // Drag state refs (to avoid rerenders on every mousemove)
  const dragState = useRef({
    dragging: false,
    resizing: false,
    target: null, // "from" or "to"
    resizeTarget: null, // "from" or "to"
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
    origWidth: 0,
    origHeight: 0,
  });

  // Mouse down on rect to start dragging
  function onRectMouseDown(e, target) {
    e.preventDefault();
    dragState.current = {
      dragging: true,
      resizing: false,
      target,
      startX: e.clientX,
      startY: e.clientY,
      origX: target === "from" ? fromRect.x : toRect.x,
      origY: target === "from" ? fromRect.y : toRect.y,
      origWidth: target === "from" ? fromRect.width : toRect.width,
      origHeight: target === "from" ? fromRect.height : toRect.height,
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }

  // Mouse down on resizer to start resizing
  function onResizerMouseDown(e, target) {
    e.stopPropagation();
    e.preventDefault();
    dragState.current = {
      dragging: false,
      resizing: true,
      resizeTarget: target,
      startX: e.clientX,
      startY: e.clientY,
      origX: target === "from" ? fromRect.x : toRect.x,
      origY: target === "from" ? fromRect.y : toRect.y,
      origWidth: target === "from" ? fromRect.width : toRect.width,
      origHeight: target === "from" ? fromRect.height : toRect.height,
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }

  function onMouseMove(e) {
    const ds = dragState.current;
    if (ds.dragging) {
      // Calculate new position
      const deltaX = e.clientX - ds.startX;
      const deltaY = e.clientY - ds.startY;
      if (ds.target === "from") {
        setFromRect((r) => ({
          ...r,
          x: ds.origX + deltaX,
          y: ds.origY + deltaY,
        }));
      } else if (ds.target === "to") {
        setToRect((r) => ({
          ...r,
          x: ds.origX + deltaX,
          y: ds.origY + deltaY,
        }));
      }
    } else if (ds.resizing) {
      // Calculate new size
      const deltaX = e.clientX - ds.startX;
      const deltaY = e.clientY - ds.startY;
      if (ds.resizeTarget === "from") {
        setFromRect((r) => ({
          x: r.x,
          y: r.y,
          width: Math.max(20, ds.origWidth + deltaX),
          height: Math.max(20, ds.origHeight + deltaY),
        }));
      } else if (ds.resizeTarget === "to") {
        setToRect((r) => ({
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

  // Placeholder for your connector annotation control update
  // You can integrate your primitives.ConnectorAnnotationControl here
  useEffect(() => {
    // Simulate connector update on rect changes
    // For example, console.log or call your connector library update here
    // console.log("Update connector with:", fromRect, toRect);
  }, [fromRect, toRect]);

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
          top: fromRect.y,
          left: fromRect.x,
          width: fromRect.width,
          height: fromRect.height,
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

      {/* To Rectangle */}
      <div
        id="torect"
        onMouseDown={(e) => onRectMouseDown(e, "to")}
        style={{
          position: "absolute",
          top: toRect.y,
          left: toRect.x,
          width: toRect.width,
          height: toRect.height,
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
          id="toresizer"
          onMouseDown={(e) => onResizerMouseDown(e, "to")}
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

      {/* Connector annotation area */}
      <ConnectorAnnotationComponent config={{
        fromRectangle: fromRect,
        toRectangle: toRect,
        connectorPlacementType: ConnectorPlacementType.Offbeat,
        connectorShapeType: ConnectorShapeType.OneWay,
        label: "100"
      }} style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none"
      }} />
    </div>
  );
}
