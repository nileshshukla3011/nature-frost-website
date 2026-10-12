/**
 * Clients, as listed in the company brochure.
 *
 * Each entry with a `logo` shows that file from /public/images/clients/.
 * Entries without one get a drawn monogram from `monogram`, so a client can be
 * listed before their logo artwork arrives — add the file and the field, and
 * the monogram is replaced automatically.
 */

export interface Client {
  name: string;
  /** Short descriptor under the name. */
  sector: string;
  /** Path under /public. Omit to show the monogram instead. */
  logo?: string;
  /** Letters for the monogram fallback. */
  monogram?: string;
}

export const clients: Client[] = [
  {
    name: "Mother Dairy",
    sector: "Dairy & food brand",
    logo: "/images/clients/mother-dairy.webp",
  },
  {
    name: "Government of Bihar",
    sector: "State government",
    logo: "/images/clients/bihar-government.webp",
  },
  {
    name: "Tarkari",
    sector: "Fresh produce",
    logo: "/images/clients/tarkari.webp",
  },
  {
    name: "Trinetra Makhana Corporation",
    sector: "Makhana processing",
    logo: "/images/clients/trinetra-makhana.webp",
  },
  {
    name: "PAF",
    sector: "Agri & farm produce",
    logo: "/images/clients/paf.webp",
  },
  {
    name: "Chitransh Corporate Services",
    sector: "Corporate services",
    monogram: "CCS",
  },
];
