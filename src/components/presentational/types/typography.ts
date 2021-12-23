export type BasicTypographyType = {
  align?: "right" | "left" | "center" | "justify";
  component: React.ElementType;
  color?: string;
  fontFamily?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
};
