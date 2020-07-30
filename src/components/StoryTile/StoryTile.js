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

    const fullRef = useRef();

    const closeButtonRef = useRef();
    const fullScrimRef = useRef();

    const [isOpen, setIsOpen] = useState(false);

    const setOpenTransitions = () => {
        previewRef.current.style.transition = `height 0.2s ease, width 0.2s ease`;
        previewTitleRef.current.style.transition = `opacity 0.1s ease`;
        previewLogoRef.current.style.transition = `opacity 0.1s ease`;
        previewScrimRef.current.style.transition = `opacity 0.1s ease`;
        tileRef.current.style.transition = `top 0.2s ease, height 0.2s ease, left 0.2s ease, width 0.2s ease`;
        fullRef.current.style.transition = `height 0.2s ease, width 0.2s ease, opacity 0.1s ease`;
        fullScrimRef.current.style.transition = `background-color 0.3s ease`;
    };

    const setCloseTransitions = () => {
        previewRef.current.style.transition = `height 0.2s ease, width 0.2s ease`;
        previewTitleRef.current.style.transition = `opacity 0.1s ease`;
        previewLogoRef.current.style.transition = `opacity 0.1s ease`;
        previewScrimRef.current.style.transition = `opacity 0.1s ease`;
        tileRef.current.style.transition = `top 0.2s ease, height 0.2s ease, left 0.2s ease, width 0.2s ease`;
        fullRef.current.style.transition = `height 0.2s ease, width 0.2s ease, opacity 0.1s ease`;
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

    const openStoryTile = () => {
        // pre
        setPreviewOpacity(1);
        tileRef.current.style.position = 'fixed';
        setTileRect(containerRef.current.getBoundingClientRect());
        setPreviewDimensions(containerRef.current.getBoundingClientRect());
        fullRef.current.style.opacity = '0';
        fullRef.current.style.width = '0';
        fullRef.current.style.height = '500px';
        setOpenTransitions();

        // calc
        let yMargin, xMargin, tileWidth, tileHeight, previewWidth, previewHeight, fullWidth, fullHeight, fullPadding;
        if (document.body.clientWidth < 799) {
            yMargin = 0;
            xMargin = 0;
            tileWidth = document.body.clientWidth;
            previewWidth = tileWidth;
            fullWidth = tileWidth;

            tileHeight = window.innerHeight;
            previewHeight = tileHeight * 0.3;
            fullHeight = tileHeight * 0.7;

            fullPadding = '36px';
        } else {
            yMargin = Math.max((window.innerHeight - 750) / 2, 120);
            xMargin = Math.max((document.body.clientWidth - 1200) / 2, 120);

            tileWidth = document.body.clientWidth - (2 * xMargin);
            previewWidth = tileWidth * 0.4;
            fullWidth = tileWidth * 0.6;

            tileHeight = window.innerHeight - (2 * yMargin);
            previewHeight = tileHeight;
            fullHeight = tileHeight;

            fullPadding = '60px';
        }
        const targetTileRect = { top: yMargin, left: xMargin, width: tileWidth, height: tileHeight };
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

            fullRef.current.style.width = `${fullWidth}px`;
            fullRef.current.style.height = `${fullHeight}px`;


            setTileRect(targetTileRect);
            setPreviewDimensions(targetPreviewDimensions);

            setTimeout(() => {
                if (document.body.clientWidth < 800) {
                    tileRef.current.style.borderRadius = '0';
                    tileRef.current.style.height = '100vh';
                    tileRef.current.style.width = '100vw';
                }
                fullRef.current.style.opacity = '1';
                fullRef.current.style.padding = fullPadding;
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
        fullRef.current.style.opacity = '0';

        setTimeout(() => {
            setTileRect(targetRect);
            setPreviewDimensions(targetRect);
            fullRef.current.style.width = `0`;
            fullRef.current.style.height = `0`;
            fullRef.current.style.padding = '0';

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
                tileRef.current.style.position = 'relative';
                tileRef.current.style.top = '0';
                tileRef.current.style.left = '0';
                tileRef.current.style.width = '100%';
                tileRef.current.style.height = '100%';
                previewRef.current.style.width = '100%';
                previewRef.current.style.height = '100%';
            }, 200);
        }, 100);

    }

    return (
        <>
            <div ref={containerRef} className={`storytile-container ${props.display ? 'display' : 'active'}`}>
                <Tile ref={tileRef} className={`storytile`} onClick={!props.display && !isOpen && openStoryTile}>
                    <div className='preview' ref={previewRef}>
                        <h4 className='title' ref={previewTitleRef}>{props.title}</h4>
                        <img className='logoImage' src={props.logoImage} alt='' ref={previewLogoRef} />
                        <div className='scrim' ref={previewScrimRef} />
                        <img className='mainImage' src={props.mainImage} alt='' ref={previewImageRef} />
                    </div>
                    <div className='full' ref={fullRef}>
                        <h2 className='title'>{props.title}</h2>
                        {props.children}
                    </div>
                </Tile>
                <IconButton icon='close' className='close-button' onClick={isOpen && closeStoryTile} ref={closeButtonRef} />
                <div className='full-scrim' onClick={isOpen && closeStoryTile} ref={fullScrimRef} />
            </div>
        </>
    );
}

export default StoryTile;