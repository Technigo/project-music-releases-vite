// src/components/Album.jsx

import React, { useState } from 'react';
import { AlbumCover } from './AlbumCover';
import { AlbumName } from './AlbumName';
import { ArtistName } from './ArtistName';

export const Album = ({ album }) => {

    return (
        // This is the main container for our album card
        <div className ="album-card">
        <AlbumCover album={album}/>
        <AlbumName album={album}/>
        <ArtistName album={album}/>
        </div>
    );
};
