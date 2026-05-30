import { Seo, SITE } from './Seo';
import { organizationSchema, localBusinessSchema, DAS_URL } from './org';

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'DishNet Direct Service Categories',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Low Voltage',
      url: `${SITE}/services/low-voltage`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Security',
      url: `${SITE}/services/security`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Fire / Life Safety',
      url: `${SITE}/services/fire-life-safety`,
    },
  ],
};

export function HomeSeo() {
  return (
    <Seo
      title="DishNet Direct | Low Voltage, Security & Fire/Life Safety Integration"
      description="DishNet Direct is a California low voltage systems integrator delivering security, fire/life safety, AV, and structured cabling — with in-house RF specialists, DAS Systems, handling ERRCS and in-building wireless."
      canonical={SITE}
      jsonLd={[organizationSchema, localBusinessSchema, itemListSchema]}
    />
  );
}

export { DAS_URL };
