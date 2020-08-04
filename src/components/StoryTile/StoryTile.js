import React, { useRef, useState, useEffect } from 'react';
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

    useEffect(() => {
        if (props.display) {
            if (tileRef.current.style.position === 'fixed') {
                if (isOpen) {
                    closeStoryTile();
                    return;
                }
            } else {
                setPreviewOpacity(0);
                return;
            }
        } else if (!isOpen) {
            setPreviewOpacity(1);
        }
    }, [props.display]);

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        resizeTile(isOpen, true);
    }, [isOpen]);
    useEffect(() => {
        const updateTile = () => resizeTile(isOpen, false);

        window.addEventListener('resize', updateTile);
        return () => window.removeEventListener('resize', updateTile);
    }, [isOpen]);

    const toggleTransitions = active => {
        if (active) {
            tileRef.current.style.transition = `
                left ${ANIMATION_STEP.STANDARD}s ease, 
                top ${ANIMATION_STEP.STANDARD}s ease, 
                width ${ANIMATION_STEP.STANDARD}s ease,
                height ${ANIMATION_STEP.STANDARD}s ease 
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
        } else {
            tileRef.current.style.transition = '';
            previewRef.current.style.transition = '';
            previewTitleRef.current.style.transition = '';
            previewLogoRef.current.style.transition = '';
            previewScrimRef.current.style.transition = '';
            detailsRef.current.style.transition = '';
            fullScrimRef.current.style.transition = '';
        }
    }

    const setPreviewOpacity = value => {
        previewTitleRef.current.style.opacity = `${value}`;
        previewLogoRef.current.style.opacity = `${value}`;
        previewScrimRef.current.style.opacity = `${value}`;
    }

    const resizeTile = (isOpen, smooth) => {
        const tile = tileRef.current;
        const screenWidth = document.body.clientWidth;

        if (isOpen || tile.style.position === 'fixed') {
            const screenHeight = window.innerHeight;
            const isMobile = screenWidth < BREAKPOINT.MOBILE || screenHeight < BREAKPOINT.MOBILE;
            const isTablet = screenWidth < BREAKPOINT.TABLET || screenHeight < BREAKPOINT.TABLET;
            const isLandscape = screenWidth > screenHeight;
            let target = {};
            let ratio = {};
            const preview = previewRef.current;
            const details = detailsRef.current;
            let detailsPadding = 0;

            if (isOpen) {
                if (tile.style.position !== 'fixed') {
                    const current = containerRef.current.getBoundingClientRect();
                    tile.style.position = 'fixed';
                    tile.style.left = `${current.left}px`;
                    tile.style.top = `${current.top}px`;
                    tile.style.width = `${current.width}px`;
                    tile.style.height = `${current.height}px`;
                }

                if (isMobile) {
                    target.x = 0;
                    target.y = 0;
                    target.width = screenWidth;
                    target.height = screenHeight;
                    detailsPadding = 36;
                    if (isLandscape) {
                        if (screenWidth > 800) {
                            ratio.preview = { x: 0.3, y: 1.0 };
                            ratio.details = { x: 0.7, y: 1.0 };
                        } else {
                            ratio.preview = { x: 0.4, y: 1.0 };
                            ratio.details = { x: 0.6, y: 1.0 };
                        }
                        tile.style.flexDirection = 'row';
                        closeButtonRef.current.style.color = 'black';
                        closeButtonRef.current.style.top = '6px';
                        closeButtonRef.current.style.right = '6px';
                    } else {
                        ratio.preview = { x: 1.0, y: 0.3 };
                        ratio.details = { x: 1.0, y: 0.7 };
                        tile.style.flexDirection = 'column';
                        closeButtonRef.current.style.color = 'white';
                    }
                } else if (isTablet) {
                    target.x = screenWidth * 0.1;
                    target.y = screenHeight * 0.1;
                    target.width = screenWidth * 0.8;
                    target.height = screenHeight * 0.8;
                    detailsPadding = 48;
                    closeButtonRef.current.style.color = 'white';
                    if (isLandscape) {
                        if (screenWidth < 1024) {
                            ratio.preview = { x: 0, y: 1.0 };
                            ratio.details = { x: 1.0, y: 1.0 };
                        } else if (screenWidth < 1100) {
                            ratio.preview = { x: 0.3, y: 1.0 };
                            ratio.details = { x: 0.7, y: 1.0 };
                        } else {
                            ratio.preview = { x: 0.4, y: 1.0 };
                            ratio.details = { x: 0.6, y: 1.0 };
                        }
                        tile.style.flexDirection = 'row';
                    } else {
                        ratio.preview = { x: 1.0, y: 0.3 };
                        ratio.details = { x: 1.0, y: 0.7 };
                        tile.style.flexDirection = 'column';
                    }
                } else {
                    target.x = Math.max((document.body.clientWidth - 1200) / 2, 120);
                    target.y = Math.max((window.innerHeight - 750) / 2, 120);
                    target.width = screenWidth - (2 * target.x);
                    target.height = screenHeight - (2 * target.y);
                    detailsPadding = 60;
                    closeButtonRef.current.style.color = 'white';
                    ratio.preview = { x: 0.4, y: 1.0 };
                    ratio.details = { x: 0.6, y: 1.0 };
                    tile.style.flexDirection = 'row';
                }

                tile.style.borderRadius = isMobile ? '0' : '4px';
            } else {
                target = containerRef.current.getBoundingClientRect();
                if (props.display) target.height = details.clientHeight;
                ratio.preview = { x: 1.0, y: 1.0 };
                ratio.details = { x: 0.0, y: 0.0 };
                details.style.opacity = '0';
                detailsPadding = 0;
            }

            setTimeout(() => {
                tile.style.left = `${target.x}px`;
                tile.style.top = `${target.y}px`;
                tile.style.width = `${target.width}px`;
                tile.style.height = `${target.height}px`;
                preview.style.width = `${target.width * ratio.preview.x}px`;
                preview.style.height = `${target.height * ratio.preview.y}px`;
                details.style.width = `${target.width * ratio.details.x}px`;
                details.style.height = `${target.height * ratio.details.y}px`;
                if (!isOpen) { details.style.padding = `${detailsPadding}px`; }

                setTimeout(() => {
                    if (!isOpen) {
                        tile.removeAttribute('style');
                        preview.removeAttribute('style');
                        details.removeAttribute('style');
                    } else {
                        details.style.padding = `${detailsPadding}px`;
                        details.style.opacity = '1';
                    }
                }, smooth ? ANIMATION_STEP.STANDARD * 1000 : 0);
            }, smooth ? ANIMATION_STEP.SHORT * 1000 : 0);
        }
    };

    const openStoryTile = () => {
        setIsOpen(true);
        toggleTransitions(true);
        document.body.style.overflowY = 'hidden';
        tileRef.current.style.zIndex = '4';
        setPreviewOpacity(0);
        fullScrimRef.current.style.zIndex = '3';
        fullScrimRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        closeButtonRef.current.style.zIndex = '5';
        resizeTile(true, true);
        setTimeout(() => {
            toggleTransitions(false);
        }, ANIMATION_STEP.LONG * 1000);
    }

    const closeStoryTile = () => {
        setIsOpen(false);
        toggleTransitions(true);
        fullScrimRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
        setTimeout(() => {
            closeButtonRef.current.style.zIndex = '-1';
            fullScrimRef.current.style.zIndex = '-1';
            setPreviewOpacity(1);
            document.body.removeAttribute('style');
            resizeTile(false, true);
            setTimeout(() => {
                toggleTransitions(false);
            }, ANIMATION_STEP.SHORT * 1000);
        }, ANIMATION_STEP.STANDARD * 1000);
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