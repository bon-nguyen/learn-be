import React, { useEffect } from 'react';
import { SpinePlayer } from '@esotericsoftware/spine-player';

const Character = () => {
    useEffect(() => {
        const jsonUrl = "https://raw.githubusercontent.com/bon-nguyen/json/main/MapEvent_fx.json";
        const atlasUrl = "https://raw.githubusercontent.com/bon-nguyen/json/main/MapEvent_fx.atlas";

        const player = new SpinePlayer('player-container', {
            jsonUrl: jsonUrl,
            atlasUrl: atlasUrl,
            premultipliedAlpha: true,
            backgroundColor: '#cccccc',
            viewport: {
                debugRender: true,
            },
            showControls: true,
        });

        player.onLoadComplete = () => {
            if (player.skeletonData.animations.find(animation => animation.name === "Auction_Idle")) {
                player.setAnimation(0, "Auction_Idle", true);
            } else {
                console.error("Animation 'Auction_Idle' does not exist in the skeleton.");
            }
        };
    }, []);

    return <div id="player-container" style={{ width: '100%', height: '100vh' }}></div>;
};

export default Character;
