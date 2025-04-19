import type { Schema, Struct } from '@strapi/strapi';

export interface EventsParticipant extends Struct.ComponentSchema {
  collectionName: 'components_events_participants';
  info: {
    displayName: 'participant';
    icon: 'user';
  };
  attributes: {
    answers: Schema.Attribute.JSON;
    comment: Schema.Attribute.Text;
    first_name: Schema.Attribute.String & Schema.Attribute.Required;
    last_name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EventsPerformingGroup extends Struct.ComponentSchema {
  collectionName: 'components_events_performing_groups';
  info: {
    displayName: 'performing group';
    icon: 'music';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    thumbnail: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MiscAdditionalFields extends Struct.ComponentSchema {
  collectionName: 'components_misc_additional_fields';
  info: {
    displayName: 'additional_fields';
    icon: 'dashboard';
  };
  attributes: {
    name: Schema.Attribute.String;
    options: Schema.Attribute.Component<'misc.text-list', true>;
    required: Schema.Attribute.Boolean;
    type: Schema.Attribute.Enumeration<
      ['Text', 'Number', 'Enumeration', 'Boolean']
    >;
  };
}

export interface MiscAdress extends Struct.ComponentSchema {
  collectionName: 'components_misc_adresses';
  info: {
    description: '';
    displayName: 'address';
    icon: 'pin';
  };
  attributes: {
    city: Schema.Attribute.String;
    latitude: Schema.Attribute.Decimal;
    longitude: Schema.Attribute.BigInteger;
    number: Schema.Attribute.String & Schema.Attribute.Required;
    postcode: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 99999;
        },
        number
      >;
    street: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MiscPerson extends Struct.ComponentSchema {
  collectionName: 'components_misc_people';
  info: {
    displayName: 'person';
    icon: 'walk';
  };
  attributes: {
    mail: Schema.Attribute.String;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface MiscTextList extends Struct.ComponentSchema {
  collectionName: 'components_misc_text_lists';
  info: {
    displayName: 'Text List';
    icon: 'book';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'events.participant': EventsParticipant;
      'events.performing-group': EventsPerformingGroup;
      'misc.additional-fields': MiscAdditionalFields;
      'misc.adress': MiscAdress;
      'misc.person': MiscPerson;
      'misc.text-list': MiscTextList;
    }
  }
}
