// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import author from "./documents/author";
import post from "./documents/post";
import siteSettings from "./documents/siteSettings";
import project from "./documents/project";
import page from "./documents/page";
import navigation from "./documents/navigation";

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";
import section from "./objects/section";
import sectionBlock from "./objects/sectionBlock";
import navItem from "./objects/navItem";
import link from "./objects/link";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    post,
    author,
    mainImage,
    authorReference,
    bodyPortableText,
    excerptPortableText,
    project,
    page,
    section,
    sectionBlock,
    link,
    navItem,
    navigation,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
