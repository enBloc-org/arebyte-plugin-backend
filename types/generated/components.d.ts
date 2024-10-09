import type { Schema, Attribute } from '@strapi/strapi';

export interface PieceUpcomingEvent extends Schema.Component {
  collectionName: 'components_piece_upcoming_events';
  info: {
    displayName: 'upcoming_event';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    event_name: Attribute.String & Attribute.Required;
    event_location: Attribute.String & Attribute.Required;
    event_date: Attribute.DateTime & Attribute.Required;
    event_link: Attribute.String & Attribute.DefaultTo<'https://'>;
  };
}

export interface PieceTextContent extends Schema.Component {
  collectionName: 'components_piece_text_contents';
  info: {
    displayName: 'text_content';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    text_content: Attribute.Blocks;
    description: Attribute.Blocks;
  };
}

export interface PieceSocialMediaLink extends Schema.Component {
  collectionName: 'components_piece_social_media_links';
  info: {
    displayName: 'social_media_link';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    platform: Attribute.Enumeration<
      [
        'Facebook',
        'Instagram',
        'Linkedin',
        'Tiktok',
        'X',
        'Mastodon',
        'Youtube'
      ]
    > &
      Attribute.Required;
    link_url: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'https://'>;
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
      'piece.upcoming-event': PieceUpcomingEvent;
      'piece.text-content': PieceTextContent;
      'piece.social-media-link': PieceSocialMediaLink;
      'piece.piece': PiecePiece;
    }
  }
}
