import type { Schema, Attribute } from '@strapi/strapi';

export interface PieceTextContent extends Schema.Component {
  collectionName: 'components_piece_text_contents';
  info: {
    displayName: 'Text_content';
    icon: 'pencil';
  };
  attributes: {
    text_content: Attribute.Blocks;
    description: Attribute.Blocks;
  };
}

export interface PiecePiece extends Schema.Component {
  collectionName: 'components_piece_pieces';
  info: {
    displayName: 'media_content';
    icon: 'expand';
    description: '';
  };
  attributes: {
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    description: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'piece.text-content': PieceTextContent;
      'piece.piece': PiecePiece;
    }
  }
}
