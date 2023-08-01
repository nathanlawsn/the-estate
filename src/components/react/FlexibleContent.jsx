import Lodges from "../Lodges.astro";
import Accordion from "./Accordion";

const FlexibleContent = ({data}) => {
  const { acf_fc_layout } = data;

  switch (acf_fc_layout) {
    case 'text':
      return <p>Text strip</p>;
    case 'accordion':
      return <p>Accordion strip</p>;
    case 'featured_accommodation':
      return <p>Featured accommodation strip</p>;
    default:
      return null; // Render a default component or return null for unknown layout types
  }
};

export default FlexibleContent;
