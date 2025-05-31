'use client';
import React from 'react';

const ReelsFeed = () => {
    const reels = [
        { id: 1, src: '/video/video1.mp4', caption: 'Looking for love ❤️', user: 'Anna' },
        { id: 2, src: '/video/video2.mp4', caption: 'Let’s vibe 💃', user: 'Mark' },
        { id: 3, src: '/video/video3.mp4', caption: 'Out for fun 🎉', user: 'Jenny' },
        { id: 4, src: '/video/video4.mp4', caption: 'Coffee date ☕', user: 'Leo' },
        { id: 5, src: '/video/video5.mp4', caption: 'Sunset walks 🌇', user: 'Nina' },
        { id: 6, src: '/video/video6.mp4', caption: 'Dancing queen 💃', user: 'Olivia' },
    ];

    return (
        <section className="w-full min-h-screen bg-black">
            <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
                {reels.map((reel) => (
                    <div
                        key={reel.id}
                        className="snap-start h-screen w-full relative flex items-end justify-start"
                    >
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src={reel.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        <div className="z-10 p-4 text-white bg-gradient-to-t from-black/60 to-transparent w-full">
                            <p className="text-sm font-semibold">@{reel.user}</p>
                            <p className="text-lg">{reel.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ReelsFeed;
