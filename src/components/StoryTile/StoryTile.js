import React, { useRef, useState, useEffect } from "react";
import Tile from "../Tile/Tile";
import IconButton from "../IconButton/IconButton";
import ScrollWrapper from "../Wrapper/ScrollWrapper";

import "./StoryTile.scss";

const StoryTile = (props) => {
  const containerRef = useRef();
  const tileRef = useRef();
  const previewRef = useRef();
  const previewTitleRef = useRef();
  const previewLogoRef = useRef();
  const previewScrimRef = useRef();
  const previewImageRef = useRef();
  const detailsRef = useRef();
  const detailsContentRef = useRef();
  const closeButtonRef = useRef();
  const fullScrimRef = useRef();

  const BREAKPOINT = {
    MOBILE: 550,
    TABLET: 900,
    EDUCATION_DISPLAY: 1100,
  };
  const ANIMATION_STEP = {
    SHORT: 0.1,
    STANDARD: 0.2,
    LONG: 0.3,
  };

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.display) {
      if (isOpen) {
        setIsOpen(false);
      } else {
        setPreviewOpacity(0);
      }
    } else if (!isOpen) {
      setPreviewOpacity(1);
    }
  }, [props.display]);

  useEffect(() => {
    if (isOpen) {
      enableTransitions();
      document.body.style.overflowY = "hidden";
      tileRef.current.style.zIndex = "4";
      fadeInScrim();
      setPreviewOpacity(0);
      setTimeout(() => {
        openStoryTile();
        setTimeout(() => {
          showCloseButton();
          disableTransitions();
        }, ANIMATION_STEP.STANDARD * 1000);
      }, ANIMATION_STEP.SHORT * 1000);
    } else {
      if (tileRef.current.style.position === "fixed") {
        enableTransitions();
        hideCloseButton();
        fadeOutScrim();
        closeStoryTile();
        setTimeout(() => {
          document.body.removeAttribute("style");
          !props.display && setPreviewOpacity(1);
          setTimeout(() => {
            disableTransitions();
          }, ANIMATION_STEP.SHORT * 1000);
        }, ANIMATION_STEP.LONG * 1000);
      }
    }
  }, [isOpen, props.display]);

  useEffect(() => {
    const updateTile = () => isOpen && resizeStoryTile(false);

    window.addEventListener("resize", updateTile);
    return () => window.removeEventListener("resize", updateTile);
  }, [isOpen]);

  const enableTransitions = () => {
    tileRef.current.style.transition = `
                left ${ANIMATION_STEP.STANDARD}s ease, 
                top ${ANIMATION_STEP.STANDARD}s ease, 
                width ${ANIMATION_STEP.STANDARD}s ease,
                height ${ANIMATION_STEP.STANDARD}s ease,
                border-radius ${ANIMATION_STEP.STANDARD}s ease
            `;
    previewRef.current.style.transition = `
                height ${ANIMATION_STEP.STANDARD}s ease,
                width ${ANIMATION_STEP.STANDARD}s ease
            `;
    previewTitleRef.current.style.transition = `opacity ${ANIMATION_STEP.SHORT}s ease`;
    previewLogoRef.current.style.transition = `opacity ${ANIMATION_STEP.SHORT}s ease`;
    previewScrimRef.current.style.transition = `opacity ${ANIMATION_STEP.SHORT}s ease`;
    detailsRef.current.style.transition = `
                height ${ANIMATION_STEP.STANDARD}s ease,
                width ${ANIMATION_STEP.STANDARD}s ease,
                opacity ${ANIMATION_STEP.SHORT}s ease
            `;
    fullScrimRef.current.style.transition = `background-color ${ANIMATION_STEP.LONG}s ease`;
  };

  const disableTransitions = () => {
    tileRef.current.style.transition = "";
    previewRef.current.style.transition = "";
    previewTitleRef.current.style.transition = "";
    previewLogoRef.current.style.transition = "";
    previewScrimRef.current.style.transition = "";
    detailsRef.current.style.transition = "";
    fullScrimRef.current.style.transition = "";
  };

  const fadeInScrim = () => {
    fullScrimRef.current.style.zIndex = "3";
    fullScrimRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  };

  const fadeOutScrim = () => {
    fullScrimRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    setTimeout(() => {
      fullScrimRef.current.style.zIndex = "-1";
    }, ANIMATION_STEP.LONG * 1000);
  };

  const showCloseButton = () => (closeButtonRef.current.style.zIndex = "5");

  const hideCloseButton = () => (closeButtonRef.current.style.zIndex = "-1");

  const setPreviewOpacity = (value) => {
    previewTitleRef.current.style.opacity = `${value}`;
    previewLogoRef.current.style.opacity = `${value}`;
    previewScrimRef.current.style.opacity = `${value}`;
  };

  const setBoundingClientRect = (element, rect) => {
    if (rect.x !== undefined) element.style.left = `${rect.x}px`;
    if (rect.y !== undefined) element.style.top = `${rect.y}px`;
    if (rect.width !== undefined) element.style.width = `${rect.width}px`;
    if (rect.height !== undefined) element.style.height = `${rect.height}px`;
    if (rect.top !== undefined) element.style.top = `${rect.top}px`;
    if (rect.right !== undefined) element.style.right = `${rect.right}px`;
    if (rect.bottom !== undefined) element.style.bottom = `${rect.bottom}px`;
    if (rect.left !== undefined) element.style.left = `${rect.left}px`;
  };

  const getScreenProperties = () => {
    return {
      width: document.body.clientWidth,
      height: window.innerHeight,
      isMobile:
        document.body.clientWidth < BREAKPOINT.MOBILE ||
        window.innerHeight < BREAKPOINT.MOBILE,
      isTablet:
        document.body.clientWidth < BREAKPOINT.TABLET ||
        window.innerHeight < BREAKPOINT.TABLET,
      isLandscape: document.body.clientWidth > window.innerHeight,
    };
  };

  const getTileChildrenDimensions = (tileRect, isOpen) => {
    const screen = getScreenProperties();
    const detailColumnLayoutBreakpoint = 800;
    const landscapeSmallBreakpoint = 1024;
    const landscapeMediumBreakpoint = 1100;

    let ratio = {};
    let detailsPadding;
    if (isOpen) {
      closeButtonRef.current.className = "IconButton close-button";
      if (screen.isMobile) {
        detailsPadding = 36;
        if (screen.isLandscape) {
          closeButtonRef.current.className += " dark";
          if (screen.width > detailColumnLayoutBreakpoint) {
            ratio.preview = { width: 0.3, height: 1.0 };
            ratio.details = { width: 0.7, height: 1.0 };
          } else {
            ratio.preview = { width: 0.4, height: 1.0 };
            ratio.details = { width: 0.6, height: 1.0 };
          }
        } else {
          ratio.preview = { width: 1.0, height: 0.3 };
          ratio.details = { width: 1.0, height: 0.7 };
        }
      } else {
        detailsPadding = screen.isTablet ? 48 : 60;
        if (screen.isLandscape) {
          if (screen.width < landscapeSmallBreakpoint) {
            ratio.preview = { width: 0.0, height: 1.0 };
            ratio.details = { width: 1.0, height: 1.0 };
          } else if (screen.width < landscapeMediumBreakpoint) {
            ratio.preview = { width: 0.3, height: 1.0 };
            ratio.details = { width: 0.7, height: 1.0 };
          } else {
            ratio.preview = { width: 0.4, height: 1.0 };
            ratio.details = { width: 0.6, height: 1.0 };
          }
        } else {
          ratio.preview = { width: 1.0, height: 0.3 };
          ratio.details = { width: 1.0, height: 0.7 };
        }
      }
    } else {
      detailsPadding = 0;
      if (props.display) {
        const expandedImageBreakpoint = 1250;
        if (screen.width < expandedImageBreakpoint) {
          ratio.preview = { width: 0.3, height: 1.0 };
          ratio.details = { width: 0.7, height: 1.0 };
        } else {
          ratio.preview = { width: 0.4, height: 1.0 };
          ratio.details = { width: 0.6, height: 1.0 };
        }
      } else {
        ratio.preview = { width: 1.0, height: 1.0 };
        ratio.details = { width: 0.0, height: 0.0 };
      }
    }

    return {
      preview: {
        width: tileRect.width * ratio.preview.width,
        height: tileRect.height * ratio.preview.height,
      },
      details: {
        width: tileRect.width * ratio.details.width,
        height: tileRect.height * ratio.details.height,
        padding: detailsPadding,
      },
    };
  };

  const resizeStoryTile = (smooth) => {
    // properties
    const screen = getScreenProperties();
    const maxWidth = 1200;
    const maxHeight = 750;
    const minMargin = 120;

    // find ending margins
    let target = {};
    if (screen.isMobile) {
      target.x = 0;
      target.y = 0;
    } else if (screen.isTablet) {
      target.x = screen.width * 0.1;
      target.y = screen.height * 0.1;
    } else {
      target.x = Math.max(
        (document.body.clientWidth - maxWidth) / 2,
        minMargin
      );
      target.y = Math.max((window.innerHeight - maxHeight) / 2, minMargin);
    }

    // find ending width & height
    target.width = screen.width - 2 * target.x;
    target.height = screen.height - 2 * target.y;
    const children = getTileChildrenDimensions(target, true);

    // set ending rect
    setBoundingClientRect(tileRef.current, target);
    setBoundingClientRect(previewRef.current, children.preview);
    setBoundingClientRect(detailsRef.current, children.details);
    tileRef.current.style.borderRadius = screen.isMobile ? "0" : "4px";
    tileRef.current.style.flexDirection = screen.isLandscape ? "row" : "column";
    setTimeout(
      () => {
        tileRef.current.style.cursor = "inherit";
        detailsContentRef.current.style.padding = `${children.details.padding}px`;
        detailsRef.current.style.opacity = "1.0";
      },
      smooth ? ANIMATION_STEP.STANDARD * 1000 : 0
    );
  };

  const openStoryTile = () => {
    // set starting rect
    tileRef.current.style.position = "fixed";
    const startingRect = containerRef.current.getBoundingClientRect();
    setBoundingClientRect(tileRef.current, startingRect);
    setBoundingClientRect(previewRef.current, {
      width: startingRect.width,
      height: startingRect.height,
    });

    // set finishing rect
    resizeStoryTile(true);
  };

  const closeStoryTile = () => {
    // find ending width & height
    const target = containerRef.current.getBoundingClientRect();
    if (props.display) target.height = detailsRef.current.clientHeight;
    const children = getTileChildrenDimensions(target, false);

    // set ending rect
    detailsRef.current.style.opacity = "0.0";
    setTimeout(() => {
      detailsRef.current.style.padding = `${children.details.padding}px`;
      setBoundingClientRect(tileRef.current, target);
      setBoundingClientRect(previewRef.current, children.preview);
      setBoundingClientRect(detailsRef.current, children.details);
      tileRef.current.style.borderRadius = "4px";
      setTimeout(() => {
        tileRef.current.removeAttribute("style");
        previewRef.current.removeAttribute("style");
        detailsRef.current.removeAttribute("style");

        if (props.display && !CSS.supports("height: fit-content")) {
          containerRef.current.style.height =
            tileRef.current.getBoundingClientRect().height;
        }
      }, ANIMATION_STEP.STANDARD * 1000);
    }, ANIMATION_STEP.SHORT * 1000);
  };

  return (
    <>
      <div
        ref={containerRef}
        className={`storytile-container ${
          props.display ? "display" : "active"
        }`}
      >
        <Tile
          ref={tileRef}
          className={`storytile`}
          onClick={() =>
            !props.display && !isOpen ? setIsOpen(true) : undefined
          }
        >
          <div className="preview" ref={previewRef}>
            <h4 className="title" ref={previewTitleRef}>
              {props.title}
            </h4>
            <img
              className="logoImage"
              src={props.logoImage}
              alt=""
              ref={previewLogoRef}
            />
            <div className="scrim" ref={previewScrimRef} />
            <img
              className="mainImage"
              src={props.mainImage}
              alt=""
              ref={previewImageRef}
            />
          </div>
          <ScrollWrapper className="details" ref={detailsRef} vertical>
            <div ref={detailsContentRef}>
              <h2 className="title">{props.title}</h2>
              {props.children}
            </div>
          </ScrollWrapper>
        </Tile>
        <IconButton
          icon="close"
          className="close-button"
          onClick={() => (isOpen ? setIsOpen(false) : undefined)}
          ref={closeButtonRef}
        />
        <div
          className="full-scrim"
          onClick={() => (isOpen ? setIsOpen(false) : undefined)}
          ref={fullScrimRef}
        />
      </div>
    </>
  );
};

export default StoryTile;
