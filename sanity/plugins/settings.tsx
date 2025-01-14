import { type DocumentDefinition } from 'sanity';
import { type StructureResolver } from 'sanity/structure';

export const pageStructure =
  (typeDefArray: DocumentDefinition[]): StructureResolver =>
  (S) => {
    const singletonItems = typeDefArray.map((typeDef) =>
      S.listItem()
        .title(typeDef.title!)
        .child(S.editor().id(typeDef.name).schemaType(typeDef.name).documentId(typeDef.name)),
    );

    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) => !typeDefArray.find((singleton) => singleton.name === listItem.getId()),
    );

    return S.list()
      .title('Content')
      .items([...singletonItems, S.divider(), ...defaultListItems]);
  };
