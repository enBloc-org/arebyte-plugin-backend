import type { Schema, Attribute } from '@strapi/strapi';

export interface PiecePiece extends Schema.Component {
  collectionName: 'components_piece_pieces';
  info: {
    displayName: 'piece';
    icon: 'command';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    description: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'piece.piece': PiecePiece;
    }
  }
}
