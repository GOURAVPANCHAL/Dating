// src/lib/peer.js
import Peer from 'peerjs';

let peer;

export const getPeer = (id = undefined) => {
    if (!peer) {
        peer = new Peer(id, {
            host: 'peerjs-server.herokuapp.com', // For demo/testing
            secure: true,
            port: 443,
        });
    }
    return peer;
};
