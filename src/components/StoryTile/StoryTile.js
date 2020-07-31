import React, { useRef, useState } from 'react';
import Tile from '../Tile/Tile';
import IconButton from '../IconButton/IconButton';

import './StoryTile.scss';

const StoryTile = props => {
    const containerRef = useRef();
    const tileRef = useRef();

    const previewRef = useRef();
    const previewTitleRef = useRef();
    const previewLogoRef = useRef();
    const previewScrimRef = useRef();
    const previewImageRef = useRef();

    const detailsRef = useRef();

    const closeButtonRef = useRef();
    const fullScrimRef = useRef();

    const BREAKPOINT = {
        MOBILE: 550,
        TABLET: 900
    };
    const ANIMATION_STEP = {
        SHORT: 0.1,
        STANDARD: 0.2,
        LONG: 0.3
    };

    const [isOpen, setIsOpen] = useState(false);

    const setOpenTransitions = () => {
        previewRef.current.style.transition = `height 0.2s ease, width 0.2s ease`;
        previewTitleRef.current.style.transition = `opacity 0.1s ease`;
        previewLogoRef.current.style.transition = `opacity 0.1s ease`;
        previewScrimRef.current.style.transition = `opacity 0.1s ease`;
        detailsRef.current.style.transition = `height 0.2s ease, width 0.2s ease, opacity 0.1s ease`;
        fullScrimRef.current.style.transition = `background-color 0.3s ease`;
    };

    const setCloseTransitions = () => {
        previewRef.current.style.transition = `height 0.2s ease, width 0.2s ease`;
        previewTitleRef.current.style.transition = `opacity 0.1s ease`;
        previewLogoRef.current.style.transition = `opacity 0.1s ease`;
        previewScrimRef.current.style.transition = `opacity 0.1s ease`;
        tileRef.current.style.transition = `top 0.2s ease, height 0.2s ease, left 0.2s ease, width 0.2s ease`;
        detailsRef.current.style.transition = `height 0.2s ease, width 0.2s ease, opacity 0.1s ease`;
        fullScrimRef.current.style.transition = `background-color 0.3s ease`;
    }

    const setPreviewOpacity = value => {
        previewTitleRef.current.style.opacity = `${value}`;
        previewLogoRef.current.style.opacity = `${value}`;
        previewScrimRef.current.style.opacity = `${value}`;
    }

    const setTileRect = rect => {
        tileRef.current.style.top = `${rect.top}px`;
        tileRef.current.style.left = `${rect.left}px`;
        tileRef.current.style.width = `${rect.width}px`;
        tileRef.current.style.height = `${rect.height}px`;
    }

    const setPreviewDimensions = rect => {
        previewRef.current.style.width = `${rect.width}px`;
        previewRef.current.style.height = `${rect.height}px`;
    }

    const updateTile = (isOpen, smooth) => {
        const screenWidth = document.body.clientWidth;
        const screenHeight = window.innerHeight;
        const ref = tileRef.current;
        let margin = {
            x: 0,
            y: 0
        };
        let dimens = {
            width: 0,
            height: 0,
        }

        if (isOpen && ref.style.position !== 'fixed') {
            const current = containerRef.current.getBoundingClientRect();
            ref.style = {
                ...ref.style,
                position: 'fixed',
                left: current.left,
                top: current.top,
                width: current.width,
                height: current.height
            };

            const isMobile = screenWidth < BREAKPOINT.MOBILE || screenHeight < BREAKPOINT.MOBILE;
            const isTablet = screenWidth < BREAKPOINT.TABLET || screenHeight < BREAKPOINT.TABLET;
            const isDesktop = !isMobile && !isTablet;
            const isLandscape = screenWidth > screenHeight;

            console.log(isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop');
            console.log(isLandscape ? 'landscape' : 'portrait');

            if (isTablet) {
                margin.x = screenWidth * 0.1;
                margin.y = screenHeight * 0.1;
            } else if (!isDesktop) {
                margin.x = Math.max((document.body.clientWidth - 1200) / 2, 120);
                margin.y = Math.max((window.innerHeight - 750) / 2, 120);
            }
            ref.style.flexDirection = isLandscape ? 'row' : 'column';
            ref.style.borderRadius = isMobile ? '0' : '4px';
        } else if (ref.style.position === 'fixed') {
            const target = containerRef.current.getBoundingClientRect();
            margin.x = target.left;
            margin.y = target.top;
        } else {
            return;
        }

        if (smooth) {
            tileRef.current.style.transition = `
                left ${ANIMATION_STEP.STANDARD}s ease, 
                top ${ANIMATION_STEP.STANDARD}s ease, 
                width ${ANIMATION_STEP.STANDARD}s ease,
                height ${ANIMATION_STEP.STANDARD}s ease 
            `;
        } else {
            tileRef.current.style.transition = '';
        }

        ref.style = {
            ...ref.style,
            left: `${margin.x}px`,
            top: `${margin.y}px`,
            width: `${screenWidth - (2 * margin.x)}px`,
            height: `${screenHeight - (2 * margin.y)}px`
        };

        if (!isOpen) {
            const wait = smooth ? ANIMATION_STEP.STANDARD : 0;
            setTimeout(() => {
                ref.style = {
                    ...ref.style,
                    position: 'relative',
                    left: '0',
                    top: '0',
                    width: '100%',
                    height: '100%'
                };
            }, wait);
        }

        resizePreview(isOpen, smooth);
        resizeDetails(isOpen, smooth);
    }

    const resizePreview = (isOpen, smooth) => {

    }

    const resizeDetails = (isOpen, smooth) => {

    }

    const openStoryTile = () => {
        // pre
        setPreviewOpacity(1);
        setPreviewDimensions(containerRef.current.getBoundingClientRect());
        detailsRef.current.style.opacity = '0';
        detailsRef.current.style.width = '0';
        detailsRef.current.style.height = '500px';
        setOpenTransitions();

        // calc
        let yMargin, xMargin, tileWidth, tileHeight, previewWidth, previewHeight, fullWidth, fullHeight, fullPadding;
        if (document.body.clientWidth < 799) {
            yMargin = 0;
            xMargin = 0;
            tileWidth = document.body.clientWidth;
            tileHeight = window.innerHeight;

            fullPadding = '36px';
        } else {
            yMargin = Math.max((window.innerHeight - 750) / 2, 120);
            xMargin = Math.max((document.body.clientWidth - 1200) / 2, 120);

            tileWidth = document.body.clientWidth - (2 * xMargin);
            tileHeight = window.innerHeight - (2 * yMargin);

            fullPadding = '60px';
        }
        if (document.body.clientWidth < 799 && document.body.clientWidth < window.innerHeight) {
            previewWidth = tileWidth;
            fullWidth = tileWidth;
            previewHeight = tileHeight * 0.3;
            fullHeight = tileHeight * 0.7;
        } else {
            previewWidth = tileWidth * 0.4;
            fullWidth = tileWidth * 0.6;
            previewHeight = tileHeight;
            fullHeight = tileHeight;
            tileRef.current.style.flexDirection = 'row';
        }
        const targetPreviewDimensions = { width: previewWidth, height: previewHeight };

        // post
        setIsOpen(true);
        document.body.style.overflowY = 'hidden';
        setPreviewOpacity(0);
        setTimeout(() => {
            tileRef.current.style.zIndex = '4';
            tileRef.current.style.cursor = 'inherit';

            closeButtonRef.current.style.zIndex = '4';

            fullScrimRef.current.style.zIndex = '3';
            fullScrimRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';

            detailsRef.current.style.width = `${fullWidth}px`;
            detailsRef.current.style.height = `${fullHeight}px`;


            updateTile(true, true);
            setPreviewDimensions(targetPreviewDimensions);

            setTimeout(() => {
                detailsRef.current.style.opacity = '1';
                detailsRef.current.style.padding = fullPadding;
            }, 200);
        }, 100);
    }

    const closeStoryTile = () => {
        // post
        setCloseTransitions();

        // calc
        const targetRect = containerRef.current.getBoundingClientRect();

        // post
        setIsOpen(false);
        document.body.style.overflowY = 'auto';
        closeButtonRef.current.style.zIndex = '-1';
        detailsRef.current.style.opacity = '0';

        setTimeout(() => {
            setTileRect(targetRect);
            setPreviewDimensions(targetRect);
            detailsRef.current.style.width = `0`;
            detailsRef.current.style.height = `0`;
            detailsRef.current.style.padding = '0';

            fullScrimRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            setTimeout(() => {
                setPreviewOpacity(1);
            }, 100);

            setTimeout(() => {
                tileRef.current.style.cursor = 'pointer';
                fullScrimRef.current.style.zIndex = '-1';

                if (document.body.clientWidth < 800) {
                    tileRef.current.style.borderRadius = '4px';
                }

                tileRef.current.style.transition = '';
                tileRef.current.style.zIndex = '0';
                updateTile(false, true);
                previewRef.current.style.width = '100%';
                previewRef.current.style.height = '100%';
            }, 200);
        }, 100);

    }

    return (
        <>
            <div ref={containerRef} className={`storytile-container ${props.display ? 'display' : 'active'}`}>
                <Tile ref={tileRef} className={`storytile`} onClick={!props.display && !isOpen ? openStoryTile : undefined}>
                    <div className='preview' ref={previewRef}>
                        <h4 className='title' ref={previewTitleRef}>{props.title}</h4>
                        <img className='logoImage' src={props.logoImage} alt='' ref={previewLogoRef} />
                        <div className='scrim' ref={previewScrimRef} />
                        <img className='mainImage' src={props.mainImage} alt='' ref={previewImageRef} />
                    </div>
                    <div className='details' ref={detailsRef}>
                        <h2 className='title'>{props.title}</h2>
                        {props.children}
                    </div>
                </Tile>
                <IconButton icon='close' className='close-button' onClick={isOpen ? closeStoryTile : undefined} ref={closeButtonRef} />
                <div className='full-scrim' onClick={isOpen ? closeStoryTile : undefined} ref={fullScrimRef} />
            </div>
        </>
    );
}

export default StoryTile;