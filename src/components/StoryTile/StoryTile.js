import React, { useRef } from 'react';
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

    const setOpenTransitions = () => {
        previewRef.current.style.transition = `height 0.2s ease, width 0.25s ease`;
        previewTitleRef.current.style.transition = `opacity 0.1s ease`;
        previewLogoRef.current.style.transition = `opacity 0.1s ease`;
        previewScrimRef.current.style.transition = `opacity 0.1s ease`;
        tileRef.current.style.transition = `top 0.2s ease, height 0.2s ease, left 0.25s ease, width 0.25s ease`;
        fullRef.current.style.transition = `height 0.2s ease, width 0.25s ease, opacity 0.15s ease 0.25s`;
        fullScrimRef.current.style.transition = `background-color 0.25s ease`;
    };

    const setCloseTransitions = () => {
        previewRef.current.style.transition = `height 0.25s ease, width 0.2s ease`;
        previewTitleRef.current.style.transition = `opacity 0.15s ease`;
        previewLogoRef.current.style.transition = `opacity 0.15s ease`;
        previewScrimRef.current.style.transition = `opacity 0.15s ease`;
        tileRef.current.style.transition = `top 0.25s ease, height 0.25s ease, left 0.2s ease, width 0.2s ease`;
        fullRef.current.style.transition = `height 0.25s ease, width 0.2s ease, opacity 0.1s ease`;
        fullScrimRef.current.style.transition = `background-color 0.1s ease`;
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

    const openIfClosed = () => {
        // pre
        setPreviewOpacity(1);
        setTileRect(tileRef.current.getBoundingClientRect());
        setPreviewDimensions(previewRef.current.getBoundingClientRect());
        fullRef.current.style.opacity = '0';
        setOpenTransitions();

        // calc
        const yMargin = 120;
        const xMargin = Math.max((document.body.clientWidth - 1200) / 2, 120);
        const targetWidth = document.body.clientWidth - (2 * xMargin);
        const targetHeight = window.innerHeight - (2 * yMargin);
        const targetTileRect = { top: yMargin, left: xMargin, width: targetWidth, height: targetHeight };
        const targetPreviewDimensions = { width: targetWidth * 0.4, height: targetHeight };

        // post
        setPreviewOpacity(0);

        tileRef.current.style.position = 'fixed';
        tileRef.current.style.zIndex = '4';
        tileRef.current.style.cursor = 'inherit';

        closeButtonRef.current.style.zIndex = '4';

        fullScrimRef.current.style.zIndex = '3';
        fullScrimRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';

        fullRef.current.style.width = `${targetWidth * 0.6}px`;
        fullRef.current.style.height = `${targetHeight}px`;
        fullRef.current.style.padding = '60px';
        fullRef.current.style.opacity = '1';

        setTileRect(targetTileRect);
        setPreviewDimensions(targetPreviewDimensions)
    }

    const closeIfOpened = () => {
        // post
        setCloseTransitions();

        //
        const targetRect = containerRef.current.getBoundingClientRect();

        // post
        setPreviewOpacity(1);

        closeButtonRef.current.style.zIndex = '-1';


        setTileRect(targetRect);
        setPreviewDimensions(targetRect);
        previewRef.current.style.top = '0';
        previewRef.current.style.left = '0';

        fullRef.current.style.width = `0px`;
        fullRef.current.style.height = `500px`;
        fullRef.current.style.padding = '0px';
        fullRef.current.style.opacity = '0';

        tileRef.current.style.cursor = 'pointer';
        fullScrimRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        setTimeout(() => {
            fullScrimRef.current.style.zIndex = '-1';
        }, 100);

        setTimeout(() => {
            tileRef.current.style.transition = '';
            tileRef.current.style.zIndex = '0';
            tileRef.current.style.position = 'relative';
            tileRef.current.style.top = '0';
            tileRef.current.style.left = '0';
        }, 250);
    }

    return (
        <>
            <div ref={containerRef} className={`storytile-container ${props.display ? 'display' : 'active'}`}>
                <Tile ref={tileRef} className={`storytile`} onClick={!props.display && openIfClosed}>
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
                <IconButton icon='close' className='close-button' onClick={closeIfOpened} ref={closeButtonRef} />
                <div className='full-scrim' onClick={closeIfOpened} ref={fullScrimRef} />
            </div>
        </>
    );
}

export default StoryTile;