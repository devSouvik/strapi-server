import type { Schema, Attribute } from '@strapi/strapi';

export interface PageComponentsButtonComponent extends Schema.Component {
  collectionName: 'components_page_components_button_components';
  info: {
    displayName: 'ButtonComponent';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    href: Attribute.String;
    ButtonVariant: Attribute.String;
  };
}

export interface PageComponentsCardComponent extends Schema.Component {
  collectionName: 'components_page_components_card_components';
  info: {
    displayName: 'CardComponent';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    Mode: Attribute.String;
    CardIcon: Attribute.String;
  };
}

export interface PageComponentsHeadingBlockComponent extends Schema.Component {
  collectionName: 'components_page_components_heading_block_components';
  info: {
    displayName: 'HeadingBlockComponent';
  };
  attributes: {
    Title: Attribute.String;
  };
}

export interface PageComponentsHeroComponent extends Schema.Component {
  collectionName: 'components_page_components_hero_components';
  info: {
    displayName: 'HeroComponent';
    icon: 'grid';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Blocks;
    backgroundImage: Attribute.Media;
    CTAbutton: Attribute.Component<'page-components.button-component', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page-components.button-component': PageComponentsButtonComponent;
      'page-components.card-component': PageComponentsCardComponent;
      'page-components.heading-block-component': PageComponentsHeadingBlockComponent;
      'page-components.hero-component': PageComponentsHeroComponent;
    }
  }
}
