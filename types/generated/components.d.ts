import type { Schema, Struct } from '@strapi/strapi';

export interface ContentPageInfo extends Struct.ComponentSchema {
  collectionName: 'components_content_page_infos';
  info: {
    displayName: 'Page Info';
    icon: 'information';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    menuName: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.page-info': ContentPageInfo;
    }
  }
}
